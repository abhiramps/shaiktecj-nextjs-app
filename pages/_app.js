/** @format */

import "../styles/globals.css";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
