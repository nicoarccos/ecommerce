import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'success',
    message: 'Auth system is working correctly',
    timestamp: new Date().toISOString()
  });
} 