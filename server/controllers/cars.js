import { pool } from "../config/database.js";

const getCars = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM cars');
        res.status(200).json(results.rows);
    }
    catch (error) {
        res.status(409).json({error: error.message})
    }
}

const getCarsById = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await pool.query("SELECT * FROM cars WHERE id = $1", [id]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createCar = async (req, res) => {
    const { name, price, image, description } = req.body;

    try {
        
        const results = await pool.query("INSERT INTO cars (name, price, image, description) VALUES ($1, $2, $3, $4) RETURNING *", [name, price, image, description]);
        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const updateCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, price, image, description } = req.body;   
        const results = await pool.query('UPDATE cars SET name = $1, price = $2, image = $3, description = $4 WHERE id = $5 RETURNING *', [name, price, image, description, id]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const deleteCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query("DELETE FROM cars WHERE id = $1", [id]);
        res.status(200).json({ message: 'Car deleted successfully.' });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default {
    getCars,
    getCarsById,
    createCar,
    updateCar,
    deleteCar
}
