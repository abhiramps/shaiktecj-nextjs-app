/** @format */

import { withAuthenticator } from "@aws-amplify/ui-react";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import Auth from "@aws-amplify/auth";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

const SigninRaw = () => {
  return (
    <div>
      {/* <h1>FLEET MANAGER</h1>
      <button onClick={() => Auth.signOut()}>signout</button> */}
      {/* <Table/> */}
    </div>
  );
};

const SigninComplete = withAuthenticator(SigninRaw);

export default function () {

  const router = useRouter();

  onAuthUIStateChange((nextAuthState, authData) => {
    if (nextAuthState === AuthState.SignedIn) {
      console.log("user successfully signed in!");
      router.push("/");
    }
  });

  return (
    <>
      <Navbar user={null}></Navbar>
      <SigninComplete></SigninComplete>
    </>
  );
}
