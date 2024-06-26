import { Post } from '../../../lib/models'
import { connectToDb } from '../../../lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request) => {
    try {
        await connectToDb()
        const posts = await Post.find()
        return NextResponse.json(posts)
    } catch (error) {
        console.log('Failed to fetch posts: ', error)
        return NextResponse.json({ message: 'Failed to fetch posts' }, { status: 500 })
    }
}
