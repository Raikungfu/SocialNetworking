import { FormEvent } from "react";
import logo from "../../assets/img/logo.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setState } from "../../hooks/UserSlice";
import AxiosApi from "@/configs/axios";

function Login() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  interface responseData {
    accessToken: string;
    refreshToken: string;
    userName: string;
    avt: string;
    name: string;
  }
  const handleLogSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      const response = await AxiosApi.post<responseData>("/User/login", false, {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.data) {
        dispatch(setState({ state: "active", ...response.data }));
        Cookies.set("accessToken", response.data.accessToken, { expires: 1 });
        Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
        nav("../");
      } else {
        alert("sdsd login");
      }
    } catch (error) {
      alert("sdsd login");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900  w-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex flex-col justify-around items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="App-logo pb-3" src={logo} alt="logo" />
          <h1 className="text-xs leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
        </a>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleLogSubmit(e)}
            >
              <div className="flex w-full rounded-md items-center">
                <label
                  htmlFor="email"
                  className="block basis-1/3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="flex w-full rounded-md items-center">
                <label
                  htmlFor="password"
                  className="block basis-1/3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full border-2 text-dark bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-[#827d7d21]"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>

              <div id="error" className=""></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
