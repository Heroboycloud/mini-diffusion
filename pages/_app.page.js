import "../styles/globals.css";
import RootLayout from "./Layout";
//import initAuth from "./initAuth";


//initAuth();

export default function App({ Component, pageProps }) {
  return (
<RootLayout>
<Component {...pageProps} />
</RootLayout>
);


}
