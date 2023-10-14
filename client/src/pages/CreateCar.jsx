import React, { useState } from 'react';
import carsAPI from '../services/carsAPI';
import './CreateCars.css';

const CreateCar = () => {
    const [car, setCar] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        isConvertible: false  // Added state property for "is convertible"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({
            ...car,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCar({
            ...car,
            [name]: checked
        });
    };

    const createCar = async (event) => {
        event.preventDefault();
        try {
            console.log("Creating car...");
            await carsAPI.createCars(car);
            console.log("Car created");
            setCar({
                name: '',
                price: '',
                description: '',
                image: '',
                isConvertible: false
            });
        }
        catch (error) {
            console.error("Error creating car:", error.message);
        }
    };

    return (
        <div className='create-car'>
            <form onSubmit={createCar}>
                <div className='create-car-name'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name your car'
                        value={car.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='create-car-price'>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder='Describe your car'
                        value={car.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        placeholder='Image URL for your car'
                        value={car.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="isConvertible">Is Convertible:</label>
                    <input
                        type="checkbox"
                        id="isConvertible"
                        name="isConvertible"
                        checked={car.isConvertible}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <button type="submit" className="create-car-button">Create Car</button>
            </form>
        </div>
    );
};

export default CreateCar;
