import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import Postslist from "../features/posts/Postslist";
import Postdetails from "../features/posts/Postdetails";
import NewPostForm from "../features/posts/NewPostForm";
import PostEditForm from "../features/posts/PostEditForm.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {
    return (
        <>
            <Navbar /> {/* Render the Navbar component outside Routes */}
            <Routes>
                <Route path="/" element={<Postslist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/new" element={<NewPostForm/>} /> {/* Corrected closing tag */}
                <Route path="posts/:id" element={<Postdetails />} />
                <Route path="posts/:id/edit" element={<PostEditForm />} />
                {/* Placeholder route for future expansion */}
                {/* <Route path="/other" element={<OtherComponent />} /> */}
            </Routes>
        </>
    );
}

export default AppRoutes;