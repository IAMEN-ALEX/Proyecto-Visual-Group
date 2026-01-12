
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

const getSSLConfig = () => {
    if (!connectionString) return undefined;

    // Disable SSL for local connections
    const isLocalhost = connectionString.includes('localhost') || connectionString.includes('127.0.0.1');
    if (isLocalhost) return undefined;

    // For Railway/Neon/Other cloud DBs, use rejectUnauthorized: false
    // unless the URL explicitly specifies sslmode=disable
    if (connectionString.includes('sslmode=disable')) return undefined;

    return { rejectUnauthorized: false };
};

if (!connectionString) {
    console.error("❌ Database Error: Neither DATABASE_URL nor POSTGRES_URL is defined.");
}

const pool = new Pool({
    connectionString,
    ssl: getSSLConfig(),
});

export const query = async (text: string, params?: any[]) => {
    try {
        const start = Date.now();
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        // console.log('executed query', { text, duration, rows: res.rowCount });
        return res;
    } catch (error) {
        throw error;
    }
};
