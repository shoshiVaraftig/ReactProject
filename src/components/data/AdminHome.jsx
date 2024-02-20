import { Outlet } from "react-router-dom"
import BusinessData from "../businessData/BusinessData"
import "./admin.css";
//import Login from "../login/Login";
function AdminHome(){
   // const isLogin = DataStore.isLogin;
    return(<>

   <BusinessData />

    
    <nav></nav>
    <Outlet/>
    </>)
}
export default AdminHome