import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setPasswordError("");
    setTermsError("");

    let hasError = false;

    if (password === "") {
      setPasswordError("Password obbligatoria");
      toast.error("Inserisci una password.");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Impegnati diamine! Scrivi almeno 6 caratteri");
      toast.error("Password troppo corta!");
      hasError = true;
    }

    if (!acceptTerms) {
      setTermsError("You must accept Terms and Conditions to proceed.");
      toast.error("Accetta i termini per continuare.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    setTimeout(() => {
      login(email); 
      toast.success("Account creato con successo!");
      localStorage.setItem("email", email);
      localStorage.setItem("isLogged", "true");
      router.push("/dashboard");
    }, 1500);
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
            Already registered?{" "}
            <a href="/login" className="text-orange-500">Login</a>
          </p>
          <form onSubmit={handleSignup}>
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
            />
            {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}

            <div className="flex items-center mb-4">
              <input
                id="terms"
                type="checkbox"
                className="mr-2"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm">
                I Accept terms and conditions
              </label>
            </div>
            {termsError && <p className="text-red-500 text-sm mb-2">{termsError}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded hover:opacity-90"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
