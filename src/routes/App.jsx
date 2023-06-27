import { Outlet } from "react-router-dom";
import Header from "../partials/header";
import Footer from "../partials/footer";


const App = () => {
    return ( 
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
     );
}
 
export default App;