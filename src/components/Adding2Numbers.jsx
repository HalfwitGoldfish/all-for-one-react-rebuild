import { Link } from 'react-router-dom';
import { useState } from "react";
import { adding2NumsFetch } from "../services/services";

const Adding2Numbers = () =>
{
    const [num1Input, setNum1Input] = useState("");
    const [num2Input, setNum2Input] = useState("");
    const [boxText, setBoxText] = useState("");
    const [condition, setCondition] = useState(true);

    const SolutionButton = async () =>
    {
        setCondition( false );
        setBoxText( await adding2NumsFetch( num1Input, num2Input ) );
    }

    return (
        <div className="bg-[url('/src/assets/Mercury.jpg')] bg-no-repeat bg-cover m-0">
            <div className="h-[100vh] grid grid-rows-9">
                <div className="grid">
                    <div className="-row-start-1">
                        <Link to="/">
                            <button className="text-white mt-[32px] ml-[32px] bg-black/60 w-[119px] h-[70px] border font-bold text-[20px] rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer max-[905px]:w-[75px] max-[905px]:h-[50px]">
                                <p>Home</p>
                            </button>
                        </Link>
                    </div>
            
                    <div className="text-white flex justify-end text-[64px] font-bold mt-[45px] mr-[85px] text-right row-start-1 max-[905px]:text-[32px]">
                        <h1>Adding Two<br/>Numbers</h1>
                    </div>
                </div>

                <div className="row-start-5 flex justify-center max-[905px]:row-start-4">
                    <div className={`text-white bg-black/60 w-[277px] h-[98px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white m-0 overflow-y-auto ${condition ? "hidden" : ""}`}>
                        <div className="font-bold text-[20px] text-center mt-[15px]">
                            <p className="m-[10px]">{boxText}</p>
                        </div>
                    </div>
                </div>

                <div className="row-start-7 max-[560px]:row-start-6">
                    <div className="text-white flex justify-center max-[905px]:grid">
                        <div className="flex justify-center max-[905px]:row-start-2 max-[905px]:col-start-1">
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input First Number"
                                type="text"
                                onChange={ (event) => setNum1Input(event.target.value) }
                            />
                        </div>
                        <div className="max-[905px]:col-start-2 max-[560px]:col-start-1 max-[905px]:row-start-1">
                            <button onClick={SolutionButton} className="w-[170px] h-[70px] bg-black/60 rounded-[5px] border shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white font-bold text-[48px] flex justify-center m-0 hover:bg-white/10 hover:cursor-pointer ml-[80px] mr-[80px]">
                                <p>Press!</p>
                            </button>
                        </div>
                        <div className="flex justify-center max-[905]:row-start-2 max-[905px]:col-start-1">
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Second Number"
                                type="text"
                                onChange={ (event) => setNum2Input(event.target.value) }
                            />
                        </div>
                    </div>
                </div>

                <div className="row-start-9">
                    <div className="text-white text-[40px] font-bold min-[905px]:ml-[120px] flex justify-start opacity-[80%] max-[905px]:flex max-[905px]:justify-center">
                        <h2>Mercury</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adding2Numbers;