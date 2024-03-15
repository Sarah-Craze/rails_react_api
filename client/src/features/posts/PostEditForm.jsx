import React, { useEffect, useState } from "react"; 
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants";

function EditPostForm() {
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setPost(json);
                    setTitle(json.title);
                    setBody(json.body);
                } else {
                    throw response;
                }
            } catch (error) {
                console.error("An error occurred:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body }),
            });
            if (response.ok) {
                navigate(`/posts/${id}`);
            } else {
                throw new Error('Failed to update post');
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setError(error.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!post) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="post-title">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="post-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="post-body">Body:</label>
                    <br />
                    <textarea
                        id="post-body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
}

export default EditPostForm;
