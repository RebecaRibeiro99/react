import React from "react"

export const ComponenteFilho = (props) =>{

    console.log("Lista de compra: ", props.lista);
    return(
        <>
        <h1>Lista de compras:</h1>
        {
            props.lista.map(res =>{
                <div>
                    <span>{res}</span>
                </div>
            })
        }
        </>
    );
}