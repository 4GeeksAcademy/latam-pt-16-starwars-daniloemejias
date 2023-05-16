import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";
import { useParams } from "react-router-dom";



export const PeopleDetails = (planets) => {

const {store, actions} = useContext(Context)
const {peopleId}=useParams()
useEffect(()=>{
	actions.fetchPeopleDetail(peopleId) 
	

},[])
//console.log(store.people)
return (
	<div className="text-center mt-5">
	
		<h1>People Details</h1>
        <h2>Id: {peopleId} </h2>
		<h2>Name: {store.people?.properties?.name || "Cargando"}</h2>
        <img src = {"https://starwars-visualguide.com/assets/img/characters/"+peopleId+".jpg"}></img>
            {/* {planets && Object.entries(planets).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} onError={imgError} alt="planet"/> : <h5>{key}: {value}</h5>}
                </div>
            ))} */}
		

		
	</div>
);

}