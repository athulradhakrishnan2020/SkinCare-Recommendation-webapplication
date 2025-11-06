
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectionBox from "../components/selection-box";
import Navbar from "../components/Navbar";
import Button from "../components/button";

function RoutinePage() {

    const [selectedProblems, setSelectedProblems] = useState([]);
    const [selectedSkinType, setSelectedSkinType] = useState("");
    const navigate = useNavigate();

    //toggle handler for skin problems
    const toggleProblems = (title) => {
        setSelectedProblems((prev) =>
            prev.includes(title)
                ? prev.filter((item) => item !== title)
                : [...prev, title]
        );
    };

    // toggle handler for skin problems

    const toggleSkinType = (title) => {
        setSelectedSkinType(title);

    };

    const handleSubmit = () => {
        console.log('selected problems :', selectedProblems);
        console.log('selected skin type :', selectedSkinType);

        const skinTypeMap = {
            "Dry": "type01",
            "Normal": "type02",
            "Oily": "type03",
            "Combination": "type04",
            "Sensitive": "type05",
        };

        const skinTypeId = skinTypeMap[selectedSkinType];

        navigate("/result",
            {
                state: {
                    selectedProblems: selectedProblems,
                    selectedSkinType: selectedSkinType,
                },
            });

    };

    return (

        <>
    <Navbar />
    <div className="routine-page">
        <h1 className="text-5xl font-bold mb-4 text-white mt-10">Skin Problems</h1>
        <div className="flex flex-wrap justify-center gap-4">
        {[
            { title: "Acne", desc: "Clogged pores, excess oil, and bacteria" },
            { title: "Dryness", desc: "Lack of moisture, harsh cleansers, cold weather" },
            { title: "Dark Spots / Hyper pigmentation", desc: "Sun exposure, acne scars, hormonal changes" },
            { title: "Oily Skin", desc: "Excess sebum production" },
            { title: "Wrinkles / Aging", desc: "Loss of collagen, sun damage, dehydration" },
            { title: "Redness / Sensitivity", desc: "Irritants, allergens, environmental factors" },
            { title: "Dullness", desc: "Dead skin buildup, dehydration, lack of exfoliation" },
            { title: "Uneven Texture", desc: "Rough patches, enlarged pores, acne scars" },
        ].map((item) => (
            <SelectionBox
            key={item.title}
            title={item.title}
            description={item.desc}
            selected={selectedProblems.includes(item.title)}
            onToggle={() => toggleProblems(item.title)}
            />
        ))}
        </div>

        <h1 className="text-5xl font-bold mb-4 text-white mt-10">Skin Type</h1>
        <div className="flex flex-wrap justify-center gap-4">
        {[
            { title: "Normal", desc: "Balanced, not too oily or dry" },
            { title: "Dry", desc: "Lacks moisture, may feel tight or rough" },
            { title: "Oily", desc: "Shiny, prone to acne and enlarged pores" },
            { title: "Combination", desc: "Oily in some areas, dry in others" },
            { title: "Sensitive", desc: "Prone to redness, irritation, and allergic reactions" },
        ].map((item) => (
            <SelectionBox
            key={item.title}
            title={item.title}
            description={item.desc}
            selected={selectedSkinType === (item.title)}
            onToggle={() => toggleSkinType(item.title)}
            />
        ))}
        </div>

        <div className="mt-10">
        <Button title="Submit" onClick={handleSubmit} />
        </div>
    </div>
    </>
        
    );
}

export default RoutinePage;