import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home";
import { Planets } from "./views/Planets";
import { People } from "./views/People";
import {PlanetsDetail} from "./views/PlanetsDetail";
import {PeopleDetails} from "./views/PeopleDetails"	
import {Vehicles} from "./views/Vehicles"
import {VehiclesDetails} from "./views/VehiclesDetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/planets/:planetsId" element={<PlanetsDetail/>} />
						<Route path="/characters" element={<People/>} />
						<Route path="/people/:peopleId" element={<PeopleDetails/>} />
						<Route path="/vehicles" element={<Vehicles/>} />
						<Route path="/vehicles/:vehiclesId" element={<VehiclesDetails/>} />
						<Route path="/characters" element={<People/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);