import mongoose from 'mongoose';

const DBConnection = async (): Promise<void> => {
    try {
        const mongourl = process.env.MONGO_URL;
        console.log("MongoURL:", mongourl);

        if (!mongourl) {
            throw new Error("MongoDB connection string is not defined in the environment variables");
        }

        await mongoose.connect(mongourl, {
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 45000,         // 45 seconds
        });

        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};

export default DBConnection;
