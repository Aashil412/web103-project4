import React, { useState, useEffect } from 'react';
import '../css/ViewCars.css';
import { Link } from 'react-router-dom';
import carsAPI from '../../services/api';

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

    const priceafterTax = (originalPrice) => {
        return originalPrice + (originalPrice *  0.08);
    };

    return (
        <div className="cars-holder">
            {cars.map((car, index) => (
                <article key={index}>
                    <header>{car.name}</header>
                    <div className="car-card">
                        <p>{car.description}</p>
                        <div className='car-price'>
                            <p>Original Price: ${car.price}</p>
                            <p>Calculated Price: ${priceafterTax(car.price)}</p>
                            <Link className="view-btn" to={`/customcars/${car.id}`}>Details</Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default ViewCars;