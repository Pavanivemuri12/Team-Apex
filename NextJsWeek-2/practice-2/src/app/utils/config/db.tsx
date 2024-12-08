

import mongoose from 'mongoose';
 
// interface Iuser{
//     name:string;
//     email:string;
// }


export const DBConnection = async(): Promise<void>=>{
    try {
        const mongourl= process.env.MONGO_URL;
        console.log("Mongorl:", mongourl)
        await mongoose.connect(mongourl as string)
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}