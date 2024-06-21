import mongoose from 'mongoose';
import accounts_connection from '../app.js';

//Create a Session schema
const sessionSchema = new mongoose.Schema({
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        refreshToken: {
            type: [String],
            required: true,
        },
        
        accessToken: {
            type: String,
            required: true,
        },
        
        updatedAt: {
            type: Date,
            required: true,
            default: () => Date.now(),
        },
        
        createdAt: {
            type: Date,
            required: true,
            default: () => Date.now(),
        }
})

export default accounts_connection.model("Session", sessionSchema);
