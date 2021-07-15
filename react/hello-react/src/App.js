import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
  ]);
  const [nextId, setId] = useState(4);
  const [nextValue, setValue] = useState("");

  const inputValue = useRef();
  let arrayItems = number.map((number) => (
    <li key={number.id} onDoubleClick={() => onRemove(number.id)}>
      {number.value}
    </li>
  ));
  const onRemove = (idx) => {
    setNumber(number.filter((number) => number.id !== idx));
  };
  const onChange = (e) => {
    setValue(inputValue.current.value);
  };
  const onClick = (event) => {
    setId(nextId + 1);
    setValue(inputValue.current.value);

    const newArrayItem = number.concat({ id: nextId, value: nextValue });
    setNumber(newArrayItem);
    arrayItems = number.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
    inputValue.current.value = "";
  };
  return (
    <div className="App">
      <input
        type="text"
        name="inputValue"
        onChange={onChange}
        ref={inputValue}
      ></input>
      <button onClick={onClick}>추가</button>
      {arrayItems}
    </div>
  );
}

export default App;
