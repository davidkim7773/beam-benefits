import { useState } from 'react';
import { MainContainer } from './containers/MainContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainContainer/>
    </div>
  )
}

export default App
