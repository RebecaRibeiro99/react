import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  Foto  from "../Imagens/Rebeca.jpg";
import {Inicio , Imagem, Botao} from "./style"

export const TelaInicial = () =>{

    const [usuario] = useState ({
        nome: "Rebeca",
        idade: 23
    })

    var navigate = useNavigate();

    function handleClick(){
        navigate(`/segundatela/${usuario.nome}/${usuario.idade}`)
    }

    return(
        <>
            <Inicio>Home</Inicio>
            <Imagem src={Foto} alt="imagem rebeca" />
            <Botao onClick={handleClick}>Sobre Rebeca!</Botao>
        </>
    )
}