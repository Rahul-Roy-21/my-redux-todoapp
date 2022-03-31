import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value === ""){
      alert("Please Add Todo Name !!");
      return;
    }
    dispatch({
      type: actions.TodoAdded,
      payload: {
        title: value,
      },
    });
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <section className="row mx-1">
        <input
          type="text"
          className="col-8"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>

        <button type="submit" className="btn btn-primary col-3 mx-2">
          Submit
        </button>
      </section>
    </form>
  );
};

export default AddTodo;
