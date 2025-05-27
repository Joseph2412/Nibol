import Head from "next/head";
import Link from "next/link";
//Import di meta dati e sezione head da Next.Js

import {useRouter} from "next/router";
//Salviamo lo stato del Router; Gestiamo la destinazione dell'utente

import {useEffect, useState} from "react"; 
//Salviamo Lo stato dell'utente che gestirà React.
//Interessante....
//Per richiamare alcune funzioni devi richiamare il corretto "NAMESPACE"...diciamo

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


    useEffect(() => {
    
    //Prendiamo da localStorage lo stato di Login
    const isLogged = localStorage.getItem("isLogged");

    //Controllo su storage se Loggato; Se true vai direttamente a dashboard
    if(isLogged === "true") {
      router.push("/dashboard");
    } 
  },[]);
  

        const handleSingup = (e) => {
          //ArrowFunction
          //Simile a Lambda Function: Ti passo il parametro formale direttamente su stessa riga
            e.preventDefault();
            
            //Settiamo controllo ed Error
            if(password.length <6 ){
              setError("Too easy my friend....C'mon");
              return;
            }
            console.log("Email Utente: ", email);
            console.log("Password Utente: ", password);
            //Stampa in console dei valori del Form

            localStorage.setItem("email", email);
            localStorage.setItem("isLogged", "true");
            //Settiamo in local email e stato di Login a True

            router.push("/dashboard");
            //Non Aggiorno la pagina ma solo il componente.
            //Hook Di accesso a Navigazione Programmatica
            //Occhio: STAI SIMULANDO un ROUTER
        }
        //Settiamo Return: RETURN IN PAGINA (RICORDA CHE REACT VA A FUNZIONI)
    return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>

       <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSingup} className="bg-white p-8 rounded-lg shadow-md w-96">
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
            className="w-full 
            bg-gradient-to-r
            from-orange-500 
            to-red-500 
            text-white 
            py-2 
            rounded 
            hover:opacity-90"
          >
            Continue
          </button>

          <p className="text-center text-xs mt-4 text-gray-500">
            Forgot password?
          </p>
        </form>
        </div>
      </>
    
  );
}
