import mongoose,{Schema , Document , Model} from "mongoose"

interface IMobile extends Document{
    title:string;
    devicemodel:string;
    price:string;
    createdAt?:Date;
    updatedAt?:Date;
}





const MobileSchema = new Schema<IMobile>({
    title:{
        type:String,
        required:true,
        unique:true 
    },
    devicemodel:{
        type:String,
        required:true,
        unique:true 
    },
    price:{
        type:String,
        required:true 
    }
},{timestamps:true});

const MobileModel:Model<IMobile> = mongoose.models.mobile  || mongoose.model<IMobile>('mobile', MobileSchema);

export default MobileModel;