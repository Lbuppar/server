import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, lowercase: true, unique: true, index: true },
        password: { type: String, required: true },
        mobileNo: { type: String, required: true },
        orders: { type: Array },
    }
)


const UserModel = mongoose.model('user', userSchema);


export default UserModel;

