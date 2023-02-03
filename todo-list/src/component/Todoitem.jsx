import styled from "styled-components";
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
import { useTodoDispatch } from "../TodoContext";

function Todoitem({ todo }) {
  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({ type: "TOGGLE_TODO", id: todo.id });

  const onRemove = () => dispatch({ type: "REMOVE_TODO", id: todo.id });

  return (
    <Container done={todo.done}>
      <BtnCheck onClick={onToggle}>
        {todo.done ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
      </BtnCheck>
      <p>{todo.text}</p>
      <BtnDelete>
        <AiFillDelete color="red" onClick={onRemove} />
      </BtnDelete>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
  p {
    flex: 1;
    margin-left: 5px;
    text-decoration: ${({ done }) => done && "line-through 1px"};
  }
`;

const BtnCheck = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    fill: #eee;
  }
`;

const BtnDelete = styled.div`
  svg {
    opacity: 0;
    cursor: pointer;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export default Todoitem;
