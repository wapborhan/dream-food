import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl">{error.status}</h1>

      <p className="text-7xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <h1 className="text-5xl">{error.data}</h1>
    </div>
  );
};

export default NotFound;
