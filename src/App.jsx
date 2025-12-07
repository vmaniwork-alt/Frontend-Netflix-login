import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import bg from "./assets/netflix.jpg"

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [info, setInfo] = useState(false);
  const [passInfo, setPassInfo] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  const [passMsg, setPassMsg] = useState("");
  const navigate = useNavigate();



  const handleEmailChange = (e) => setUser(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);

  const check = (e) => {
    e.preventDefault();
    setInfo(false);
    setPassInfo(false);
    setEmailMsg("");
    setPassMsg("");

    if (!user.includes("@")) {
      setEmailMsg("Invalid email format");
      setInfo(true);
      return;
    }

    if (pass.length < 4 || pass.length > 60) {
      setPassMsg("Password must be 4-60 characters");
      setPassInfo(true);
      return;
    }

    axios
      .post("https://netflix-backend-lil7.onrender.com/login", { email: user.trim(), password: pass.trim() })
     .then((res) => {
  if (res.data.success) {
    setEmailMsg("");
    setPassMsg("");
    setInfo(false);
    setPassInfo(false);

    // ✅ CLEAR INPUT FIELDS
    setUser("");
    setPass("");

   navigate("/dashbored"); // or whatever route you defined for Dashbored

  } else {
    setEmailMsg(res.data.emailError || "");
    setPassMsg(res.data.passwordError || "");
    setInfo(!!res.data.emailError);
    setPassInfo(!!res.data.passwordError);
  }
})
.catch((err) => { console.log(err, "something went wrong"); 
  setEmailMsg("Something went wrong"); 
  setPassMsg("Something went wrong"); 
  setInfo(true); setPassInfo(true); }); 

  };






  return (

   <>
     {/* MAIN SECTION */}
      <div className="relative min-h-screen bg-black">
        {/* Background image */}
        <img
          src={bg}
          alt="netflix"
          className="absolute inset-0 w-full h-full object-cover brightness-50 hidden md:block"
        />

        {/* Content */}
        <div className="relative   bg-black/80 md:bg-transparent min-h-screen">
          <nav className="p-6">
            <h1 className="text-3xl md:text-5xl font-bold text-red-600">
              NETFLIX
            </h1>
          </nav>

          <div className="flex justify-center items-center px-1 md:px-4">
            <div className="bg-black/70 p-6 rounded-md w-full max-w-md">
              <form className="flex flex-col gap-4" onSubmit={check}>
                <h1 className="text-3xl font-bold text-white">Sign in</h1>

                <input
                  type="email"
                  value={user}
                  onChange={handleEmailChange}
                  placeholder="Mail or Mobile Number"
                  className="border border-gray-500 p-3 bg-transparent text-white rounded-md"
                />
                {info && <p className="text-red-500">{emailMsg}</p>}

                <input
                  type="password"
                  value={pass}
                  onChange={handlePassChange}
                  placeholder="Password"
                  className="border border-gray-500 p-3 bg-transparent text-white rounded-md"
                />
                {passInfo && <p className="text-red-500">{passMsg}</p>}

                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 rounded-md font-semibold"
                >
                  Sign in
                </button>

                <p className="text-center text-white">OR</p>

                <button
                  type="button"
                  className="bg-neutral-700 text-white py-2 rounded-md"
                >
                  Use a sign-in code
                </button>

                <p className="text-center underline text-white">
                  Forgot password?
                </p>
              </form>

              <div className="mt-4 text-gray-300 text-sm space-y-2">
                <label className="flex items-center gap-2">
                  <input
                   type="checkbox"
                  />
                 <span className='text-base font-medium'>Remember me</span> 
                </label>
                <p>
                  New to Netflix?{" "}
                  <span className="text-white font-semibold cursor-pointer">
                    Sign up now
                  </span>
                </p>
                <p className='text-sm text-neutral-500 font-semibold '>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p> 
                <p className='text-blue-500 underline'><a href='#'>learn more</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER ✅ */}
      <footer className="bg-[#191818]    py-10 space-y-5 p-2 md:px-36 ">
        <p className="text-white text-sm md:text-lg">
          Questions? Call 000-800-919-1743
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4  gap-3 text-gray-300 underline text-sm md:text-base">
          <a>FAQ</a>
          <a>Help Center</a>
          <a>Terms of Use</a>
          <a>Privacy</a>
          <a>Cookie Preferences</a>
          <a>Corporate Information</a>
        </div>

        <select className="bg-[#252424] text-white border md:px-2 md:py-1">
          <option>English</option>
        </select>
      </footer>
   </>


  )
}

export default App;
