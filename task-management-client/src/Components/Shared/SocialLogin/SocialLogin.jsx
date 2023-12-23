import { Button } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="w-full">
      <Button
        variant="outlined"
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
