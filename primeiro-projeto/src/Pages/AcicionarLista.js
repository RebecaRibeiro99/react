import React, { useState } from "react";
import { ListaDeCompras } from "./ListaDeCompras";
import { Botao2 ,Container2, Inicio} from "../TarefaDeCasa/style"

export const AdicionarLista = () =>{
    const [lista, setLista] = useState([])
    const [item, setItem] = useState('')

    function handleAdd(){
        setLista([...lista, item])
        setItem('')
    }

    return(
        <>
            <Inicio>Quem sou!!</Inicio>
            <Container2>
            <input type="text" value={item} onChange={e => setItem(e.target.value)}/>
            <Botao2 onClick={handleAdd}>Adicionar</Botao2>
            </Container2>
            <div>
                <ListaDeCompras lista={lista}/>
            </div>
        </>
    )
}