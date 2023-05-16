import React, {useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = ({element}) => {
	const { store, actions } = useContext(Context)
//   function checkFavorite(elementId) {
//     return store.favorite.some(item => item.id == `${element}/${elementId}`)


//   }

	console.log(store.favorite)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary markFavorite">Favorites</button>
				</Link>
			</div> */}
			<div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" 
                    href="#" role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" >
                    Favoritos ❤</a> 
                    <ul className="dropdown-menu" >
                        {store.favorite.map((item, id) => (
                        <li key={id}>
                            <a className="dropdown-item" >
                            {item} <i className="fa fa-trash float-end"></i></a>
                        </li>))}
                    </ul> 
                    </div>  
		</nav>
	);
};