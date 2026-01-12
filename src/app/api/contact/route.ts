
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
        // In a production app, use proper migrations (e.g., node-pg-migrate, prisma, drizzle)
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
        await query(createTableQuery);

        // Insert message
        const insertQuery = `
      INSERT INTO messages (name, email, phone, reason, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, created_at;
    `;

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

    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
