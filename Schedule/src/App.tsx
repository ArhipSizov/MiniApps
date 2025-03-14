import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Error from "./Pages/Error/Error";
import Main from "./Pages/Main/Main";
import Real from "./Pages/Real/Real";
import Nav from "./Components/Nav/Nav";
import Admin from "./Pages/Admin/Admin";
import Policy from "./Pages/Policy/Policy";
import FullName from "./Pages/FullName/FullName";
import Creators from "./Pages/Creators/Creators";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="all">
      <Nav/>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/real" element={<Real />} />
        <Route path="/full_name" element={<FullName />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/admin6283isd7f3w9j8s3j" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
