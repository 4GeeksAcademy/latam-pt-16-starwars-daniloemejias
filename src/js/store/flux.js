import { element } from "prop-types";
import PlanetsDetail from "../views/PlanetsDetail";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			favorite: [],
			planet:[],
			vehicles:[],
			films:[],
		},
		actions: {
			fetchStarWars: async (element, page = 1, limit = 10) => {
				let baseUrl = `https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`
				try {

					let response = await fetch(baseUrl)
					if (!response.ok) return response.status

					let data = await response.json();
					let obj = {};
					obj[element] = data[element == "films" ? "result" : "results"].map(item => ({ ...item, img: `https://starwars-visualguide.com/assets/img/${element == 'people' ? "characters" : element}/${item.uid}.jpg` }));
					setStore(obj)
				}
				catch (error) {
					console.error(error)

				}
			},
			fetchPlanetsDetail: async (uid)=>{
				let baseUrl=`https://www.swapi.tech/api/planets/${uid}`
				try{
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status
					let data = await response.json()
					//console.log(data.result)
					setStore({planet:data.result})
				}

				catch(error){
					console.error(error)
				}
			},
			fetchPeopleDetail: async (uid)=>{
				let baseUrl=`https://www.swapi.tech/api/people/${uid}`
				try{
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status
					let data = await response.json()
					//console.log(data.result)
					setStore({people:data.result})
				}

				catch(error){
					console.error(error)
				}
			},

			fetchVehicles: async (uid)=>{
				let baseUrl=`https://www.swapi.tech/api/vehicles/${uid}`
				try{
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status
					let data = await response.json()
					//console.log(data.result)
					setStore({vehicles:data.result})
				}

				catch(error){
					console.error(error)
				}
			},
			
			markFavorite: async (elementId, name) => {
				console.log(elementId)
				let {favorite} = getStore()
				//Verificando si el favorito ya existe
				if (!favorite.some(item => item.id == elementId)) {
					//En caso de que NO exista, se agrega
					// setStore({ favorite: [...favorite, { id: elementId, name }] })
					setStore({ favorite: [...favorite, name] })
				} else {
					//En caso de que SI exista, se elimina
					// let newFavorite = [...favorite]
					let newFavorite= [];
					// let index = favorite.findIndex(item => item.id == elementId)
					// newFavorite.splice(index, 1)
					newFavorite=favorite.favorite.filter(item => item.name !== name)
					
					setStore({ favorite: newFavorite })
				}
			}


		}
	}
};


export default getState;