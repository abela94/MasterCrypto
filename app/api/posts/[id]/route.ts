import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`https://mastercrypto.org/posts/${params.id}/`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

// ✅ Generate static parameters for pre-rendering
export async function generateStaticParams() {
  try {
    const res = await fetch('https://mastercrypto.org/posts/');

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const posts = await res.json();

    return posts.map((post: { id: string }) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error('Error fetching post IDs:', error);
    return []; // Return an empty array to prevent build failure
  }
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

