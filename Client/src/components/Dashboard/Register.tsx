import logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
import AxiosApi from "@/configs/axios";

function Register() {
  const handleRegSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nav = useNavigate();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const age = formData.get("age") as string;
    const gender = formData.get("gender") as string;
    const terms = formData.get("terms") === "accepted" ? true : false;
    if (terms) {
      const response = await AxiosApi.post('/User/Register', false, {
        email: email,
        password: password,
        age: age,
        gender: gender,
      });

      if(response.data) {
        alert('Registration Success! Login now...')
        nav('/login')
      }else{
        const err = document.createTextNode(
          response.error ? response.error : ""
        );
        setTimeout(
          () => document.getElementById("termsErr")?.appendChild(err),
          3000
        );
      }
    } else {
      const termsErr = document.createTextNode(
        "\nPlease accept the Terms and Conditions to register"
      );
      setTimeout(
        () => document.getElementById("termsErr")?.appendChild(termsErr),
        3000
      );
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen w-screen">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <a
          href="./about"
          className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
        <img className="App-logo mt-2" src={logo} alt="logo"/>
          <h1 className="text-xs leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-2 md:space-y-3 sm:p-8">
            
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleRegSubmit(e)}
            >
              <div className="flex w-full rounded-md items-center">
                <label
                  htmlFor="email"
                  className="block basis-2/5 text-sm font-medium text-gray-900 dark:text-white"
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
                  className="block basis-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              <div className="flex w-full rounded-md items-center">
                <label
                  htmlFor="confirm-password"
                  className="block basis-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex w-full rounded-md items-center">
                <p className="block basis-2/5 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </p>
                <div className="block w-full">
                  <div className="flex flex-row items-center gap-4 py-1">
                    <input
                      type="radio"
                      name="gender"
                      id="man"
                      value="man"
                      required
                    />
                    <label
                      htmlFor="gender"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Man
                    </label>
                  </div>
                  <div className="flex flex-row items-center gap-4 py-1">
                    <input
                      type="radio"
                      name="gender"
                      id="woman"
                      value="woman"
                      required
                    />
                    <label
                      htmlFor="gender"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Woman
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex w-full rounded-md items-center">
                <label
                  htmlFor="age"
                  className="block basis-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  type="datetime-local"
                  name="age"
                  id="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex flex-row justify-center w-full rounded-md items-center">
                <div className="h-5">
                  <input
                    id="terms"
                    name="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    value="accepted"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              
              <div id="termsErr" className="sr-only"></div>
              <button
                type="submit"
                className="w-full border-2 text-dark bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-[#827d7d21]"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
