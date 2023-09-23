import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { strMeal, strMealThumb, idMeal } = item;
  // console.log(item);
  return (
    <div
      className="card border-2 rounded-md"
      // onClick={d}
    >
      <Link to={`/food/${idMeal}`}>
        <div className="p-5">
          <figure>
            <img src={strMealThumb} alt="" />
          </figure>
          <div className="text-center text-3xl mt-5">{strMeal}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
