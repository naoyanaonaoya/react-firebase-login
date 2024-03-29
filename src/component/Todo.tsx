import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import TodoItem from "./TodoItem";

interface TodoData {
  id: string;
  title: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoData[]>([{ id: "", title: "" }]);

  useEffect(() => {
    // リアルタイム
    const todosCollectionRef = collection(db, "todos");
    const unSub = onSnapshot(todosCollectionRef, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
        }))
      );
    });
    // アンマウント時にリスナーの削除
    unSub();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          // <li key={todo.id}>{todo.title}</li>
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
