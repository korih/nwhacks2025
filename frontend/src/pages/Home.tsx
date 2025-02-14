import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [request, setRequest] = useState('')

  const examplePopup = () => {
    alert("button clicked!")
  }

  const handleSendMessage = () => {
    navigate("/chat")
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && request.length > 0) {
      handleSendMessage();
    }
  }

  return (
    <div>
      <Header />
      <section className="h-full w-full fixed top-32">
        <div className="flex justify-center flex-col items-center mt-48">
          <h2 className="text-5xl text-[#010000]">What can I help you with?</h2>
          <div className="w-[100%] flex justify-center">
            <input 
              type="text" 
              className="break-words whitespace-normal bg-[#949392] px-5 w-[50%] h-10 rounded-3xl flex justify-center mt-8" 
              onKeyDown={handleKeyDown}
              onChange={(e) => setRequest(e.target.value)}
            />
          </div>
          <div className="bg-[#c9c8c7] w-[60%] h-32 flex items-center justify-center flex-col mt-5 rounded-lg pb-2">
            <p className="text-[#949392] font-semibold italic">Get started with some examples below</p>
            <div className="flex gap-16 mx-10 mt-2">
              <div 
                className="flex shadow-black outline-black border-2 p-2 rounded-lg border-[#66615e] h-20 w-52 cursor-pointer"
                onClick={examplePopup}
              >
                <p className="text-[#66615e] font-semibold">When is Math 100 final this term?</p>
              </div>
              <div 
                className="flex shadow-black outline-black border-2 p-2 rounded-lg border-[#66615e] h-20 w-52 cursor-pointer"
                onClick={examplePopup}
              >
                <p className="text-[#66615e] font-semibold">Use r/Explainlikefive the Theory of Relativity</p>
              </div>
              <div 
                className="flex shadow-black outline-black border-2 p-2 rounded-lg border-[#66615e] h-20 w-52 cursor-pointer"
                onClick={examplePopup}
              >
                <p className="text-[#66615e] font-semibold">Tips on doing Webwork A2Q5?</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
