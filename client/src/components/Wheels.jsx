import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';

const Wheels = () => {
    const wheels = [{
        name:'Pirelli',
        value:'https://autosport-fashion-brands.myshopify.com/cdn/shop/products/Pirelli-Intermediate-Tyre-1_1024x1024_2x_jpg.webp?v=1662663331'
    },
    {
        name:'Falken',
        value:'https://images.simpletire.com/images/q_auto/f_auto,q_auto,fl_lossy,h_3840/line-images/16982/16982-sidewall/falken-wildpeak-h-t02.png'
    },
    {
        name:'Dunlop',
        value:'https://www.goodyearautoservice.com/dw/image/v2/BJQJ_PRD/on/demandware.static/-/Sites-goodyear-master-catalog/en_US/dwe0c59cd9/images/large/WinterMaxxSJ8_13477.png?sw=900&sh=800&sm=fit&sfrm=png?sw=900&sh=800&sm=fit&sfrm=png'
    },
    {
        name:'Goodyear',
        value:'https://images.squarespace-cdn.com/content/v1/59335dc43e00bec37ebc95e1/1521567944652-6SK4K3HBTP34WY7XELJY/IMG_0416.jpg?format=1000w'
    },{
        name:"Bridgestone",
        value:"https://assets.shopbmwusa.com/assets/images/highquality/a0263264_6628.jpg"
    }]
    const updateCarWheels = useStoreActions(actions => actions.updateWheels);
    const car = useStoreState((state) => state.car);
    console.log(car)

    
  return (
    <div className="options-container" >
            <div className="options-grid">
            {wheels.map((color) => {
                return (
                    <div  onClick = {() => updateCarWheels(color.name)} className="option-item"style={{background: `url(${color.value}) center`,backgroundSize: "cover" }} key={color.name}>{color.name}</div>
                )
            })}
            </div>
    </div>
  )
}

export default Wheels