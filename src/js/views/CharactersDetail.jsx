import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const CharactersDetail = (props) => {
    
    const { store, actions } = useContext(Context);
    const[detail, setDetail] = useState(null);

	const params = useParams();

    useEffect(() => {
        console.log(store.peoples[params.theid].url);
        fetch(store.peoples[params.theid].url)
        .then(data => data.json())
        .then(result => setDetail(result.result))
        .catch(error => console.error(error))
    }, []);

    console.log("character detail", detail);
    
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
                                <h1 className="mt-3 ms-5">{store.peoples[params.theid].name}</h1>
                                
                                <p className="pt-3">{detail.description}</p>
                                                              
                            </div>                                         
                        </div>
                        <div className="hstack gap-4 justify-content-center ms-5 mt-3">
                            <div className="px-2">
                                <p className="fw-bold"> Height </p>
                                <p> {detail.properties.height} </p>
                            </div>
                            <div className="px-2">
                                <p className="fw-bold"> Mass </p>
                                <p> {detail.properties.mass} </p>
                            </div>
                            <div className="px-2">
                                <p className="fw-bold"> Hair Color </p>
                                <p> {detail.properties.hair_color} </p>
                            </div>
                            <div className="px-2">
                                <p className="fw-bold"> Skin Color </p>
                                <p> {detail.properties.skin_color} </p>
                            </div>
                            <div className="px-2">
                                <p className="fw-bold"> Eye Color </p>
                                <p> {detail.properties.eye_color} </p>
                            </div>
                            <div className="px-2">
                                <p className="fw-bold"> Birth Year </p>
                                <p> {detail.properties.birth_year} </p>
                            </div>
                            <div className="px-2">
                                <p className="fw-bold"> Gender </p>
                                <p> {detail.properties.gender} </p>
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
    
    export default CharactersDetail