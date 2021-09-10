import mongoose from 'mongoose'

//change it later
const customValidateEmail = function(email: string) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const { Schema } = mongoose
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: [customValidateEmail, 'invalid email'],
    },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
})
const userModel = mongoose.model('users', userSchema)
export default userModel
