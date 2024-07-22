import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { auth } from "../config/firebase.config";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const AuthButtonWithProvider = ({ Icon, Label, Provider }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const handleClick = async () => {
    switch (Provider) {
      case "GoogleAuthProvider":
        await signInWithRedirect(auth, googleAuthProvider)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(`Error: ${err.message}`);
          });
        break;
      case "GithubAuthProvider":
        await signInWithRedirect(auth, githubAuthProvider)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(`Error: ${err.message}`);
          });
        break;

      default:
      case "GoogleAuthProvider":
        await signInWithRedirect(auth, googleAuthProvider)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(`Error: ${err.message}`);
          });
        break;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md"
    >
      <Icon className="text-txtPrimary text-xl group-hover:text-white" />
      <p className="text-txtPrimary text-lg group-hover:text-white">{Label}</p>
      <FaChevronRight className="text-txt-primary text-base group-hover:text-white" />
    </div>
  );
};

export default AuthButtonWithProvider;
