import React, { useState } from "react";
import wikipedia from "../api/api-wikipedia";
import Article from "./articles";

function SearchBar(){

    const [state, setState] = useState([]);

    function change(event){

        async function search(event){

            if(event.target.value == ''){
                setState([]);    
            } else{

                const response = await wikipedia.get(`${event.target.value}`);
            
                setState(response.data.query.search);
            }
        }

        search(event);
    }

    return(
        <>
            <input onChange={change} placeholder="Serch term" type='text' id="searchBar" name="searchBar" />
            <div>
                {
                    state.map(element =>
                        <Article key={element.pageid} elements={element} />
                    )
                }
            </div>
        </>
    );
}

export default SearchBar;