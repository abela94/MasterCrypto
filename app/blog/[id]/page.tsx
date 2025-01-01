"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  content: string
  date: string
}

const BlogPostPage: React.FC = () => {
  const { id } = useParams()
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`https://mastercrypto.onrender.com/posts/${id}/`)
        if (!response.ok) {
          throw new Error('Failed to fetch blog post')
        }
        const data = await response.json()
        setBlogPost(data)
      } catch (err) {
        setError('Failed to load blog post. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPost()
  }, [id])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>
  }

  if (!blogPost) {
    return <div className="container mx-auto px-4 py-8">Blog post not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild className="mb-4">
        <Link href="/blog">
          Back to Blog List
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>{blogPost.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {new Date(blogPost.date).toLocaleDateString()}
          </div>
        </CardHeader>
        <CardContent>
          {blogPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogPostPage

