// app/api/posts/[id]/route.js

import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const response = await fetch(`https://mastercrypto.org/posts/${params.id}/`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

export async function generateStaticParams() {
  // Fetch all possible IDs
  const res = await fetch('https://mastercrypto.org/posts/');
  const posts = await res.json();

  // Return an array of params objects
  return posts.map(post => ({
    id: post.id.toString(),
  }));
}




// import { NextResponse } from 'next/server'

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const response = await fetch(`https://mastercrypto.org/posts/${params.id}/`)
//     const data = await response.json()
//     return NextResponse.json(data)
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 })
//   }
// }

// // export async function generateStaticParams() {
// //   try {
// //     // Fetch all post IDs from your API
// //     const response = await fetch('https://mastercrypto.org/posts/')
// //     const posts = await response.json()

// //     // Return an array of objects, each with an 'id' property
// //     return posts.map((post: { id: string }) => ({
// //       id: post.id,
// //     }))
// //   } catch (error) {
// //     console.error('Failed to fetch post IDs for static generation:', error)
// //     return [] // Return an empty array if fetching fails
// //   }
// // }

