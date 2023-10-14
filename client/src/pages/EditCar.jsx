import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import carsAPI from '../../services/api';
import '../css/EditCar.css'
const EditCar = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const data = await carsAPI.getCarsById(id);
                setFormData(data);
            } catch (error) {
                console.error("Error fetching car details:", error);
                setError("Error fetching car details. Please try again.");
            }
        };
        fetchCarDetails();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await carsAPI.updateCars(id, formData);       
            navigate(`/customcars/${id}`);
        } catch (error) {
            console.error("Error updating car:", error);
            setError("Error updating car. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!formData.name) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="edit-car">
            <h2>Edit Car</h2>
            {error && (
                <div className="error">
                    <p>{error}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Wheels:</label>
                    <input 
                        type="string" 
                        id="wheels" 
                        name="wheels" 
                        value={formData.wheels} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">interior:</label>
                    <input 
                        type="string" 
                        id="interior" 
                        name="interior" 
                        value={formData.interior} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Update Car'}
                </button>
            </form>
        </div>
    );
};

export default EditCar;