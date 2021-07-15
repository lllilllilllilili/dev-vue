import ScrollBox from './ScrollBox';
import { useRef } from 'react';

const App = () => {
  const scrollBoxRef = useRef();
  return (
    <div>
      <ScrollBox ref={scrollBoxRef}></ScrollBox>
      <button onClick={() => scrollBoxRef.current.scrolltoEnd()}>맨 밑으로</button>
    </div>
  );
}

export default App;
