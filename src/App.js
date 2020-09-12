import React from "react";
import Footer from "./Component/footer";
import VisibleTodoList from "./container/visibilityTodo/visibilityTodoList";
import AddTodo from "./container/addTodo/addtodo";

function App() {
  return (
    <div>
      <VisibleTodoList />
      <Footer />
      <AddTodo />
    </div>
  );
}

export default App;
