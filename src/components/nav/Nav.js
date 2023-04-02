import React from 'react'
import { UserContext } from '../../context/Context'
import './Nav.css'

const Nav = () => {
    const {clickHandler} = UserContext();
    const cities = [
        {
            id:1,
            title:"Kathmandu",
        },
        {
            id:2,
            title:"Pokhara"
        },
        {
            id:3,
            title:"Mahendranagar"
        },

        {
            id:4,
            title:"Delhi"
        }
    ]
  return (
    <div className='nav'>
        {cities.map((city,id) => (
             <button key={id} onClick={() =>clickHandler(city.title)}>{city.title}</button>
        ))}
     
    </div>
  )
}

export default Nav
