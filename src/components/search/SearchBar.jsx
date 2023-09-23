import Search from "./Search";
import SearchCat from "./SearchCat";
import SearchArea from "./SearchArea";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [categories, setCategories] = useState("");
  const [area, setArea] = useState("");

  const catUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const AreaUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

  useEffect(() => {
    // Fetch categories
    fetch(catUrl)
      .then((res) => res.json())
      .then((data) => {
        let categories = data.map((cat) => {
          return cat["strCategory"];
        });
        setCategories(categories);
      });
    // Fetch Area
    fetch(AreaUrl)
      .then((res) => res.json())
      .then((data) => {
        let area = data.map((cat) => {
          return cat["strArea"];
        });
        setArea(area);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="search-input">
        <Search />
      </div>
      <div className="search-categories">
        <SearchCat categories={categories} />
      </div>
      <div className="search-areas">
        <SearchArea area={area} />
      </div>
    </div>
  );
};

export default SearchBar;
