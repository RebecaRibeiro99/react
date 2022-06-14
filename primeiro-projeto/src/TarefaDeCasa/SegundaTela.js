import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Botao} from "./style"
import {AdicionarLista} from "../Pages/AcicionarLista"

export const SegundaTela = () =>{

    var {nome} = useParams()
    var {idade} = useParams()

    var navigate = useNavigate();

    function handleClick(){
        navigate("/")
    }


    return(
        <>
         <Container>
            <AdicionarLista/>
        </Container>
        <Botao onClick={handleClick}>Voltar para home</Botao>
        </>
    )
}