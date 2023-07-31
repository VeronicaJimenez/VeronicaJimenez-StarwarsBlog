import React from "react";

import Characters from "../component/Characters.jsx"
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => (
	<div className="mx-5">
		<div className="my-4">
			<h2>CHARACTERS</h2>
			<div> 
				<Characters/>
			</div>
		</div>
		
		<div className="my-4">
			<h2>PLANETS</h2>
			<div> 
				<Planets/>
			</div>
		</div>

		<div className="my-4">
			<h2>VEHICLES</h2>
			<div> 
				<Vehicles/>
			</div>
		</div>
		
	</div>
);
