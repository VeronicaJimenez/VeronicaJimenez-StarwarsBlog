import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
	const {store, actions } = useContext(Context)
	
	const handleClick = (_, index, label) => {
        actions.editFavorites(index, label)
    };
	
	return (
		<nav className="navbar navbar-dark bg-dark  border-bottom">
			<Link to="/">
				<span className="navbar-brand ms-5">STAR WARS</span>
			</Link>

			<div className="btn-group me-5">
				<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					FAVORITES {store.favorites.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-end border border-secondary-subtle">
					{store.favorites.map((element, i)=>(
						<li key={i}>
							
							<Link to={"/"+element.label+"/"+element.index}>
								<button className="dropdown-item" >{element.item.name}</button>
							</Link>

							<button onClick={e => handleClick(e, element.index, element.label)}>                        
									<i className="bi bi-trash3"></i>
							</button>
																							
						</li>
					))}
				</ul>
			</div>

		</nav>
	);
};