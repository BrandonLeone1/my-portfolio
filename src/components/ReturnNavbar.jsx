import { useNavigate } from "react-router"

export default function ReturnNavbar () {
    const navigate = useNavigate();
    
    return (
        <>
            <header>
                <nav>
                    <p onClick={() => {
                       
                        navigate("/#projects-section")
                        history.replaceState(null,null, ' ')
                    }
                        } className="text-xl mb-12 text-neutral-400 hover:opacity-80 font-medium duration-150 underline cursor-pointer">Back to projects</p>
                </nav>
            </header>
        </>
    )
}