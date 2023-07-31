import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const PlanetsDetail = (props) => {
    
    const { store, actions } = useContext(Context);
    const[detail, setDetail] = useState(null);

	const params = useParams();

    useEffect(() => {
        console.log(store.planets[params.theid].url);
        fetch(store.planets[params.theid].url)
        .then(data => data.json())
        .then(result => setDetail(result.result))
        .catch(error => console.error(error))
    }, []);

    console.log("detail", detail);


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
                            <h1 className="mt-3 ms-5">{store.planets[params.theid].name}</h1>
                            
                            <p className="pt-3">{detail.description}</p>
                                                          
                        </div>                                         
                    </div>
                    <div className="hstack gap-4 justify-content-center ms-5 mt-3">
                        <div className="px-2">
                            <p className="fw-bold"> Diameter </p>
                            <p> {detail.properties.diameter} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Rotation Period </p>
                            <p> {detail.properties.rotation_period} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Orbital Period </p>
                            <p> {detail.properties.orbital_period} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Gravity </p>
                            <p> {detail.properties.gravity} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Population </p>
                            <p> {detail.properties.population} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Climate </p>
                            <p> {detail.properties.climate} </p>
                        </div>
                        <div className="px-2">
                            <p className="fw-bold"> Terrain </p>
                            <p> {detail.properties.terrain} </p>
                        </div>
                    </div>
                </div>
            }    
        </div>
        <hr className="m-0" />

        <Link to="/">
            <span className="btn btn-primary btn-lg ms-5 my-3" href="#" role="button">
                Back home
            </span>
        </Link>
        
    </div>
    )
}

export default PlanetsDetail