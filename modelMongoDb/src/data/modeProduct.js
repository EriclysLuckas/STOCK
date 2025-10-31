import mongoose from "mongoose";
import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";


const productSchema = new mongoose.Schema(                                      // Define o schema

  {
    _id: { type: String, default: () => nanoid(5) },
    name: { type: String, required: true, maxLength: 30, trim: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    desc: { type: String },

    user: {                                                                    //relação Product > User
      type: String,
      ref: "User",
      required: true,

    }
  },
  { timestamps: true }
);






productSchema.pre("save", function (next) {                                     //  Normaliza antes de salvar (garante consistência)

  if (this.name) this.name = this.name.trim().toLowerCase();
  if (this.category) this.category = this.category.trim().toLowerCase();
  next();
});

productSchema.index({ name: 1, category: 1 }, { unique: true });                //  Índice composto opcional (garante que não existam dois produtos com o mesmo nome + categoria)






const userSchema = new mongoose.Schema(                                           //Model User

  {
    _id: {
      type: String, default: () => nanoid(5)
    },

    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 256,
      trim: true,

    },
    password: {
      type: String,
      require: true
    },

    role: {
      type: String,
      default: "admin",
    },

  },
  { timestamps: true }


);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", productSchema);
