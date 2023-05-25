import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function onDelete(todo) {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  return (
    // <BrowserRouter>
    //   <Header title="My Todos List" searchBar={true} />
    //   <Routes>
    //     <Route exact path="/nopage" element={<NoPage />} />
    //     <Route
    //       exact
    //       path="/"
    //       element={
    //         <>
    //           <AddTodo addTodo={addTodo} />
    //           <Todos todos={todos} onDelete={onDelete} />
    //         </>
    //       }
    //     ></Route>
    //     <Route exact path="/about" element={<About />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
