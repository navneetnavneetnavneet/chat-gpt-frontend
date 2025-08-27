import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadUser } from "../store/actions/userActions";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/login");
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
