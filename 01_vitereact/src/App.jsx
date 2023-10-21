
import Pen from "./pen"

function App() {
  const username = "Cool"

  //Only 1 element has to be returned in react but using fragments more can be done. 
  return (
    <>            
      <Pen />
      <h1>Vite with React {username}</h1>
      <p>test para</p>
    </>
  )
}

export default App
