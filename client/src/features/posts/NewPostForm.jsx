import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function NewPostForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            title,
            body,
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData), // Fix: Remove extra object wrapper
            });
            if (response.ok) {
                const { id } = await response.json();
                navigate(`/posts/${id}`);
            } else {
                console.log("An error has occurred.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titleinput">Title:</label>
                    <input
                        type="text"
                        id="titleinput"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bodyinput">Body:</label>
                    <textarea
                        id="bodyinput"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <button type="submit">Create Post</button>
                </div>
            </form>
            <form>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go Back
                </button>
            </form>
        </div>
    );
}

export default NewPostForm;
