import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TodoList from "./TodoList";
import BirthdayCal from "./BirthdayCal";

function App() {
  return (
    <>
      <h1 className="text-center">Hello, World!</h1>
      <TodoList />
      <BirthdayCal />
    </>
  );
}

export default App;
