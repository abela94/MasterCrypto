import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`https://mastercrypto.org/airdrops/${params.id}/`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch airdrop' }, { status: 500 });
  }
}

// ✅ Generate static parameters for GitHub Pages static export
export async function generateStaticParams() {
  try {
    const res = await fetch('https://mastercrypto.org/airdrops/');
    const airdrops = await res.json();

    return airdrops.map((airdrop: { id: string }) => ({
      id: airdrop.id.toString(),
    }));
  } catch (error) {
    console.error('Failed to fetch airdrop IDs:', error);
    return [];
  }
}


// import { NextResponse } from 'next/server'

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const response = await fetch(`https://mastercrypto.org/airdrops/${params.id}/`)
//     const data = await response.json()
//     return NextResponse.json(data)
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch airdrop' }, { status: 500 })
//   }
// }

// // export async function generateStaticParams() {
// //   try {
// //     // Fetch all airdrop IDs from your API
// //     const response = await fetch('https://mastercrypto.org/airdrops/')
// //     const airdrops = await response.json()

// //     // Return an array of objects, each with an 'id' property
// //     return airdrops.map((airdrop: { id: string }) => ({
// //       id: airdrop.id,
// //     }))
// //   } catch (error) {
// //     console.error('Failed to fetch airdrop IDs for static generation:', error)
// //     return [] // Return an empty array if fetching fails
// //   }
// // }

