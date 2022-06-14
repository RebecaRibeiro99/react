import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "../Pages/Home";
// import { QuemSomos } from "../QuemSomos/Index";
// import { NotFound } from "../QuemSomos/NotFound";
import { TelaInicial } from "../TarefaDeCasa/TelaInicial";
import { SegundaTela } from "../TarefaDeCasa/SegundaTela";
import { NotFound } from "../TarefaDeCasa/NotFound";



export const Root = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicial />} />
                    <Route path="" element={<NotFound/>}></Route>
                    <Route path="/segundatela/:nome/:idade" element={<SegundaTela />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}