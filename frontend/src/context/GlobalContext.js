// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// const BASE_URL = "https://moneymate-cu8b.onrender.com/api/v1/";




// const GlobalContext = React.createContext();


// export const GlobalProvider = ({ children }) => {
//     const [incomes, setIncomes] = useState([]);
//     const [expenses, setExpenses] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [history, setHistory] = useState([]);
//     const [error, setError] = useState(null);


//     const addIncome = async (income) => {
//         const response = await axios.post(`${BASE_URL}add-income`, income)
//         .catch((err) =>{
//             setError(err.response.data.message)
//          })
//       getIncomes()  
//     }

//     // const getIncomes = async () => {
//     //     const response = await axios.get(`${BASE_URL}get-incomes`)
//     //     setIncomes(response.data)
//     //     console.log(response.data)
//     // }
//     const getIncomes = async () => {
//     try {
//         const response = await axios.get(`${BASE_URL}get-incomes`);
//         setIncomes(response.data);
//         console.log(response.data);
//     } catch (err) {
//         console.error("Error fetching incomes:", err);
//         setError("Failed to load incomes");
//     }
// };
//     const deleteIncome = async (id) => {
//         const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
//         getIncomes()
//     }

//     const totalIncome = () => {
//         let totalIncome = 0;
//         incomes.forEach((income) =>{
//             totalIncome = totalIncome + income.amount
//         })

//         return totalIncome;
//     }
    

//     const addExpense = async (income) => {
//         const response = await axios.post(`${BASE_URL}add-expense`, income)
//             .catch((err) =>{
//                 setError(err.response.data.message)
//             })
//         getExpenses()
//     }

//     const getExpenses = async () => {
//         const response = await axios.get(`${BASE_URL}get-expenses`)
//         setExpenses(response.data)
//         console.log(response.data)
//     }

//     const deleteExpense = async (id) => {
//         const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
//         getExpenses()
//     }

//     const totalExpenses = () => {
//         let totalIncome = 0;
//         expenses.forEach((income) =>{
//             totalIncome = totalIncome + income.amount
//         })

//         return totalIncome;
//     }
//     const totalBalance = () => {
//         return totalIncome() - totalExpenses()
//     }

//     const transactionHistory = () => {
//         const history = [...incomes, ...expenses]
//         history.sort((a, b) => {
//             return new Date(b.createdAt) - new Date(a.createdAt)
//         })

//         return history.slice(0, 3)
//     }
   
//     const sendMessage = async (text) => {
//         // Avoid sending an empty message
//         if (text.trim() === '') return;
    
//         // Create a user message
//         const userMessage = { role: 'user', text };
    
//         // Update state to show the user message
//         setMessages((prevMessages) => [...prevMessages, userMessage]);
    
//         try {
//             // Send message to backend
//             const response = await axios.post(`${BASE_URL}chat`, { message: text });
            
//             // Add response message from AI to the state
//             const aiMessage = { role: 'ai', text: response.data.response };
//             setMessages((prevMessages) => [...prevMessages, aiMessage]);
    
//         } catch (error) {
//             setError('Error sending message');
//         }
//     };
    
//     const getFullHistory = () => {
//         const history = [...incomes, ...expenses];
//         history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//         return history.map(item => ({
//             ...item,
//             title: item.title || (item.type === 'income' ? 'Income' : 'Expense'),
//             amount: item.amount || 0,
//             category: item.category || 'Uncategorized',
//             description: item.description || 'No description'
//         }));
//     };
    
    

//     return (
//         <GlobalContext.Provider value={{
//             addIncome,
//             getIncomes,
//             incomes,
//             expenses,
//             deleteIncome,
//             totalIncome,
//             addExpense,
//             getExpenses,
//             totalExpenses,
//             deleteExpense,
//             totalBalance,
//             transactionHistory,
//             messages,
//             sendMessage,
//             history,
//             setHistory,
//             getFullHistory,
//             error,
//             setError,
//         }}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }
// export const useGlobalContext = () => {
//     return useContext(GlobalContext);
// };
import React, { useState, useContext } from 'react';
import axios from 'axios';
const BASE_URL = "https://moneymate-cu8b.onrender.com/api/v1/";




const GlobalContext = React.createContext();


export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [messages, setMessages] = useState([]);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState(null);


   
    const addIncome = async (income) => {
        try {
            await axios.post(`${BASE_URL}add-income`, income);
            getIncomes();
        } catch (err) {
            setError(err?.response?.data?.message || "Error adding income");
        }
    };

    // const getIncomes = async () => {
    //     const response = await axios.get(`${BASE_URL}get-incomes`)
    //     setIncomes(response.data)
    //     console.log(response.data)
    // }
    const getIncomes = async () => {
    try {
        const response = await axios.get(`${BASE_URL}get-incomes`);
        setIncomes(response.data);
        console.log(response.data);
    } catch (err) {
        console.error("Error fetching incomes:", err);
        setError("Failed to load incomes");
    }
};
 const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-income/${id}`);
            getIncomes();
        } catch (err) {
            console.error("Error deleting income:", err);
        }
    };

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }
    

     const addExpense = async (expense) => {
        try {
            await axios.post(`${BASE_URL}add-expense`, expense);
            getExpenses();
        } catch (err) {
            setError(err?.response?.data?.message || "Error adding expense");
        }
    };

        const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-expenses`);
            setExpenses(response.data);
            console.log(response.data);
        } catch (err) {
            console.error("Error fetching expenses:", err);
            setError("Failed to load expenses");
        }
    };


 
    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-expense/${id}`);
            getExpenses();
        } catch (err) {
            console.error("Error deleting expense:", err);
        }
    };

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }
   
    const sendMessage = async (text) => {
        // Avoid sending an empty message
        if (text.trim() === '') return;
    
        // Create a user message
        const userMessage = { role: 'user', text };
    
        // Update state to show the user message
        setMessages((prevMessages) => [...prevMessages, userMessage]);
    
        try {
            // Send message to backend
            const response = await axios.post(`${BASE_URL}chat`, { message: text });
            
            // Add response message from AI to the state
            const aiMessage = { role: 'ai', text: response.data.response };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
    
        } catch (error) {
            setError('Error sending message');
        }
    };
    
    const getFullHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.map(item => ({
            ...item,
            title: item.title || (item.type === 'income' ? 'Income' : 'Expense'),
            amount: item.amount || 0,
            category: item.category || 'Uncategorized',
            description: item.description || 'No description'
        }));
    };
    
    

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            expenses,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            totalExpenses,
            deleteExpense,
            totalBalance,
            transactionHistory,
            messages,
            sendMessage,
            history,
            setHistory,
            getFullHistory,
            error,
            setError,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

