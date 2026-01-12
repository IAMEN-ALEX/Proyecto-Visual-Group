
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, reason, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Lazy migration: Create table if it doesn't exist
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        reason TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

        try {
            await query(createTableQuery);
        } catch (dbError: any) {
            console.error('❌ Table Creation Error:', dbError);
            return NextResponse.json(
                { error: `Database Connection/Table Error: ${dbError.message}` },
                { status: 500 }
            );
        }

        // Insert message
        const insertQuery = `
      INSERT INTO messages (name, email, phone, reason, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, created_at;
    `;

        try {
            const result = await query(insertQuery, [
                name,
                email,
                phone || null,
                reason || 'General',
                message
            ]);

            return NextResponse.json(
                {
                    success: true,
                    message: 'Message sent successfully',
                    data: result.rows[0]
                },
                { status: 200 }
            );
        } catch (insertError: any) {
            console.error('❌ Data Insertion Error:', insertError);
            return NextResponse.json(
                { error: `Data Insertion Error: ${insertError.message}` },
                { status: 500 }
            );
        }

    } catch (error: any) {
        console.error('❌ Global API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
