import React from "react";

export default function Card() {
  const [todoList, setTodoList] = React.useState([]);

const getTodoList = async () => {
  const apiCall = await  fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await apiCall.json();
   setTodoList(data);
}

  React.useEffect(() => {
    getTodoList();
  }, todoList);

  const todoRows = todoList.map(todo => (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.userId}</td>
      <td>{todo.title}</td>
      <td>{todo.completed? 'True': 'Fl'}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todoRows}
      </tbody>
    </table>
  );
}
