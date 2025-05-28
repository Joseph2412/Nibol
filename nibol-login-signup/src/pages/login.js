import Head from "next/head";
import Link from "next/link";
//Import di meta dati e sezione head da Next.Js

import {useRouter} from "next/router";
//Salviamo lo stato del Router; Gestiamo la destinazione dell'utente

import {useEffect, useState} from "react"; 
//Salviamo Lo stato dell'utente che gestirà React.
//Interessante....
//Per richiamare alcune funzioni devi richiamare il corretto "NAMESPACE"...diciamo

import { toast } from "react-toastify";
//Proviamo a creare una piccola animazione


export default function LoginPage() {
    const router = useRouter();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //Settiamo il valore dell'utente a vuoto
    //In pratica sono I Getter e Setter; Come in Java

    const [error, setError] = useState("");
    //Validatori => Laravel 100%
    //Inizializzi a zero lo stato base
    //Dopo lo valorizzi.

    const [loading, setLoading] = useState(false);



    useEffect(() => {
    
    //Prendiamo da localStorage lo stato di Login
    const isLogged = localStorage.getItem("isLogged");

    //Controllo su storage se Loggato; Se true vai direttamente a dashboard
    if(isLogged === "true") {
      router.push("/dashboard");
    } 
  },[]);
  
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
          }

        const handleLogin = (e) => {
          //ArrowFunction
          //Simile a Lambda Function: Ti passo il parametro formale direttamente su stessa riga
            e.preventDefault();
            
            //Settiamo controllo ed Error
            if(password.length <6 ){
              setError("Too easy my friend....C'mon");
              toast.error("Password Troppo CORTA!");
              return;
            } else if (!isValidEmail(email)) {
               setError("Inserisci un'email valida");
               toast.error("Email non VALIDA");
              return;
            }
            
          setLoading(true); // Animazione Spinner
           
          setTimeout(() => {
            localStorage.setItem("email", email);
            localStorage.setItem("isLogged", "true");
            toast.success("Login Avvenuto CORRETTAMENTE!");
            router.push("/dashboard");
          }, 1500); // SDelay a 1.5s
        }
        //Settiamo Return: RETURN IN PAGINA (RICORDA CHE REACT VA A FUNZIONI)
    return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>

       <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-xl font-semibold mb-2">Login</h1>
          <p className="text-sm mb-4">
            Don’t you have an account?{" "}
            <Link href="/signup" className="text-orange-500 font-semibold">
              Signup
            </Link>
          </p>

          <input
            type="email"
            placeholder="user@nibol.com"
            className="w-full border p-2 mb-4 rounded"
            
            value={email}
            //Identifichiamo la value
            
            onChange={(e)=> setEmail(e.target.value)}
            //Diamo una Value di Ritorno e chiamo il SETTER
            
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
            value ={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />

          {/*Zona per Messaggio ERRORE*/}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
        type="submit"
        disabled={loading}
        className={`w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded hover:opacity-90 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? (
          <span className="flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
              ></path>
            </svg>
            Caricamento...
          </span>
        ) : (
          "Continue"
        )}
      </button>


          <p className="text-center text-xs mt-4 text-gray-500">
            Forgot password?
          </p>
        </form>
        </div>
      </>
    
  );
}
