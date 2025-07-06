import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/GlobalContext';
import ReactMarkdown from 'react-markdown';
import { send ,plus} from '../../utils/Icons';

const Chat = () => {
    const { messages, sendMessage, transactionHistory } = useGlobalContext();
    const [newMessage, setNewMessage] = useState('');
    const [historyMessages, setHistoryMessages] = useState([]);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Send the new message
            sendMessage(newMessage);
            // Clear the input field
            setNewMessage('');
        }
    };

    const handleAddHistory = () => {
        const history = transactionHistory().map(item => ({
            role: 'ai',
            text: `### ${item.title}\n**Amount:** ${item.amount}\n**Category:** ${item.category}\n**Description:** ${item.description}`
        }));
        setHistoryMessages(history);
    };

    return (
        <ChatStyled>
            <div className="messages">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.role}`}>
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                    ))
                ) : (
                    <div className="message">No messages yet</div>
                )}
                {historyMessages.length > 0 && (
                    <>
                        {historyMessages.map((msg, index) => (
                            <div key={`history-${index}`} className={`message ${msg.role}`}>
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="input-container">
                <button onClick={handleAddHistory}>{plus} Add History</button>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>{send} Send</button>
            </div>
        </ChatStyled>
    );
};

const ChatStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    .messages {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
        .message {
            margin: 0.5rem 0;
            padding: 0.5rem 1rem;
            border-radius: 15px;
            &.user {
                align-self: flex-end;
                background-color: #daf8e3;
            }
            &.ai {
                align-self: flex-start;
                background-color: #e3e3e3;
            }
        }
    }
    .input-container {
        display: flex;
        padding: 1rem;
        background: #f0f0f0;
        input {
            flex: 1;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 15px;
            margin-right: 0.5rem;
        }
        button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 15px;
            background-color: #5a67d8;
            color: #fff;
            cursor: pointer;
            &:hover {
                background-color: #434190;
            }
            &:first-of-type {
                margin-right: 0.5rem;
            }
        }
    }
`;

export default Chat;




