import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import VehiclesCard from "./VehiclesCard.jsx";

const Vehicles = () =>{

    const { store, actions } = useContext(Context);

    const vehiclesCard = store.vehicles.map((item, index) => {
        
        return(
            <VehiclesCard item={item} index={index} key={item.uid}/>         
        )               
     })
                       
    return(
    <div className="container_image_main">
        {vehiclesCard}     
    </div>
    )
}

export default Vehicles