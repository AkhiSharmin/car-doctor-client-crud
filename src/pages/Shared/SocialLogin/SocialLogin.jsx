import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const handelGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handelGoogleSingIn}
          className="btn btn-circle btn-outline bg-orange-500"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
