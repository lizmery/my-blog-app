import { Post, User } from './models'
import { connectToDb } from './utils'
import { unstable_noStore as noStore } from 'next/cache'

export const getAllPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch all posts!')
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.find({ slug })
        return post
    } catch (error) {
        console.log(error)
        throw new Error(`Failed to fetch post: ${slug}`)
    }
}

export const getAllUsers = async () => {
    try {
        connectToDb()
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch all users!')
    }
}

export const getUser = async (id) => {
    noStore()
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error)
        throw new Error(`Failed to fetch user: ${id}`)
    }
}