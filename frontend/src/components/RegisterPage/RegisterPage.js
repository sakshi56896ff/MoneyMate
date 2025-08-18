import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import backgroundImg from "../../img/photo1.jpg"

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/register', { name, email, password });
            if (response.data) {

              const userName = response.data.name;

                // Store the user's name in localStorage
                localStorage.setItem('userName', userName);
                navigate('/dashboard');
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <RegisterStyled>
            <div className="register-container">
                <h2>Register</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </RegisterStyled>
    );
};

const RegisterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
   background: url(${backgroundImg})no-repeat center center/cover;

  .register-container {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 40px 60px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  h2 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 28px;
  }

  input {
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    width: 100%;
    padding: 15px;
    background-color: #ffffff;
    color: #333;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #e0e0e0;
  }

  .error {
    color: red;
    margin-bottom: 10px;
  }
`;


export default RegisterPage;






