import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<h2>Not Found !</h2>} />
      </Routes>
    </>
  );
}

export default App;
