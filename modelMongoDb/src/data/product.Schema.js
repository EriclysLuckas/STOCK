import mongoose from 'mongoose';


const product = new mongoose.Schema({

_id: {type: mongoose.Schema.Types.ObjectId ,required: true},
name: {type: String, required: true},
quantity: {type: Number, required: true},
price: {type: Number, required: true},
category: {type: String, required: true},
desc: {type: String},
date: {type: String, required: true}

})

export default mongoose.model('Product', product);