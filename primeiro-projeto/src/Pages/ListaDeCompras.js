import React from "react";
import { Lista ,Span} from "../TarefaDeCasa/style";

export const ListaDeCompras = (props) => {
  return (
    <>
      <Lista>
        {props.lista.map((res) => (
          <Span>{res}</Span>
        ))}{" "}
      </Lista>
    </>
  );
};
