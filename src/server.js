import express from 'express'
import dotenv from 'dotenv'
import { initDB } from './config/db.js'
import cors from 'cors'
import rateLimiter from './middleware/rateLimiter.js'
import transactionsRoute from './routes/transactionsRoute.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(rateLimiter)
app.use(express.json())
const PORT = process.env.PORT || 5001
// app.use((req, res, next) => {
//     next()
// })
//
app.use('/api/transactions', transactionsRoute)
// app.get('/', (req, res) => res.send('server is live'))
initDB().then(() => {
    app.listen(PORT, () => {
        console.log('server is up and running on PORT', PORT)
    })
})
    
// import express from 'express'
// import dotenv from 'dotenv'
// import { initDB } from './config/db.js'
//     dotenv.config()
//     const app = express()
// // await connectDB()
// app.use(express.json())
// app.get('/', (req, res) => res.send('server is live'))

// const PORT = process.env.PORT || 5001
// // app.listen(PORT, () => {
// //     console.log(`server is running on port ${PORT}`)
// // })
// initDB().then(() => {
//     app.listen(PORT, () => {
//         console.log('server is up and running on PORT', PORT)
//     })
// })






// const express = require('express');
// const cors = require('cors');
// const app = express();

// const allowedOrigins = [
//     'https://mernappecommerce-dashboard-app-eight.vercel.app'
// ];

// app.use(cors({
//     origin: function (origin, callback) {
//         // Allow requests with no origin (like mobile apps or curl)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     },
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }));

// // CRITICAL: Handle preflight requests globally
// app.options('*', cors());

// export const io = new Server(server, {
//     cors: { origin: '*' }
// })