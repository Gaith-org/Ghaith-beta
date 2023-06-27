import React from 'react'
import App from './routes/App.jsx'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Error from './routes/Error.jsx'
import Cases from './routes/Cases.jsx'
import './styles/index.css'
import ContactForm from './routes/ContactForm.jsx'
import About from "./routes/About.jsx"
import Home from './routes/Home.jsx'


const routes = [
  { path: "/", element: <App/> ,errorElement:<Error/>,
    children: [
    { path: "/", element: <Home/> },
    { path: "/about", element: <About/> },
    { path: "/contact", element: <ContactForm/>},
    { path: "/cases", element: <Cases/>}
]},
  
]
const router = createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
