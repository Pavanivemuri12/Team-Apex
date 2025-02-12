import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type:String, required: true },
    lastName: { type:String, required: true },
    email: { type:String, required: true },
    password: { type:String, select:false },  
    // whenever we're protecting the routes we'll use the role
    role: {type:String, default:'user'},
    image:{String},
    //Google and Github providers, ->Facebook,instagram,twitter(other auth providers)
    authProviderId:{type: String}

});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);

