// const express = require('express')
// const cors = require('cors');
// const {db} = require('./db/db');
// const { route } = require('./routes/transaction');
// const {readdirSync} = require('fs')
// const app = express()

// require('dotenv').config()

// app.use(express.json())
// app.use(cors())

// app.get('/',(req,res)=> {
//   res.send('hello sakshi')
// })


// const PORT = process.env.PORT || 3000;  // Default to port 3000 if PORT is not set
// console.log('PORT:', PORT);

// readdirSync('./routes').map((route) =>{
//   app.use('/api/v1',require('./routes/'+route))
// }
// )
// const server = () => {
//   db();
//   app.listen(PORT, () => {
//     console.log('listening to port:',PORT)
//   });
// };

// server()

// const express = require('express');
// const cors = require('cors');
// const { db } = require('./db/db'); // Ensure this is correctly configured
// const { readdirSync } = require('fs');
// require('dotenv').config(); // Load environment variables

// const app = express();

// app.use(express.json()); // Middleware to parse JSON bodies
// app.use(cors()); // Middleware for Cross-Origin Resource Sharing

// // Root route for testing
// app.get('/', (req, res) => {
//     res.send('hello sakshi');
// });

// // Dynamically include routes from the 'routes' directory
// readdirSync('./routes').map((route) => {
//     if (route.endsWith('.js')) {
//         console.log(`Including route: /api/v1/${route}`);
//         app.use('/api/v1', require('./routes/' + route)); // Prefix all routes with /api/v1
//     }
// });

// const PORT = process.env.PORT || 3000; // Use PORT from environment variables or default to 3000
// console.log('PORT:', PORT);

// // Start server and connect to database
// const server = () => {
//     db(); // Connect to the database (if used)
//     app.listen(PORT, () => {
//         console.log('listening to port:', PORT);
//     });
// };

// server();

require('dotenv').config(); // This line should be at the top
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello sakshi');
});

// Include routes
readdirSync('./routes').map((route) => {
    if (route.endsWith('.js')) {
        app.use('/api/v1', require('./routes/' + route));
    }
});

const PORT = process.env.PORT || 5000;

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log(`listening to port: ${PORT}`);
    });
};

server();




