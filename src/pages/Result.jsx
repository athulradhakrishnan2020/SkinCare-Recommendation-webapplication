
import { db } from "../firebase";
import { useEffect,useState } from "react";
import { getDoc,doc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

function Result() {
    const [SkinType, setSkinType] = useState([]);
    const location = useLocation();
    const { selectedProblems, selectedSkinType } = location.state || {}; 

    useEffect(() =>{
        const getSkinType = async () => {
            try {
                

            } catch (error) {
                console.log(error);
            }
        };
        getSkinType();

    }, [skinTypeId]);
    return (

        <div className="result-page">
            
        
            <div>
                <h1 className="head-result mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-200 md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Your's personalized </span>skincare routine</h1>
            </div>
            <div className="bg-white w-full h-fit rounded-lg p-6 mt-6 shadow-lg backdrop-blur-xl">

                <h1 className="text-5xl font-bold mb-4 text-gray-700 mt-10">{SkinType.title01}</h1>
                <h4>{SkinType.product}</h4>
                
                
            </div>
            
        </div>
    );
}

export default Result;