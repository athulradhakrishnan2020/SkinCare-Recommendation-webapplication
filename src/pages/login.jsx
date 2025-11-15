import {auth} from "../firebase";
import { signInAnonymously} from "firebase/auth";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Auth() {
    const [name, setName] = useState("Guest");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
        await signInAnonymously(auth,{name});
        navigate("/home");
        } catch (error) {
            console.error("Error during anonymous sign-in:", error);
        }
    };
    return(
        <div className="bg-custom h-screen flex items-center justify-center p-4">
            <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-xs">
                <h2 className="text-white text-4xl font-bold text-shadow-[2px_2px_4px_black] text-center">
                    Finding The Best Routine for Your Skin
                </h2>
                <input type="text" placeholder="Nickname" className="mt-10 w-full rounded-md border border-white/30 bg-white/20 p-3 text-white placeholder-white/80 outline-none backdrop-blur-lg transition-colors duration-200 focus:border-white focus:bg-white/30" onChange={(e) => setName(e.target.value)}/>
                <button className="mt-10 text-white w-full rounded-md border border-white/30 bg-white/20 p-3 placeholder-white/80 outline-none backdrop-blur-lg transition-colors duration-200 focus:border-white focus:bg-white/30" onClick={handleLogin}>
                Continue as {name}
                </button>

            </div>
        </div>
    )
}

export default Auth;