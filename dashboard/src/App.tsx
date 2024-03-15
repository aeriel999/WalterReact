import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/auth/login";
import SignUp from "./pages/auth/registre";
import NotFound from "./pages/NotFound/index";
import { useTypedSelector } from "./hooks/useTypedSelector";
import DashboardLayout from "./container/dashboardLayout";
import DefaultPage from "./pages/defaultPage";
import GetAllUsers from "./pages/users/allUsers";
import AddNewUser from "./pages/users/addNewUser";
import UserDetails from "./pages/users/userDetail";
import Profile from "./pages/profile";
import Delete from "./pages/users/deleteUser";

function App() {
    const { isAuth, user } = useTypedSelector((store) => store.UserReducer);
    return (
        <Routes>
            {isAuth && (
                <>
                    (user.role === "Administrator" && (
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index element={<DefaultPage />} />
                        <Route
                            path="/dashboard/users"
                            element={<GetAllUsers />}
                        ></Route>
                        <Route
                            path="/dashboard/addUser"
                            element={<AddNewUser />}
                        ></Route>
                        <Route
                            path="/dashboard/userDetails"
                            element={<UserDetails />}
                        ></Route>
                        <Route
                            path="/dashboard/profile"
                            element={<Profile />}
                        ></Route>
                        <Route
                            path="/dashboard/deleteUser"
                            element={<Delete />}
                        ></Route>
                    </Route>
                    )) (user.role === "User" && (
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index element={<DefaultPage />} />
                        <Route
                            path="/dashboard/users"
                            element={<GetAllUsers />}
                        ></Route>
                        <Route
                            path="/dashboard/profile"
                            element={<Profile />}
                        ></Route>
                    </Route>
                    ))
                </>
            )}
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
