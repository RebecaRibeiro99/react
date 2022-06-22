import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  Foto  from "../Imagens/Rebeca.jpg";
import {Inicio , Imagem, Botao} from "./style"
import {api} from "../Services/api"

export const TelaInicial = () =>{

    const [usuario] = useState ({
        nome: "Rebeca",
        idade: 23
    })
    const [produto, setUsuario] = useState({
        nomeProduto:"",
        preco:""
    })

    useEffect (() => {
        const getUsuario = async () =>{
            const response = await api.get("/produto")
            console.log(response.data);
            setUsuario(response.data)
        }
        getUsuario()
    },[])

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