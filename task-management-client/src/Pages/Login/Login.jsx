import { Button, Input, Typography } from "@material-tailwind/react";
import loginAnimation from "../../assets/login.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit } = useForm();
  const {userLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

const onSubmit = (data) => {
  console.log(data);
  userLogin(data.email, data.password)
  .then(() => {
    toast.success('Successfully logged in!')
    navigate(location.state || '/');
  })
  .catch(() => {toast.error('Something went wrong!')})
}

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" max-w-7xl h-2/3 m-auto shadow-2xl p-6 rounded-xl flex flex-col md:flex-row items-center gap-5">
        <div className="w-1/2 flex items-center flex-col justify-center">
          <Typography
            variant="h5"
            className="mr-4 cursor-pointer py-1.5 flex items-center font-bold"
          >
            Task
            <Typography className="text-white bg-black rounded-sm font-bold italic px-2 ">
              Forge
            </Typography>
          </Typography>
          <Lottie className="" animationData={loginAnimation} />
          <Typography variant="h2" className="font-bold">
            Login
          </Typography>
        </div>
        {/* login form */}
        <div className="relative flex items-center justify-center flex-1 flex-col gap-2">
          <form onSubmit={handleSubmit(onSubmit)}  action="" className="w-full space-y-5">
            <Input required {...register('email')} label="Email" type="email" />
            <div className="relative">
              <Input required {...register('password')} label="Password" type={showPass ? "text" : "password"} />
              <div
                className="absolute right-1 top-1/3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <p>
            Don't have a account?
            <Link to={"/registration"} className="text-blue-900 underline">
              Register here
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
