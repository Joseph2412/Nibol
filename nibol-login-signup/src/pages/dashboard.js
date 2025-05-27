import Head from "next/head";
import {useRoture, useRouter} from "next/router";
import { useEffect } from "react";

export default function DashboardPage() {
   
    const router = useRouter();
    useEffect(()=>{
      const isLogged = localStorage.getItem("isLogged");
      if (isLogged !== "true"){
        router.push("/login");
      } //Controllo se presente in localStorage isLogged
      //Basilare MIDDLEWARE
    }, []);

    const handleBack = () => {
        router.back();
        //Funzione PARI PARI a Laravel.
    }

    const handleLogout = () =>{
      localStorage.removeItem("email");
      localStorage.removeItem("isLogged");
      router.push("/signup");
    };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
        <h1 className="text-2xl font-bold mb-6">Benvenuto nella Dashboard!</h1>
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
