import mongoose, { Schema, model } from 'mongoose';

const ProductSchema: Schema = new Schema({
  country: String,
  make: String,
  price: Number,
});

export default mongoose.model('Products', ProductSchema);