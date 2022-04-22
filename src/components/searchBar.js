import React, { useState } from "react";
import Article from "./articles";

function SearchBar(){

    const [state, setState] = useState([]);

    function change(event){

        const search = async (event) => {

            if(event.target.value == ''){
                setState([]);    
            } else{

                const url = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${event.target.value}`);
                const data2 = await url.json();
                
                setState(data2.query.search);
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