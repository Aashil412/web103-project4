import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';

const Colors = () => {
    const roofs = [{
        name:'Hardtop',
        value:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSXtmAY8Hy0cCiivsMBtDoYmtDvl84DKTvNWDGpGKjw6ELV8m7W9EQy4-7-bmd'
    },
    {
        name:'Convertible',
        value:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYXivUDTPumUQWotKs1jISFmw4z67yk-jIBDFcy6MU_p3Qg1ubb0elKEncxfOn'
    },
    {
        name:'Targa top',
        value:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTeLWrewYtgoI9pol8jg_7Aj29lWUb18P1QfJ81AlMvV0rL6AcbqY8g0jmmvkSV'
    },
    {
        name:'Sunroof',
        value:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGuxayIkO1pxDhtAqfxmB3HeUPd13l8KxPkbK2PXC7ebSkS_2veLUHNLKupZoi'
    },{
        name:'Camper',
        value:'https://i.pinimg.com/564x/de/94/b1/de94b174b56f7c9dfc864268d2521f6d.jpg'
    },
    {
        name:'Adventurer',
        value:'https://i.pinimg.com/564x/4b/ab/ff/4babff35cecd1560ff873da03b1c8876.jpg'
    },]
    const updateCarRoof = useStoreActions(actions => actions.updateRoof);
    const car = useStoreState((state) => state.car);
    console.log(car)

    
  return (
    <div className="options-container" >
            <div className="options-grid">
            {roofs.map((color) => {
                return (
                    <div  onClick = {() => updateCarRoof(color.name)} className="option-item"style={{background: `url(${color.value}) center`,backgroundSize: "cover" }} key={color.name}>{color.name}</div>
                )
            })}
            </div>
    </div>
  )
}

export default Colors