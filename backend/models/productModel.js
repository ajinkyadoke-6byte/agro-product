import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand:{ type: String, required: true },
  category: { type: String, required: true },
  image: { type: Array, required: true },
  price: { type: Number, required: true },
  mrp:{ type: Number, required: true },
  off:{ type: Number, required: true },
  rating:{ type: Number, default: 0},
  reviews: { type: Number, default: 0 },
  description: { type: String, required: true },
  form:{ type: String, required: true },
  shelfLife: { type: String, required: true},
  suitableFor: { type: Array, required: true},
  packSizes: { type: Array, required: true }
  
  
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;