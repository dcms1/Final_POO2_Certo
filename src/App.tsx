import { Dashboard } from './components/Dashbord'
import { GlobalStyle } from './styles/global'
import {Header} from './components/Header'
export function App() {

  return (
    <div className="App">
    <Header/>
    <Dashboard /> 
    <GlobalStyle />
  </div>
  )
}
