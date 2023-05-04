import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";
import { useParams } from "react-router-dom";

export const PlanetsDetail = () => {

const {planetsid}=useParams()
return (
	<div className="text-center mt-5">
	
		<h1>Planet Details</h1>
        <h2>Id: {planetsid} </h2>
		
		

		
	</div>
);

}
