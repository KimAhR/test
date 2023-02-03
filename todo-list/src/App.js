import styled from "styled-components";
import "./index.css";

import Todos from "./component/Todos";

import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <TodoProvider>
      <Container>
        <Todos />
      </Container>
    </TodoProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f2f2;
`;

export default App;
