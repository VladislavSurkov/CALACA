import Plug from "pages/Plug/Plug";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Plug />} />
        <Route path="*" element={<Plug />} />
      </Routes>
    </>
  );
};

export default App;
