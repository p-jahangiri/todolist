import React, { useEffect, useRef } from "react";

function FormAddTodo({add}) {

  const valueInput = useRef();
  const handlerAdd = () => {
    if (valueInput.current.value == "") {
      alert("dhccscc");
    } else {
      add(valueInput.current.value);
      valueInput.current.value= ''
    }  
  };
  
useEffect(() => {
    valueInput.current.focus();
    
}, []);
  return (
    <div className="form-inline">
      <div className="form-group">
        <input
        focus="true"
          type="text"
          className=" mx-sm-3"
          placeholder="i want to do ..."
          ref={valueInput}
        />
        <button className="btn btn-success" onClick={ handlerAdd}>
          add
        </button>
      </div>
    </div>
  );
}

export default FormAddTodo;
