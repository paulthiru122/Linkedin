import './App.css'
import Header from './Header'
import { Sidebar } from './Sidebar'


function App() {
  return(
    <div className= 'app' >
     
    <Header/>
    {/* App Body  */}
    <div className="app-body">
      <Sidebar/>
    </div>
    </div>
  )

}

export default App