import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import List from "./List";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const [add, setAdd] = useState([]);

  const [validation, setValidation] = useState("");

  const setData = (e) => {
    setTodo(e.target.value);
  };
  const additems = () => {
    if (todo === "") {
      setValidation("Enter Your Todo");
    } else {
      setAdd(() => {
        return [...add, todo];
      });
      setTodo("");
      setValidation("");
    }
  };

  const dltitems = (id) => {
    // console.log(id);
    const dltdata = add.filter((el, ind) => {
      return ind !== id;
    });
    setAdd(dltdata);
  };

  return (
    <div className="main-container">
      <div className="todo-box">
        <img src="/book.png" alt="todoimg" className="todoimg" />
        <h2 className="heading"> Write Your TODO List Here</h2>
        <h3 className="validation">{validation}</h3>
        <div className="input-container">
          <input
            type="text"
            onChange={setData}
            value={todo}
            name="todo"
            placeholder="Enter Your Task"
          />
          <Tooltip title="Add">
            <Button className="addbtn" onClick={additems}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
        <div className="store-container">
          <ul>
            {add.map((ele, index) => {
              return (
                <>
                  <List id={index} text={ele} dltitems={dltitems} />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
