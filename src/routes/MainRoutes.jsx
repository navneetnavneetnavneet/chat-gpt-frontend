import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadUser } from "../store/actions/userActions";
import { asyncFetchAllChat } from "../store/actions/chatActions";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncFetchAllChat());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <h1 className="text-center pt-10 opacity-60 text-xl">Loading . . .</h1>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
