import Head from "next/head";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function DashboardPage() {
    
    const {userEmail , logout} = useAuth();   
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (userEmail === null) {
      // aspetta il primo caricamento del context
      const isLogged = localStorage.getItem("isLogged");
      const email = localStorage.getItem("email");

      if (isLogged === "true" && email) {
        return setIsChecking(false); // tutto ok
      } else {
        router.push("/login");
      }
    } else {
      setIsChecking(false); // utente valido
    }
  }, [userEmail]);

  if (isChecking) return null; 

    const handleBack = () => {
        router.back();
        //Funzione PARI PARI a Laravel.
    }

    const handleLogout = () =>{
      logout();
      router.push("/login");
    };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
        <h1 className="text-2xl font-bold mb-6">Benvenuto nella Dashboard!</h1>
        <h2 className="text-lg mb-4">Sei loggato come: {userEmail}</h2>
        <button 
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            LogOut
          </button>
        
        <button onClick={handleBack}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
            Come Back!
        </button>
      </div>
    </>
  );
}
