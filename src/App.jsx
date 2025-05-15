// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./store/counterSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Layout from "./containers/layout";
import Users from "./pages/users";
import SystemSettings from "./pages/systemSettings";

const App = () => {
  // const dispatch = useDispatch();
  // const { count } = useSelector((state) => state.counter);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/system-settings" element={<SystemSettings />} />
      </Route>
    </Routes>
  );
};

export default App;
