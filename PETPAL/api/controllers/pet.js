import Pet from "../models/Pet.js";

//CREATE A NEW PET
export const createPet = async (req, res, next) => {
  //create a new pet
  const newPet = new Pet(req.body);
  try {
    const savedPet = await newPet.save();
    res.status(200).json(savedPet);
  } catch (err) {
    next(err);
  }
};

//UPDATE AN EXISTING PET
export const updatePet = async (req, res, next) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } //because the find and update by id method is gonna return the unchanged object and we need it to return the object after the put method
    );
    res.status(200).json(updatedPet);
  } catch (err) {
    next(err);
  }
};

//DELETE AN EXISTING PET
export const deletePet = async (req, res, next) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json("Pet deleted.");
  } catch (err) {
    next(err);
  }
};

//GET AN EXISITNG PET
export const getPet = async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json(pet);
  } catch (err) {
    next(err);
  }
};

//GET ALL PETS
export const getPets = async (req, res, next) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    next(err);
  }
};
