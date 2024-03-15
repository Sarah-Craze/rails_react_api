import React, { useState } from 'react';

export default function Register() {
    const [formData, setFormData] = useState({
        user: {
            email: '',
            password: '',
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-12'>
                    <div className='card bg-primary bg-opacity-75 text-white'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Sign up</h1>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>Email</label>
                                    <input type='email' onChange={handleChange} className='form-control' id='email' name='email' placeholder='Enter your email' required />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>Password</label>
                                    <input type='password' onChange={handleChange} className='form-control' id='password' name='password' placeholder='Enter your password' required />
                                </div>
                                <button type='submit' className='btn btn-light w-100'>Sign up</button>
                            </form>
                            <div className='mt-3 text-center'>
                                <p>Already have an account? <a href='/login'>Log in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}