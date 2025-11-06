
import { db } from "../firebase";
import { useEffect,useState } from "react";
import { getDoc,doc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

function Result() {
    const [skinType, setSkinType] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedProblems, selectedSkinType } = location.state || {};

    useEffect(() => {
        const getSkinType = async () => {
            try {
                if (!selectedSkinType) {
                    setLoading(false);
                    return;
                }

                const docId = selectedSkinType === "Dry" ? "type01"
                    : selectedSkinType === "Normal" ? "type02"
                        : selectedSkinType === "Oily" ? "type03"
                            : selectedSkinType === "Combination" ? "type04"
                                : selectedSkinType === "Sensitive" ? "type05"
                                    : null;

                if (!docId) {
                    setLoading(false);
                    return;
                }

                const docRef = doc(db, "SkinType", docId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("SkinType :", docSnap.data());
                    setSkinType(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getSkinType();
    }, [selectedSkinType]);

    return (
        <div className="result-page">
            {loading ? (
                <p>Loading...</p>
            ) : selectedSkinType && skinType ? (
                <>
                    <div>
                        <h1 className="head-result mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-200 md:text-5xl lg:text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Your personalized </span>skincare routine
                        </h1>
                    </div>
                    <div className="bg-white w-full h-fit rounded-lg p-6 mt-6 shadow-lg backdrop-blur-xl">
                        <h1 className="text-5xl font-bold mb-4 text-gray-700 mt-10">{skinType.title}</h1>
                        <h4>{skinType.product}</h4>
                    </div>
                    <div className="bg-white w-full h-fit rounded-lg p-6 mt-6 shadow-lg backdrop-blur-xl">
                        <h1>Problems:</h1>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold text-red-500 mt-10">No skin type selected.</h2>
                    <Button title={"Back to Select"} onClick={() => navigate("/Routine-page")}></Button>
                </>
            )}
            
        </div>
    );
}

export default Result;