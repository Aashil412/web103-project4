import React, { useState, useEffect } from 'react';
import '../App.css';
import './ViewCars.css';
import { Link } from 'react-router-dom';
import carsAPI from '../services/carsAPI';

const ViewCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const carsData = await carsAPI.getAllCars();
                setCars(carsData);
            }
            catch (error) {
                console.error(error);
            }
        }) ()
    }, []);

    const calculatePrice = (originalPrice) => {
        const taxRate = 0.10; 
        return originalPrice + (originalPrice * taxRate);
    };

    return (
        <div className="cars-holder">
            {cars.map((car, index) => (
                <article key={index}>
                    <header>{car.name}</header>
                    <img src={car.image} alt={car.name} className="car-image" />
                    <div className="car-card">
                        <p>{car.description}</p>
                        <div className='car-price'>
                            <p>Original Price: ${car.price}</p>
                            <p>Calculated Price: ${calculatePrice(car.price)}</p>
                            <Link className="view-btn" to={`/customcars/${car.id}`}>Details</Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default ViewCars;
