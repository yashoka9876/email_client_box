import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import EmailBodyIndex from "./components/EmailList/EmailBodySent";
import RootLayout from "./pages/RootLayout";
import EmailList from "./components/EmailList/EmailList";
import Auth from "./components/Auth/Auth";
import Compose from "./components/Composes/Compose";
import { rootReturn } from "./utils/loaderFunction/authfun";
import EmailDetail from "./components/EmailList/EmailDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <EmailList />, loader: rootReturn },
      { path: "/sent", element: <EmailBodyIndex />, loader: rootReturn },
      {path:':Id',element:<EmailDetail/>},
      {path:'sent/:Id',element:<EmailDetail/>}
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  // { path: "/compose", element: <Compose /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
