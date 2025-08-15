import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard"); // redirect after success
    } catch (err) {
      console.error("Sign-in failed", err);
    }
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center ">
      <div className="contentBox flex flex-col lg:gap-8 items-center justify-center">
        <div className="signIn relative flex flex-col md:gap-2 justify-center items-center">
          <div className="absolute w-52 h-52 bg-pink-500 rounded-full blur-3xl opacity-40 translate-x-30 -z-50"></div>

          <h1 className="text-2xl md:text-4xl font-bold p-3 bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">Sign in to Memento</h1>
          <button
            onClick={handleSignIn}
            className="w-fit h-fit backdrop-blur-md bg-white/5 border border-white/30 text-pink-600 font-medium text-[14px] lg:text-xl px-6 py-2 rounded-md  hover:bg-neutral-50/20 hover:border-pink-200 transition-all flex align-middle justify-center z-10 shadow-md shadow-pink-100 cursor-pointer"
          >
            Continue with Google
          </button>
        </div>
        <div className="features grid grid-cols-3 max-md:grid-cols-1 gap-6 px-8 mt-8">
          <div className="card bg-white rounded-2xl shadow-lg p-6 flex flex-col md:gap-3 hover:shadow-xl transition-shadow shadow-pink-100">
            <div className="w-12 h-12 max-sm:text-[14px] max-sm:w-fit max-sm:h-fit max-sm:p-1 max-sm:mb-3 text-xl flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-pink-400 text-white shadow-lg shadow-pink-300">
              ✏️
            </div>
            <p className="text-lg font-semibold max-sm:text-[16px]">Your life, beautifully archived</p>
            <p className="text-gray-500 text-sm max-sm:text-[14px]">Upload moments and keep them safe forever.</p>
          </div>

          <div className="card bg-white rounded-2xl shadow-lg p-6 flex flex-col md:gap-3 hover:shadow-xl transition-shadow shadow-pink-100">
            <div className="w-12 h-12 pb-1.5 max-sm:text-[14px] max-sm:w-fit max-sm:h-fit max-sm:p-1 max-sm:mb-3 text-xl flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-pink-400 text-white shadow-lg shadow-pink-300">
              📷
            </div>
            <p className="text-lg font-semibold max-sm:text-[16px]">Capture and relive memories</p>
            <p className="text-gray-500 text-sm max-sm:text-[14px]">Store your favorite photos and videos securely.</p>
          </div>

          <div className="card bg-white rounded-2xl shadow-lg p-6 flex flex-col md:gap-3 hover:shadow-xl transition-shadow shadow-pink-100">
            <div className="w-12 h-12 max-sm:text-[14px] max-sm:w-fit max-sm:h-fit max-sm:p-1 max-sm:mb-3 text-xl flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-pink-400 text-white shadow-lg shadow-pink-300">
              ⏳
            </div>
            <p className="text-lg font-semibold max-sm:text-[16px]">Timeless preservation</p>
            <p className="text-gray-500 text-sm max-sm:text-[14px]">Keep your life story safe for future generations.</p>
          </div>
        </div>

      </div>
    </main>
  );
}
