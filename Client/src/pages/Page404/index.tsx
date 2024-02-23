import { useNavigate } from "react-router-dom";
import "./style.scss";
const Page404: React.FC = () => {
  const nav = useNavigate();
  const handleGoBack = () => {
    nav(-1);
  };
  return (
    <section id="page404">
      <div className="dark:bg-black dark:text-white">
        <div className="flex h-screen w-screen">
          <div className="m-auto text-center">
            <h1 className="text-6xl font-bold mb-8">Page Not Found</h1>
            <p className="text-3xl mb-8">
              Oops! The page you are looking for could not be found.
            </p>
            <button
              onClick={handleGoBack}
              className="bg-transparent hover:bg-red-500 text-red-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-600 hover:border-transparent"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page404;
