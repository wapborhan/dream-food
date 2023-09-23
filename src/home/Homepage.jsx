import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import SearchBar from "../components/search/SearchBar";
import Food from "./food/Food";

const Homepage = () => {
  const { meals } = useLoaderData();

  return (
    <div className="container px-32 py-10">
      {/* <SearchBar /> */}
      <Food meals={meals} />
    </div>
  );
};

export default Homepage;
