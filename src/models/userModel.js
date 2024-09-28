import { verify } from "crypto";
import mongoose from "mongoose";
import { type } from "os";
import { UniqueConstraintError } from "sequelize";
const userSchema = new mongoose.Schema({
    username: {
       type: String,
       required:[true,"please provide a username"],
       Unique:true,
    },
    email: {
        type: String,
        required: [true,"Please provide a email"],
        Unique: true,
    },
    password: {
        type: String,
        required: [true,"please provide a password"]
    },
    isVerified: {
        type: Boolean,
        default:false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry: Date,
    verifyToken:String,
    VerifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema);
export default User;