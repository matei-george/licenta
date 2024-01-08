import React from 'react'
import './Hero.css';
import hand_icon from "../Assets/hand_icon.png";

export const Hero = () => {
  return (
    <div className="hero">
        <section className="hero__left">
            <h2>Noi componente pentru tine</h2>
            <img src={hand_icon} alt='hand-icon'/>
        </section>
        <section className="hero__right"></section>
    </div>
  )
}
