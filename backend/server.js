import express from 'express';

import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import orderRoute from './routes/orderRoute.js';
import uploadRoute from './routes/uploadRoute.js';

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
// app.use(express.static(path.join(__dirname, '/../frontend/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});


// app.post("/product/filter",(req,res)=>{
//     let id=req.body.id
//     console.log(id),
//     process.exit()
//     let const_fnd = data.products.find(id===_id);
//     if (const_fnd) {
//         res.status(200).json({const_fnd}) 
//     }
//     else{
//         res.status(404).json({message:'Not found'})
//     }
// })

