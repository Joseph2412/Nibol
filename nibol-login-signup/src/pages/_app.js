import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
