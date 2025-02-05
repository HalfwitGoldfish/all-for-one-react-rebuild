import { Link } from 'react-router-dom';
import { useState } from "react";
import { sayHelloFetch } from "../services/services";

const SayHello = () =>
{
    const [nameInput, setNameInput] = useState("");
    const [boxText, setBoxText] = useState("");
    const [condition, setCondition] = useState(true);

    const SolutionButton = async () =>
    {
        if ( nameInput.length === 0 )
        {
            setCondition( true );
        }else
        {
            setCondition( false );
            setBoxText( await sayHelloFetch( nameInput ) );
        }
    }

    return (
        <div className="bg-[url('/src/assets/Neptune.jpg')] bg-no-repeat bg-cover m-0">
            <div className="h-[100vh] grid grid-rows-9">
                <div className="grid">
                    <div className="-row-start-1">
                        <Link to="/">
                            <button className="text-white mt-[32px] ml-[32px] bg-black/60 w-[119px] h-[70px] border font-bold text-[20px] rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer max-[720px]:w-[75px] max-[720px]:h-[50px]">
                                <p>Home</p>
                            </button>
                        </Link>
                    </div>
            
                    <div className="text-white flex justify-end text-[64px] font-bold mt-[45px] mr-[85px] text-right row-start-1 max-[720px]:text-[32px]">
                        <h1 className="text-white">Say Hello</h1>
                    </div>
                </div>

                <div className="row-start-5 flex justify-center max-[720px]:row-start-4">
                    <div className={`text-white bg-black/60 w-[277px] h-[68px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white m-0 overflow-y-auto ${condition ? "hidden" : ""}`}>
                        <div className="font-bold text-[20px] text-center mt-[15px]">
                            <p className="m-[10px]">{boxText}</p>
                        </div>
                    </div>
                </div>

                <div className="row-start-7">
                    <div className="text-white flex justify-center">
                        <input
                            className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                            placeholder="Input Name"
                            type="text"
                            onChange={ (event) => setNameInput(event.target.value) }
                        />
                    </div>
                    <div className="text-white flex justify-center mt-[5px]">
                        <button onClick={SolutionButton} className="w-[170px] h-[70px] bg-black/60 rounded-[5px] border shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white font-bold text-[48px] flex justify-center m-0 hover:bg-white/10 hover:cursor-pointer">
                            <p>Press!</p>
                        </button>
                    </div>
                </div>

                <div className="row-start-9">
                    <div className="text-white text-[40px] font-bold min-[720px]:ml-[120px] flex justify-start opacity-[80%] max-[720px]:flex max-[720px]:justify-center">
                        <h2>Neptune</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SayHello;