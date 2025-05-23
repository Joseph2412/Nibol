import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

export default function LoginPage() {
    const router = useRouter();
    
        const handleFakeLogin = (e) => {
            e.preventDefault();
            router.push("/dashboard");
        }
    return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleFakeLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
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
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full 
            border 
            p-2 mb-4
             rounded"
            required
          />

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
