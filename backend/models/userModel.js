import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
    },
    isAdmin: {
        type: Boolean,
        //required: true,
        defasult: false
    }
    },{
        timestamps:true
    })

    const User = mongoose.model('User',userSchema)

    export default User;