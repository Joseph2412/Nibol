import Head from "next/head";
import {useState} from "react";
import {useRouter} from "next/router";

export default function SignupPage() {
    //Creiamo le costanti da richiamare nel form
    //Tutte a stato VUOTO
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [acceptTerms, setAcceptTerms] = useState(false);
    //Tranne lei: Sarà un checkbox che a default e false.
    //L'utente deve accettare i termini, non tu.
    
    const [error, setError] = useState("");

    const handleSingup = (e) => {
        e.preventDefault();
        
        if(password.length < 6){
            setError("Impegnati Diamine!");
            return;
        }

        if(!acceptTerms){
            setError("You Must Accept Terms and Condition to Proceed.");
            return;
        }

        localStorage.setItem("email", email);
        localStorage.setItem("isLogged", "true");
        Router.push("/dashboard");
    };
    
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-xl font-semibold mb-2">Signup</h1>
          <p className="text-sm mb-4">
            Already registered? <a href="/login" className="text-orange-500">Login</a>
          </p>
          <form onSubmit={handleSingup}>
          <input
                type="text"
                placeholder="First Name"
                className="w-full border p-2 mb-4 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
          <input
                type="text"
                placeholder="Last Name"
                className="w-full border p-2 mb-4 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
          <input
                type="text"
                placeholder="Email"
                className="w-full border p-2 mb-4 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-4 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <div className="flex items-center mb-4">
            <input
                type="checkbox"
                className="mr-2"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <label className="text-sm">I Accept terms and conditions</label>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            </div>
            
            <button
            type="submit"
             className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded hover:opacity-90"
             >
                Create Account
            </button>
        </form>
        </div>
      </div>
    </>
  );
}
