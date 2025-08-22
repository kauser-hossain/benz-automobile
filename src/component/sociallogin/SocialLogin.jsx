import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { gogglesignin } = useContext(AuthContext);
  const navigate=useNavigate()
  const handleGoggleSignin = () => {
    gogglesignin()
      .then((result) => {
        console.log(result.user);

        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
        };
        fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then(result=>{
            console.log(result,"result")
            navigate("/")
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2 mb-3"
        onClick={handleGoggleSignin}
      >
        <FcGoogle className="text-xl" />
        Sign in with Google
      </Button>
      {/* Facebook Sign-In */}
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <FaFacebook className="text-blue-600 text-xl" />
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default SocialLogin;
