import React, {useContext} from "react";
import { Context } from "../store/appContext";

 const ListHorizontal = ({element})=>{
    const {store, actions}=useContext(Context)
    function checkFavorite(elementId){
        return store.favorite.some(item=>item.id==`${element}/${elementId}`)
        
        
    }


    return (<div className="overflow-auto d-flex w-100">
        {store[element]?.map(item=>
            <div key = {item.uid} className="card" style={{minWidth: "200px"}}>
            <img src={item.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <button href="#" className="btn btn-outline-warning" 
              onClick={()=>actions.markFavorite(`${element}/${item.uid}`, item.name)}>
                <i className={`bi bi-heart${checkFavorite(item.uid)?"-fill":""}`}></i>
              </button>
            </div>
          </div>

            )} || <p>Loading {element}...</p>

    </div>)
}

export default ListHorizontal