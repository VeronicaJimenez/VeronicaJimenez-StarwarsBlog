import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import PlanetsCard from "./PlanetsCard.jsx";

const Planets = (props) =>{

    const { store, actions } = useContext(Context);

    const planetsCard = store.planets.map((item, index) => {
        
        return(
            <PlanetsCard item={item} index={index} key={item.uid}/>         
        )               
     })
                       
    return(
    <div className="container_image_main">
        {planetsCard}     
    </div>
    )
}

export default Planets