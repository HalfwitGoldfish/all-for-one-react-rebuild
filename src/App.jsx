import { Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

const App = () =>
{
    const [closedCondition, setClosedCondition] = useState(true);
    const [openCondition, setOpenCondition] = useState(false);

    const openButton = async () =>
    {
        setClosedCondition( false );
        setOpenCondition( true );
    }

    const closeButton = async () =>
    {
        setClosedCondition( true );
        setOpenCondition( false );
    }

  return (
    <div className="h-[100vh] bg-[url('/public/assets/SolarSystem.jpg')] bg-no-repeat bg-cover m-0 max-[720px]:bg-center">
      <div className="grid">
        <div className="flex min-[720px]:row-start-1">

            <div className={`min-[721px]:contents ${openCondition ? "" : "hidden"}`}>
                <div className="bg-white/10 w-[297px] rounded-r-[7px] flex flex-col justify-evenly h-[100vh]">
                    <div>
                        <Link to="/Adding2Numbers">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Mercury:</p>
                                    <p>Adding 2 Numbers</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/AskingQuestions">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Venus:</p>
                                    <p>Asking Questions</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/GreaterOrLess">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Earth:</p>
                                    <p>Greater or Less</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/MadLib">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Mars:</p>
                                    <p>Mad Lib</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/Magic8Ball">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Jupiter:</p>
                                    <p>Magic 8 Ball</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/OddOrEven">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Europa:</p>
                                    <p>Odd or Even</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/RestaurantPicker">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Saturn:</p>
                                    <p>Restaurant Picker</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/ReverseItAlphanumeric">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Titan:</p>
                                    <p>Reverse It Alphanumeric</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/ReverseItNumeric">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Uranus:</p>
                                    <p>Reverse It Numeric</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            
                    <div>
                        <Link to="/SayHello">
                            <button className="text-white bg-black/40 w-[277px] h-[68px] max-[720px]:h-[65px] border rounded-[5px] ml-[10px] shadow-[0px_0px_0.2em_0px_rgba(0,0,0)] shadow-white hover:bg-white/10 hover:cursor-pointer">
                                <div className="ml-[17px] font-bold text-[20px] max-[720px]:text-[16px] leading-[28px] max-[720px]:leading-[25px] text-left">
                                    <p>Neptune:</p>
                                    <p>Say Hello</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-evenly min-[720px]:hidden">
                <div className={`flex flex-col justify-center ${openCondition ? "" : "hidden"}`}>
                    <button onClick={closeButton} className="bg-white/10 w-[40px] h-[50px] rounded-r-[7px] flex justify-evenly flex-col -row-start-1 font-bold text-[24px] text-white text-center cursor-pointer">
                        <p className="mb-[3px] w-[40px]">&lt;</p>
                    </button>
                </div>
            </div>
        </div>

        <div className="min-[720px]:hidden row-start-1 col-start-1">
            <div className={`flex flex-col justify-center h-[100vh] ${closedCondition ? "" : "hidden"}`}>
                <button onClick={openButton} className="bg-white/10 w-[40px] h-[50px] rounded-r-[7px] flex justify-evenly flex-col -row-start-1 font-bold text-[24px] text-white text-center cursor-pointer">
                    <p className="mb-[3px] w-[40px]">&gt;</p>
                </button>
            </div>
        </div>
    
        <div className={`text-white flex justify-end row-start-1 text-[64px] font-bold mt-[40px] mr-[55px] max-[720px]:text-[40px] ${closedCondition ? "" : "max-[720px]:hidden"}`}>
            <h1>All For One</h1>
        </div>
      </div>
    </div>
  )
}

export default App;