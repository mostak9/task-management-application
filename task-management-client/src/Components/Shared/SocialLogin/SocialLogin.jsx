import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import {useLocation, useNavigate} from 'react-router-dom';

const SocialLogin = () => {
  const {googleLogin} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    googleLogin()
    .then(res => {
      console.log(res.user);
      navigate(location.state || '/');
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="w-full">
      <Button
        variant="outlined"
        onClick={handleLogin}
        size="sm"
        className="w-full flex items-center gap-1 justify-center"
      >
        <FcGoogle className="text-xl" />
        Login with Google
      </Button>
    </div>
  );
};

export default SocialLogin;
