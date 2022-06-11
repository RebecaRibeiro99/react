// import { useState } from "react";
// import { useState, userEffect} from "react";

// function App() {
//   const [nome, steNome] = useState()

//   const handleNome = () =>{
//     console.log("nome:", nome)
//     if(nome ==="Fulano"){
//   setNome("")
//   }else{
//     setNome("Fulano")
//   }
// }
//   return (
//    <>
//     <h1> Boa Noite {nome}</h1>
//     <button onClick={handleNome}>Clique aqui</button>
//     </>
//   );
// }

// export default App;

// function App() {
//   const [nome, steNome] = useState(0)

//   userEffect(()=>{
//     document.title = "Você clicou ${count} vezes";
//   )
//   }
//   return (
//         <div>
//          <p> Você Clicou {count}</p>
//          <button onClick={() => setCount(count + 1 )}>
//            Clique aqui
//          </button>
//          </div>
//        );
// }
// import React from "react";
// import {ComponentePai} from "./Pages/ComponentePai";
// import {IndiretaPai} from "./Pages/IndiretaPai"
// import {Input} from "./Pages/Input"

// function App () {
//   return (
//     <>
//       <ComponentePai/>
//       <IndiretaPai/>
//       <Input/>
//     </>
//   );
// }
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ComponentePai} from "./Pages2/ComponentePai";
function App () {
  return (
        <>
          <ComponentePai/>
         </>
       );
   }
export default App;