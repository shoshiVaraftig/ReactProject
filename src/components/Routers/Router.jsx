import { createBrowserRouter } from "react-router-dom";
//import BusinessData from "../businessData/BusinessData";
//import AdminHome from "../../data/AdminHome";
import Service from "../services/Service";
//import Picture from "../pictures/Pictures";
import App from "../../App";
import AdminPage from "../data/AdminPage";
import Meeting from "../meeting/Meeting";
import FormState from "../businessData/FormState";
import BusinessData from "../businessData/BusinessData";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>error contant</div>,
    },
    {
        path: '/admin',
        element: <AdminPage />,
        children: [
            {
                path: 'service',
                element: <Service />
            },
            {
                path: "meetings",
                element: <Meeting />
            },
            {
                path: "edit",
                element: <FormState />
            },
            {
                path: "businessdata",
                element: <BusinessData />
            }
        ]
    },





]);
export default routes