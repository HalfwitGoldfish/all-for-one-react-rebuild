import { Link } from 'react-router-dom';
import { useState } from "react";
import { madLibFetch } from "../services/services";

const MadLib = () =>
{
    const [animalInput, setAnimalInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [foodInput, setFoodInput] = useState("");
    const [toyInput, setToyInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    const [animal2Input, setAnimal2Input] = useState("");
    const [name2Input, setName2Input] = useState("");
    const [food2Input, setFood2Input] = useState("");
    const [toy2Input, setToy2Input] = useState("");
    const [age2Input, setAge2Input] = useState("");
    const [boxText, setBoxText] = useState("");
    const [condition, setCondition] = useState(true);

    const SolutionButton = async () =>
    {
        setCondition( false );
        setBoxText( await madLibFetch( animalInput, nameInput, foodInput, toyInput, ageInput, animal2Input, name2Input, food2Input, toy2Input, age2Input ) );
    }

    return (
        <div className="bg-[url('/src/assets/Mars.jpg')] bg-no-repeat bg-cover m-0">
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
                        <h1>Mad Lib</h1>
                    </div>
                </div>

                <div className="row-start-3 flex justify-center">
                    <div className={`text-white bg-black/60 w-[400px] h-[148px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white m-0 overflow-y-auto ${condition ? "hidden" : ""}`}>
                        <div className="font-bold text-[20px] text-center mt-[15px]">
                            <p className="m-[10px]">{boxText}</p>
                        </div>
                    </div>
                </div>

                <div className="row-start-5">
                    <div className="text-white flex justify-center mb-[4px] max-[905px]:grid">
                        <button onClick={SolutionButton} className="w-[170px] h-[70px] bg-black/60 rounded-[5px] border shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white font-bold text-[48px] flex justify-center m-0 hover:bg-white/10 hover:cursor-pointer">
                            <p>Press!</p>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-white grid justify-evenly gap-[5px] overflow-y-auto h-[220px] w-[300px]">
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Animal"
                                type="text"
                                onChange={ (event) => setAnimalInput(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Name"
                                type="text"
                                onChange={ (event) => setNameInput(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Food"
                                type="text"
                                onChange={ (event) => setFoodInput(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Toy"
                                type="text"
                                onChange={ (event) => setToyInput(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Age"
                                type="text"
                                onChange={ (event) => setAgeInput(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Second Animal"
                                type="text"
                                onChange={ (event) => setAnimal2Input(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Second Name"
                                type="text"
                                onChange={ (event) => setName2Input(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Second Food"
                                type="text"
                                onChange={ (event) => setFood2Input(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Second Toy"
                                type="text"
                                onChange={ (event) => setToy2Input(event.target.value) }
                            />
                            <input
                                className="w-[277px] h-[70px] placeholder:font-bold text-center bg-black/60 border rounded-[5px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white text-[20px]"
                                placeholder="Input Second Age"
                                type="text"
                                onChange={ (event) => setAge2Input(event.target.value) }
                            />
                        </div>
                    </div>
                </div>

                <div className="row-start-9">
                    <div className="text-white text-[40px] font-bold min-[905px]:ml-[120px] flex justify-start opacity-[80%] max-[905px]:flex max-[905px]:justify-center">
                        <h2>Mars</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MadLib;