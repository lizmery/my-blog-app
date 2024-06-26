import mongoose from 'mongoose'

const connection = {}

export const connectToDb = async () => {
    if(connection.isConnected) {
        console.log('Using existing connection')
        return
    }

    try {
        console.log('Attempting to connect to MongoDB...')
        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 45000 // 45 seconds
        })

        connection.isConnected = db.connections[0].readyState
        console.log('MongoDB connected')
    } catch (error) {
        console.log('MongoDB connection error: ', error)
        throw new Error('Failed to connect to MongoDB')
    }
}