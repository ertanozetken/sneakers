const express = require('express')
const app = express();
const port = 3000
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const authRoute = require('./routes/auth')

const userRoute = require('./routes/user')
const cartRoute = require('./routes/cart')
const productRoute = require('./routes/products')
const orderRoute = require('./routes/orders')


dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() =>console.log("Db Connected (Database Bağlandı")).catch((err)=>console.log(err))

//app.get('/', (req, res) => res.send('Hello Flutter Lovers!'))
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb',extended:true}));

app.use('/api/',authRoute);
app.use('/api/users',userRoute);
app.use('/api/cart',cartRoute);
app.use('/api/products',productRoute);
app.use('/api/orders',orderRoute);



app.listen(process.env.PORT||port, () => console.log(`Example app listening on port ${process.env.PORT}!`))