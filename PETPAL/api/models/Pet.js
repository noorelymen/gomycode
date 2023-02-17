import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 50,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
  qualities: {
    type: [String],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Pet", PetSchema);
