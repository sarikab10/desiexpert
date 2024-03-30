import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Component/Loader/Loader";
import Home2 from "./Pages/Home/Home2";
import DemoForm from "./Pages/DemoForm/DemoForm";

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home2/>}></Route>
        <Route path="/demoform" element={<DemoForm/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
