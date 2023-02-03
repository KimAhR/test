import { useContext } from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

function Todoheader() {
  const todos = useTodoState();
  // 실행되는 로컬 시간을 한글로 표기.
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  const doneCount = todos.filter((todo) => todo.done).length;

  return (
    <Container>
      <DateText>{dateStr}</DateText>
      <CountText>
        완료 : {doneCount}/{todos.length}
      </CountText>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 24px;
  background-color: #1e98c9;

  h1 {
    font-size: 36px;
    color: #343a40;
  }
`;

const DateText = styled.div`
  margin: 10px 0;
  color: #eee;
  font-size: 21px;
`;

const CountText = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

export default Todoheader;
