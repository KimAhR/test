import styled from "styled-components";
import Todoitem from "./Todoitem";
import { useTodoState } from "../TodoContext";

function Todobody() {
  const todos = useTodoState();

  return (
    <TodoBody>
      <ul>
        {todos.map((todo) => (
          <Todoitem key={todo.id} todo={todo} />
        ))}
      </ul>
    </TodoBody>
  );
}

const TodoBody = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  padding-bottom: 48px;
`;

export default Todobody;
