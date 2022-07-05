import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


import {NavBar} from "./components"

// const Main = () => {
//     return (
//         <div className="app">
//             <NavBar />
//         </div>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BrowserRouter> <App /> </BrowserRouter>)

// ReactDOM.render(<Main/>, document.getElementById('app'))
