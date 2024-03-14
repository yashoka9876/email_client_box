import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import EmailBodyIndex from "./components/EmailList/EmailBodySent";
import RootLayout from "./pages/RootLayout";
import EmailList from "./components/EmailList/EmailList";
import Auth from "./components/Auth/Auth";
import Compose from "./components/Composes/Compose";
import { useSelector } from "react-redux";



const router=createBrowserRouter([
  {path:'/',
  element:<RootLayout/>,
  children:[
    {path:'/',element:<EmailList/>},
    {path:'/sent',element:<EmailBodyIndex/>},
    {path:'/compose',element:<Compose/>,
  }
  ]
},
{
  path:'/auth',
  element:<Auth/>
},
{path:'/compose',element:<Compose/> }

])

function App() {

  return <RouterProvider router={router}/>

}

export default App;
