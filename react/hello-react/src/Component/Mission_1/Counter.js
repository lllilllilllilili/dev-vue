import React, {  useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleCountChange(value) {
    const countValueChangeTo = count + value;
    
    if(countValueChangeTo >= 10) {
      alert("over 10")
      return
    }
    setCount(countValueChangeTo)
  }

  return (
    <>
      <h1> My Counter </h1>
      <div style={{display: 'flex',	flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
        <div style={{flexGrow: 1}}>
          <button onClick={() => handleCountChange(-1)}>-</button>
        </div>
        <div style={{flexGrow: 2}}>
          <span>{count}</span>
        </div>
        <div style={{flexGrow: 1}}>
          {/* 아래처럼 했을경우에 Too many re-renders 에러 발생 ! */}
          {/* <button onClick={handleCountChange(1)}>+</button> */}
          <button onClick={() => handleCountChange(1)}>+</button>
        </div>
      </div>
    </>
  )
}

export default Counter