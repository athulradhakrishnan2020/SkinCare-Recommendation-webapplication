import { useNavigate} from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();

    return(
        <div className="navbar fixed left-0 right-0 top-0 w-full z-50 shadow-lg">
            <h1 className="text-[30px] ml-4">Lucinox,</h1>
            <ul>
                <li onClick={() => navigate("/home")} className="navbar-heads text-slate-700">Home</li>
                <li onClick={() => navigate("/products")} className="navbar-heads text-slate-700">Products</li>
                <li onClick={() => navigate("/about")} className="navbar-heads text-slate-700">About us</li>
                <li onClick={() => navigate("/feedback")} className="navbar-heads text-slate-700">Feedback</li>
            </ul>
            <button onClick={() => navigate("/Routine-page")} className= "Btn-common text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4">
                Find Routine
            </button>
        </div>


    )
}

export default Navbar;