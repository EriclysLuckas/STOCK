import mongoose from "mongoose";
import { nanoid } from "nanoid";

// Define o schema
const productSchema = new mongoose.Schema(
  {
    _id: { type: String, default: () => nanoid(5) },
    name: { type: String, required: true, maxLength: 30, trim: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    desc: { type: String },
  },
  { timestamps: true }
);

// 🔹 Normaliza antes de salvar (garante consistência)
productSchema.pre("save", function (next) {
  if (this.name) this.name = this.name.trim().toLowerCase();
  if (this.category) this.category = this.category.trim().toLowerCase();
  next();
});

// 🔹 Índice composto opcional (garante que não existam dois produtos com o mesmo nome + categoria)
productSchema.index({ name: 1, category: 1 }, { unique: true });

// Exporta o model
export default mongoose.model("Product", productSchema);



//Model User

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:true,
      trim:true,
      maxLength:100
    },
    email: {
      type: String,
      required: true,
      unique:true,
      maxLength: 256
    },
    password: {
      type: String,
      require:true
    },
  }
  
)
