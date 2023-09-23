import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./home/Homepage";
import DetailsCard from "./home/food/food-details/DetailsCard";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/not-found/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: () =>
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"),
      element: <Homepage />,
      errorElement: <NotFound />,
    },
    {
      path: "/food/:foodId",
      loader: ({ params }) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`
        ),
      element: <DetailsCard />,
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
