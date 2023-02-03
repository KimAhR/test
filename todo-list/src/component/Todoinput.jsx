import { useRef, useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../TodoContext";

function Todoinput() {
  const [text, setText] = useState("");
  const nextId = useRef(4);
  const inputRef = useRef();

  const dispatch = useTodoDispatch();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("할일을 입력해주세요.");
      return;
    }
    dispatch({ type: "CREATE_TODO", id: nextId.current++, text });
    setText("");
    inputRef.current.focus();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="할일을 입력해주세요."
          onChange={handleText}
          value={text}
          ref={inputRef}
        />
        <Button>등록</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 5px 0;
  margin-top: 4px;
  outline: none;
  border: none;
  background-color: gray;
  color: #fff;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background-color: #7fbde0;
  }

  &:active {
    background-color: black;
  }
`;

export default Todoinput;
