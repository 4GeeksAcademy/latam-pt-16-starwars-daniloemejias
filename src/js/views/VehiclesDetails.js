import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";
import { useParams } from "react-router-dom";



export const VehiclesDetails = (planets) => {

const {store, actions} = useContext(Context)
const {vehiclesId}=useParams()
useEffect(()=>{
	actions.fetchVehicles(vehiclesId) 
	

},[])

return (
	<div className="text-center mt-5">
	
		<h1>Vehicles Details</h1>
        <h2>Id: {vehiclesId} </h2>
		<h2>Name: {store.vehicles?.properties?.name || "Cargando"}</h2>
        <h2>Model: {store.vehicles?.properties?.model || "Cargando"}</h2>
        <img src = {"https://starwars-visualguide.com/assets/img/vehicles/"+vehiclesId+".jpg"}></img>
            {/* {planets && Object.entries(planets).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} onError={imgError} alt="planet"/> : <h5>{key}: {value}</h5>}
                </div>
            ))} */}
		

		
	</div>
);

}