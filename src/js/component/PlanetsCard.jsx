import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const PlanetsCard = (props) => {
    const { store, actions } = useContext(Context);

    const handleClick = (_, index, label) => {
        actions.editFavorites(index, label)
    };
    
    return(
             
        <div key={props.item.uid} id="individual_card" className="card">
            <img src={"https://starwars-visualguide.com/assets/img/planets/"+ props.item.uid +".jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{props.item.name}</h2>                
                <div>
                    
                    <Link to={"/planets/" + props.index}>
                        <button className="btn btn-outline-secondary">Learn more!</button>
                    </Link>
                    
                    <button onClick={e => handleClick(e, props.index, "planets")}
                        className="btn btn-outline-warning float-end me-1">                        
                            <i className={props.item.favorite ? "bi bi-heart-fill":"bi bi-heart"}></i>
                    </button>
                </div>
            </div>               
        </div>         
   
    )
}

export default PlanetsCard