import mongoose from 'mongoose';

const DBConnection = async (): Promise<void> => {
    try {
        const mongoUrl = process.env.MONGO_URI;
        console.log("MongoURL:", mongoUrl);

        if (!mongoUrl) {
            throw new Error("MongoDB connection string is not defined in the environment variables.");
        }

        await mongoose.connect(mongoUrl, {
            serverSelectionTimeoutMS: 70000, // 30 seconds
            socketTimeoutMS: 55000,         // 45 seconds
        });

        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }

    // Optional: Add Mongoose connection event handlers for debugging
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to the database');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.warn('Mongoose disconnected from the database');
    });
};

export default DBConnection;
