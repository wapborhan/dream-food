import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./home/Homepage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/not-found/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <NotFound />,
    },
  ]);
  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
  );
}

export default App;
