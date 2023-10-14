import { pool } from './database.js';
import './dotenv.js';
import data from '../data/data.js'

const createCarsTable = async () => {
    const createTableQuery = 
    `DROP TABLE IF EXISTS cars;
        CREATE TABLE IF NOT EXISTS cars(
            id SERIAL PRIMARY KEY,
            name VARCHAR(1000) NOT NULL,
            price REAL NOT NULL,
            image VARCHAR(1000),
            description TEXT
        );
    `
    try {
        await pool.query(createTableQuery);
        console.log('🎉 cars table created successfully')
    } catch (err) {
        console.error('⚠️ error creating cars table', err)
    }
}
const seedTables = async () => {
    await createCarsTable();
   
  
    data.forEach((data1) => {
        const insertQuery = {
            text: "INSERT INTO cars (id, name, price, image, description) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO UPDATE SET name = $2, price = $3, image = $4, description = $5",
        }
  
        const values = [
            data1.id,
            data1.name,
            data1.price,
            data1.image,
            data1.description,
        ]
  
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error("⚠️ error inserting data", err)
                return
            } 
            console.log(`✅ ${data.name} added successfully`)
        })
    })
}
seedTables();
  
