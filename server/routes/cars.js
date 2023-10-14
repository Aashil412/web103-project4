import express from "express";

import carsController from "../controllers/cars.js";

const router = express.Router();

router.get("/", carsController.getCars);
router.get("/:id", carsController.getCarsById);
router.post('/', carsController.createCar);
router.patch('/:id', carsController.updateCar);
router.delete('/:id', carsController.deleteCar);

export default router;