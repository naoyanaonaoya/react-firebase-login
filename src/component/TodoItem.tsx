import React, { useState } from "react";

interface PROPS {
  id: string;
  title: string;
}

const TodoItem: React.FC<PROPS> = (props) => {
  const [title, setTitle] = useState<string>(props.title);

  return (
    <div>
      <li>{props.title}</li>
      <h4>{props.id}</h4>
    </div>
  );
};

export default TodoItem;
