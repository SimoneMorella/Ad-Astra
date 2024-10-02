import { useNavigate } from "react-router-dom"
export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="px-6 font-montserrat mt-32 space-y-8">
            <div className="text-white space-y-1">
                <h1 className="font-nasa font-bold text-3xl">
                    AD ASTRA
                </h1>
                <p className="font-thin text-gray-200">
                    Your Gateway to Rocket Launch Updates
                </p>
            </div>
            <button 
                className="text-white py-3 px-6 font-nasa border-2 border-white rounded-sm home-btn"
                onClick={() => navigate("/launches")}>
                EXPLORE
            </button>

        </div>
    )
}