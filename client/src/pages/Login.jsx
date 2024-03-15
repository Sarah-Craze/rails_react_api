import React, { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users/sign_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: formData }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Failed to login:', error.message);
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-12'>
                    <div className='card bg-primary bg-opacity-75 text-white'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter your email'
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder='Enter your password'
                                        required
                                    />
                                </div>
                                <div className='mb-3 form-check'>
                                    <input type='checkbox' className='form-check-input' id='rememberMe' />
                                    <label className='form-check-label' htmlFor='rememberMe'>Remember me</label>
                                    <a href='/password/reset' className='float-end text-white'>Forgot Password?</a>
                                </div>
                                <button type='submit' className='btn btn-light w-100'>Login</button>
                            </form>
                            <div className='mt-3 text-center'>
                                <p>Don't have an account? <a href='/register'>Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}