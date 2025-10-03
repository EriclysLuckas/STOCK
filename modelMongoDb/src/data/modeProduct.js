import mongoose from 'mongoose';
import { nanoid } from "nanoid"; // IMPORT CORRETO


const product = new mongoose.Schema({
_id: { type: String, default: () => nanoid(5) }, 
name: {type: String, required: true},
quantity: {type: Number, required: true},
price: {type: Number, required: true},
category: {type: String, required: true},
desc: {type: String},

},
    { timestamps: true }
)

export default mongoose.model('Product', product);