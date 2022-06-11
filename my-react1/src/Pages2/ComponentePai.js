import React, {useState} from "react";
import {ComponenteFilho} from "./ComponenteFilho";


export const ComponentePai = () => {
    const [lista, setLista] = useState([])
    const [item, setItem] = useState("")
    
    function handleAdd(){
        setLista([...lista, item])
        setItem("")
    }
        return(
        <>
        <input type="text" value={item} onChange={e=> setItem(e.target.value)}/>
        <button onClick={handleAdd}>Adicionar</button>
        <div>
            <ComponenteFilho lista={lista}/>
        </div>
        </>
    )
 }
