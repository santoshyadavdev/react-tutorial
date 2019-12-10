import React from "react";

export default function Card() {
  const [todoList, setTodoList] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setTodoList(data);
      });
  });

  const todoRows = todoList.map(todo => (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.userId}</td>
      <td>{todo.title}</td>
      <td>{todo.completed}</td>
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
