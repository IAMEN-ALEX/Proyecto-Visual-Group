
import { Pool } from 'pg';

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = process.env.POSTGRES_URL;

const getSSLConfig = () => {
    // If running on localhost, we might not need SSL, but for remote DBs (Railway/Neon) we usually do.
    // We'll default to requiring SSL with rejectUnauthorized: false for compatibility.
    // If the connection string explicitly says ?sslmode=disable, pg might handle it, but we set the config object here.
    if (!connectionString) return undefined;

    const isLocalhost = connectionString.includes('localhost') || connectionString.includes('127.0.0.1');
    if (isLocalhost) return undefined;

    return { rejectUnauthorized: false };
};

if (!connectionString) {
    console.error("❌ Database Error: POSTGRES_URL is not defined in environment variables.");
}

const pool = new Pool({
    connectionString,
    ssl: getSSLConfig(),
    // connectionTimeoutMillis: 5000, // Optional: Fail fast if connection is stuck
});

export const query = async (text: string, params?: any[]) => {
    try {
        return await pool.query(text, params);
    } catch (error) {
        console.error("❌ Database Query Error:", error);
        throw error;
    }
};
