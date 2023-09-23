import Card from "./Card";
const Food = ({ meals }) => {
  // console.log(meal);
  return (
    <div className="grid grid-cols-3 gap-4">
      {meals.map((item, idx) => {
        return <Card item={item} key={idx} />;
      })}
    </div>
  );
};

export default Food;
