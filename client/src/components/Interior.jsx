import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';

const Interior = () => {
    const Interior = [{
        name:'Mocha',
        value:'https://di-uploads-pod4.dealerinspire.com/perillobmw/uploads/2023/03/K0GbJ8yfLxPWaOEwcxV9UYFfLXXbWsjuySCP3j9a.jpg'
    },
    {
        name:'Red',
        value:'https://cdn.bmwblog.com/wp-content/uploads/2017/08/20525682_1384105078293185_1831626250395717854_n.jpg'
    },
    {
        name:'Black',
        value:'https://cdn.bmwblog.com/wp-content/uploads/p00518561.jpg'
    },
    {
        name:'White',
        value:'https://cdn.bmwblog.com/wp-content/uploads/2020/05/The-BMW-7-Series-with-Ivory-White-Night-Blue-Black-interior-2-scaled-e1590576020218.jpg'
    },{
        name:"Purple",
        value:"https://cdn.bmwblog.com/wp-content/uploads/2023/09/BMW-M3-Touring-Mint-Green-with-purple-interior-7.jpg"
    }]

    const updateCarInterior = useStoreActions(actions => actions.updateInterior);
    const updateCarPrice = useStoreActions(actions => actions.updatePrice )
    const handleClick = (color) => {
        updateCarInterior(color.name)
        if(color.name == 'Red' || color.name == 'Purple' ){
            updateCarPrice(3500)
        } else {
            updateCarPrice(-3500)
        }
    };
    
    
  return (
    <div className="options-container" >
            <div className="options-grid">
            {Interior.map((color) => {
                return (
                    <div  onClick = {() => handleClick(color)} className="option-item"style={{background: `url(${color.value}) center`,backgroundSize: "cover" }} key={color.name}>{color.name}</div>
                )
            })}
            </div>
    </div>
  )
}

export default Interior