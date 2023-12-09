import React from 'react'
import '../styles/homeBuffetOption.scss'
import { thingsTodo } from '../data'

const Cards = () => {
    
    return  (
        thingsTodo.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt="" />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        })
    )
}

const ThingsTodo = () => {
  return (
    <section className='HomeBuffetOptionMainContainer'>
        <h1>Things To Do Aquaria KLCC   </h1>
        <p>Introducing a Living Ocean exhibit that includes a 90-meter transparent
            tunnel walkway, providing visitors with a firsthand encounter with over 7distinct species of sharks, including Sand Tiger sharks, Giant Stingrays, Marine turtles, and schools of other fishes.</p>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default ThingsTodo