import { Button, Input, Typography } from "@material-tailwind/react";
import registerAnimation from "../../assets/login.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Registration = () => {
  const [showPass, setShowPass] = useState(false);
  const {createUser, updateUser} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm()
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    setProgress(true);
    const imageFile = { image: data.photo[0] };
    const imgRes = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if(imgRes.data.success) {
      createUser(data.email, data.password)
      .then(res => {
        if(res.user) {
          updateUser(data.name, imgRes.data.data.display_url)
          .then(() => {
            toast.success('Successfully Registered!')
            setProgress(false);
            navigate(location.state || '/');
          })
          .catch(() => {
            toast.error('Something went wrong!')
            setProgress(false);
          })
        }
      })
      .catch(() => {
        toast.error('Something went wrong!')
        setProgress(false);
      })
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" max-w-7xl h-2/3 m-auto shadow-2xl p-6 rounded-xl flex flex-col md:flex-row-reverse items-center gap-5">
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
          <Lottie className="h-2/3" animationData={registerAnimation} />
          <Typography variant="h2" className="font-bold">
            Registration
          </Typography>
        </div>
        {/* registration form */}
        <div className="flex items-center justify-center flex-1 flex-col gap-2">
          <form onSubmit={handleSubmit(onSubmit)} action="" className="w-full space-y-5">
          <Input required {...register('name', {required: true})} label="Full Name" type="text" />
          <Input required {...register('photo', {required: true})} label="Profile Picture" type="file"/>
            <Input required {...register('email', {required: true})} name="email" label="Email" type="email" />
            
            <div className="relative">
              <Input required {...register('password', {required: true})} name="password" label="Password" type={showPass ? "text" : "password"} />
              <div
                className="absolute right-1 top-1/3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            <Button loading={progress} disabled={progress} type="submit" className="w-full">Register</Button>
          </form>
          <p>
            Already have an account?
            <Link to={'/login'} className="text-blue-900 underline">Login</Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Registration;
