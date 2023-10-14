import React, {useState, useEffect} from 'react'
import '../App.css'
import Colors from '../components/Colors'
import Roof from '../components/Roof'
import Wheels from '../components/Wheels'
import Interior from '../components/Interior';
import Car from '../components/Car'
import carsAPI from '../../services/api';
import { useStoreState, useStoreActions } from 'easy-peasy';


const CreateCar = () => {
    const [elements,setElements] = useState(1)
    const [carName , setCarName ] = useState('')
    const updateCarName = useStoreActions((state) => state.updateName);
    const car = useStoreState((state) => state.car)
    const reset = useStoreActions ((state) => state.resetCar)
 
    useEffect(() => {
        updateCarName(carName)
      },[carName]);
    
    const createCar = async (event) => {
        event.preventDefault();
        if(car.roof !== "Hardtop" && car.wheels !== "Dunlop"){
            try {
                console.log("Creating car...");
                await carsAPI.createCars(car);
                alert("Car created successfully!");
                reset()
            }
            catch (error) {
                console.error("Error creating car:", error.message);
            }
        } else {
            reset()
            alert("Combo not possible!")
        }
    }; 

    return (
        <>
        <div class="create-car">
            <div class="create-car-options">
                <div id="customization-options" class="car-options">
                    <div id="car-options" aria-hidden="true">
                        <button onClick={() =>setElements(1)}>Color</button></div>
                    <div id="car-options">
                        <button onClick={() =>setElements(2)}>roof</button>
                    </div>
                    <div id="car-options">
                        <button onClick={() =>setElements(3)}>wheels</button>
                    </div>
                    <div id="car-options" onClick={() =>setElements(4)}>
                        <button>interior</button>
                    </div>
                    
                    </div>
                </div>
                    <div class="create-car-name">
                        <form className="create-car-name" >
                            <input type="text" id="name" value ={carName} name="name" onChange={(e) => setCarName(e.target.value)} placeholder="Car name" />
                            <input type="submit" class="create-car-button" value="Create Car" onClick={createCar}/>
                        </form>
                    </div>
                    
        </div>
        {elements === 1 && <Colors />}
        {elements === 2 && <Roof />}
        {elements === 3 && <Wheels />}
        {elements === 4 && <Interior />}
        <Car />
        </>
                
    )
}

export default CreateCar