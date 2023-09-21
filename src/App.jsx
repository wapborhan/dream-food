import { Fragment } from "react";
import Homepage from "./home/Homepage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Homepage />
      <Footer />
    </Fragment>
  );
}

export default App;
