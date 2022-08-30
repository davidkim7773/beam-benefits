import { useState } from 'react';
import { ShippingScreen } from './containers/ShippingScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ShippingScreen/>
    </div>
  )
}

export default App
