import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncLoginUser } from "../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    await dispatch(asyncLoginUser(data));
    toast.success("User login successfully");

    reset();
  };

  return (
    <div className="w-full h-screen px-4 py-4 bg-zinc-900 flex items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4 flex flex-col gap-3 rounded-md shadow bg-zinc-800 text-white">
        <h1 className="text-4xl md:text-2xl leading-0 font-semibold tracking-tight text-center py-4">
          Login Account
        </h1>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full flex flex-col gap-3"
        >
          <div className="flex flex-col">
            <label
              className="text-base font-normal tracking-tight"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="p-2 rounded-md bg-transparent text-white outline-0 border border-zinc-600"
              {...register("email", { required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="text-base font-normal tracking-tight"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="p-2 rounded-md bg-transparent text-white outline-0 border border-zinc-600"
              {...register("password", { required: true })}
            />
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-200 text-white border-none cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm">
          Don't have an account ?{" "}
          <Link to="/register" className="text-blue-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
