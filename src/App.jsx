import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;