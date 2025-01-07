import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params?.id; // Access the route parameter
    if (!id) {
      return NextResponse.json({ error: 'Airdrop ID is required' }, { status: 400 });
    }

    const response = await fetch(`https://mastercrypto.org/airdrops/${id}/`);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch airdrop' }, { status: 500 });
  }
}
