import { useLoaderData } from "react-router-dom";
import YouTube from "react-youtube";

const DetailsCard = () => {
  const details = useLoaderData();

  const data = details.meals.map((item, idx) => {
    // console.log(item);

    return (
      <div className="card max-w-screen-lg mx-auto py-6" key={idx}>
        <div className="grid grid-cols-2 gap-8">
          <div className="image">
            <img src={item.strMealThumb} alt="" />
          </div>
          <div className="details w-full">
            <h2 className="text-5xl pb-5">
              <a href={item.strSource}> {item.strMeal}</a>
            </h2>
            <div className="flex justify-between mb-4">
              <div className="a">{item.strArea}</div>
              <div className="b">{item.strCategory}</div>
              <div className="c">{item.strTags}</div>
            </div>

            <table className="w-full table-auto border border-slate-500">
              <thead>
                <tr>
                  <th className="border border-slate-600">Ingredients</th>
                  <th className="border border-slate-600">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-600">
                    {item.strIngredient1}
                  </td>
                  <td className="border border-slate-600">
                    {item.strMeasure1}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    {item.strIngredient2}
                  </td>
                  <td className="border border-slate-600">
                    {item.strMeasure2}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    {item.strIngredient3}
                  </td>
                  <td className="border border-slate-600">
                    {item.strMeasure3}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    {item.strIngredient4}
                  </td>
                  <td className="border border-slate-600">
                    {item.strMeasure4}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>{item.strInstructions}</p>
        {/* <video width="750" height="500" controls>
          <source src={item.strYoutube} type="video/mp4" />
        </video> */}
      </div>
    );
  });

  return <>{data}</>;
};

export default DetailsCard;
