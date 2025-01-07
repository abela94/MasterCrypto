import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Extract id from URL
    //const { id } = request.query; // Or use this if you're passing id as a query parameter

    if (!id) {
      return NextResponse.json({ error: 'Missing airdrop ID' }, { status: 400 });
    }

    const response = await fetch(`https://mastercrypto.org/airdrops/${id}/`);
    if (!response.ok) { // Check for fetch errors
      return NextResponse.json({ error: 'Airdrop not found' }, { status: 404 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching airdrop:", error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to fetch airdrop' }, { status: 500 });
  }
}