import express from "express";
import {
  createPet,
  updatePet,
  deletePet,
  getPet,
  getPets,
} from "../controllers/pet.js";

const router = express.Router();

//CREATE
router.post("/", createPet);

//UPDATE
router.put("/:id", updatePet);

//DELETE
router.delete("/:id", deletePet);

//GET
router.get("/:id", getPet);

//GET ALL PETS
router.get("/", getPets);

export default router;
