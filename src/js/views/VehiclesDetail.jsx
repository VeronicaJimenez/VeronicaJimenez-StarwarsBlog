import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const VehiclesDetail = (props) => {
    
    const { store, actions } = useContext(Context);
    const[detail, setDetail] = useState(null);

	const params = useParams();

    useEffect(() => {
        console.log(store.vehicles[params.theid].url);
        fetch(store.vehicles[params.theid].url)
        .then(data => data.json())
        .then(result => setDetail(result.result))
        .catch(error => console.error(error))
    }, []);

    console.log("vehicles detail", detail);


    return(
    <div>            
        <div className="px-5 text-bg-dark" >
            {detail !== null &&
                <div className="row g-0">
                    <div className="col">
                    <img src="https://dummyimage.com/800x600/000/fff" id="image_detail"  alt="..." />
                    </div>
                    <div className="col">
                        <div className="ms-5 mt-4 align-middle">
                            <h1 className="mt-3 ms-5">{store.vehicles[params.theid].name}</h1>
                            
                            <p className="pt-3">{detail.description}</p>
                                                          
                        </div>                                         
                    </div>
                    <div className="hstack gap-4 justify-content-center ms-5 mt-3">
                        <div className="px-2">
                            <p className="fw-bold"> Model </p>
                            <p> {detail.properties.model} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Vehicle Class </p>
                            <p> {detail.properties.vehicle_class} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Manufacturer </p>
                            <p> {detail.properties.manufacturer} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Cost </p>
                            <p> {detail.properties.cost_in_credits} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Length </p>
                            <p> {detail.properties.length} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Crew </p>
                            <p> {detail.properties.crew} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Passengers </p>
                            <p> {detail.properties.passengers} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold">Cargo Capacity</p>
                            <p> {detail.properties.cargo_capacity} </p>
                        </div>
                    </div>
                </div>
            }    
        </div>
        <hr className="m-0" />

        <Link to="/" >
            <span className="btn btn-primary btn-lg ms-5 my-3" href="#" role="button">
                Back home
            </span>
        </Link>
        
    </div>
    )
}

export default VehiclesDetail