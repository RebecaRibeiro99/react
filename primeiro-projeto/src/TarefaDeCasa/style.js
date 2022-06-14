import styled from "styled-components";

export const Inicio = styled.h1`
  text-align: left;
  color: #a8328f;
  margin-left: 20px;
`;
export const Imagem = styled.img`
  margin: 0 auto;
  height: 300px;
  display: flex;
`;
export const Botao = styled.button`
  border-radius: 8px;
  background-color: #a8328f;
  color: #fff;
  font-weight: 700;
  padding: 5px 10px;
  margin-top: 20px;
  border: none;
  margin-left: 20px;
  position: absolute;
  bottom: 20px;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #a8328f;
    border: 1px solid #a8328f;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Botao2 = styled.button`
  border-radius: 8px;
  background-color: #a8328f;
  color: #fff;
  font-weight: 700;
  padding: 5px 10px;
  border: none;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #a8328f;
    border: 1px solid #a8328f;
  }
`;
export const Container2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 20px;
`;
export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 200px;
  margin-left: 10px;
`;
export const Span = styled.span`
  display: flex;
  border-radius:10px;
  border:2px solid #a8328f;
  word-break:break-word;
  width:150px;
  padding:5px;
  justify-content:center;
  margin-top:25px;
`;
