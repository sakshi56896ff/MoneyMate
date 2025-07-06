import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from "../img/introdu.jpg"

const IntroductionPage = () => {
    const navigate = useNavigate(); 
    return (
      <IntroductionStyled>
          <div className="intro-container">
              <h1>Welcome to MONEYMATE!</h1>
              <p>
                  Managing your finances has never been this easy. Whether you're budgeting for the month, tracking 
                  your daily expenses, or planning for future goals, our Expense Tracker has you covered.
              </p>
              <ul>
                  <li>Seamless Tracking: Keep an eye on your spending with just a few clicks.</li>
                  <li>Personalized Insights: Get AI-driven insights tailored to your financial habits.</li>
                  <li>Simple: the user-friendly interface makes managing your finances a breeze.</li>
              </ul>
              <p>Ready to take control of your finances?</p>
              <div className="buttons">
                  <button onClick={() => navigate('/login')}>Login</button>
                  <button onClick={() => navigate('/register')}>Register</button>
              </div>
          </div>
      </IntroductionStyled>
  );
};

const IntroductionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat center center/cover;

  .intro-container {
    background-color: rgba(0, 0, 0, 0.5); /* Darker background for better text contrast */
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 60px 80px;
    text-align: center;
    max-width: 600px; /* Limit the width to make it look more focused */
  }

  h1 {
    color: #f8f9fa; /* Light color for good contrast */
    margin-bottom: 20px;
    font-size: 42px; /* Slightly larger for better readability */
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7); /* More prominent shadow */
    font-family: 'Montserrat', sans-serif; /* Clean, modern font */
  }

  p {
    color: #d1d1d1; /* Soft light gray */
    font-size: 20px; /* Slightly larger for readability */
    margin-bottom: 30px;
    line-height: 1.6;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  ul {
    list-style-type: none; /* Remove bullet points */
    padding: 0;
    margin-bottom: 30px;
    li {
      color: #d1d1d1;
      font-size: 18px;
      margin-bottom: 10px;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
      padding-left: 20px;
      position: relative;

      &:before {
        content: '✔'; /* Custom bullet */
        position: absolute;
        left: 0;
        color: #f8f9fa;
        font-size: 20px;
      }
    }
  }

  button {
    width: 150px;
    padding: 15px;
    margin: 10px;
    background-color: #f8f9fa; /* Light background */
    color: #333;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); /* More prominent shadow */
  }

  button:hover {
    background-color: #ffdd57; /* A vibrant yellow to complement the purple background */
    color: #333;
  }
`;


   

export default IntroductionPage;

