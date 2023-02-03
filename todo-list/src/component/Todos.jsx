import { useContext, useReducer } from "react";
import styled from "styled-components";
import { NumContext, TodoProvider, useTodoState } from "../TodoContext";
import Todobody from "./Todobody";
import Todoheader from "./Todoheader";
import Todoinput from "./Todoinput";

function Todos() {
  return (
    <TodoProvider>
      <Container>
        <Todoheader />
        <Todobody />
        <Todoinput />
      </Container>
    </TodoProvider>
  );
}

const Container = styled.div`
  width: 500px;
  height: 700px;

  background: #eee;

  margin: 0 auto;

  margin-top: 90px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export default Todos;
