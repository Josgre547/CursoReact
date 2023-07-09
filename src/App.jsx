import './App.css'
import {NavBar, ItemListContainer} from './components'

function App() {

  return (
    <div>
      <span><NavBar/></span>
      <div className="container">
      </div>
      <div className="container">
        <ItemListContainer handleClick={()=> alert("BIENVENIDO!")}/>
      </div>
    </div>
  )
}

export default App
