import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RenderizacaoCondicional } from "../Pages/RenderizacaoCondicional";
import { AdicionarLista } from "../Pages/AdicionarLista";
import { ComponenteFilho } from "../Pages/ListaDeCompras";
import { QuemSomos, PaginaHome } from "../Pages/PaginaHome";

export const Root = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<RenderizacaoCondicional />} /> */}
                    <Route path="/addlista" element={<AdicionarLista />} />
                    <Route path="/" element={<PaginaHome />} />
                    <Route path="/quemsomos" element={<QuemSomos />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


