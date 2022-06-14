import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { QuemSomos } from "../QuemSomos/Index";
import { NotFound } from "../QuemSomos/NotFound";



export const Root = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="" element={<NotFound/>}></Route>
                    <Route path="/quemsomos/:nome/:idade" element={<QuemSomos />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}