import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CharactersCard from "./CharactersCard.jsx";

const Characters = () =>{

    const { store, actions } = useContext(Context);
    console.log("Store charactes", store)

    const characterCard = store.peoples.map((item, index) => {
        
        return(
            <CharactersCard item={item} index={index} key={item.uid}/>         
        )               
     })
                       
    return(
    <div className="container_image_main">
        {characterCard}     
    </div>
    )
}

export default Characters