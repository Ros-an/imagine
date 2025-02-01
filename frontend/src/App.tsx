import { Route, Routes } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { PATHS } from "./constant";

function App() {
  return (
    <div>
      <Routes>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.result} element={<Result />} />
        <Route path={PATHS.buyCredit} element={<BuyCredit />} />
      </Routes>
    </div>
  );
}

export default App;
