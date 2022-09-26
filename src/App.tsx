import React, { useState } from 'react'

interface CountProps {
  children?: JSX.Element
}

function Random() {
  return <h1>{Math.random()}</h1>
}

function Count(props: CountProps) {
  const [count, setCount] = useState(0)
  const onAdd = () => {
    setCount(count + 1)
  }
  const onMinus = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h2>{count}</h2>
      {props.children}
      <button onClick={onMinus}>➖</button>
      <button onClick={onAdd}>➕</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Count>
        <Random />
      </Count>
    </div>
  );
}

export default App;