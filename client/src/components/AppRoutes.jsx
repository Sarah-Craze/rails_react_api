import React from "react";
import { Routes, Route } from "react-router-dom";
import Postslist from "../features/posts/Postslist";
import Postdetails from "../features/posts/Postdetails";
import NewPostForm from "../features/posts/NewPostForm";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Postslist />} />
            <Route path="/new" element={<NewPostForm/>} /> {/* Corrected closing tag */}
            <Route path="posts/:id" element={<Postdetails />} />
            {/* Placeholder route for future expansion */}
            {/* <Route path="/other" element={<OtherComponent />} /> */}
        </Routes>
    );
}

export default AppRoutes;

