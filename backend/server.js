import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js'

import dotenv from 'dotenv';
import connectDB from './config/db.js'

import {notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config()

connectDB()

const app = express();

app.use('/api/products',productRoutes)
 app.use(notFound)
 app.use(errorHandler)
app.listen(procss.env.REACT_APP_PORT,console.log(`Server is running in ${process.env.REACT_APP_NODE_ENV}mode on port ${process.env.REACT_APP_NODE_APP}`))