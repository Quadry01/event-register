import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Form from "./Components/Form/Form";
import Thankyou from "./Components/Thankyou/Thankyou";
import Attendance from "./Components/Attendance/Attendance";
import { useState } from "react";
import { myContext } from "./Context";
import Eventpage from "./Components/Eventpage/Eventpage";
import { logRegister1 } from "./Data";
import { Events1 } from "./Data";

function App() {
  const [partyName, setPartyName] = useState("");

  return (
    <div className="App">
      <>
        <myContext.Provider
          value={{
            logRegister1,
            Events1,
            partyName,
            setPartyName,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Thankyou" element={<Thankyou />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Eventpage" element={<Eventpage />} />
          </Routes>
        </myContext.Provider>
      </>
    </div>
  );
}

export default App;
