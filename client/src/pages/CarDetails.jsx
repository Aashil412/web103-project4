import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import carsAPI from '../../services/api';
import '../css/CarDetails.css';


const CarDetails = () => {
    const [car, setCar] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                const carData = await carsAPI.getCarsById(id);
                setCar(carData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCarData();
    }, [id]);

    const deleteCar = async () => {    
            try {
                await carsAPI.deleteCars(id);
                navigate('/customcars'); 
            } catch (error) {
                setError(`Failed to delete car: ${error.message}`);
            }     
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!car) {
        return <p>Car not found</p>;
    }

    return (
        <div className="detailsWrapper">
            <article className="carFullDetails">
                <header><h2>{car.name}</h2></header>
                <div className="detailsContent">
                    <p>Price: ${car.price}</p>
                    <Link className="view-btn" to={`/edit/${car.id}`}>Edit</Link>
                    <button className="deleteCarButton" onClick={deleteCar}>Delete</button>
                </div>
            </article>
        </div>
    )
}

export default CarDetails;