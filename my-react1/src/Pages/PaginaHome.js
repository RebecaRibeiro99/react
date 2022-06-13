import React, {useState} from "react";
import { Link } from "react-router-dom";

export const PaginaHome = () =>{
    return (<>
    <h1>Bem-vindo!</h1>
    <Link to="/quemsomos">Ir para quem somos</Link>
    </>)
}

export const QuemSomos = () =>{
    
    return (<>
    <h1>Somos do grupo 7!</h1>
    <Link to="/">Voltar para Home</Link>
    
    </>)
}