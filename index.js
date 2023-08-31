const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 

// Creat an Exprss applictin
const app = express();
const port = process.env.PORT || 3000;


// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/tech', {


// Connect to MongoDB Atlas (replace with your Atlas connection string)
mongoose.connect('mongodb+srv://admin:anamika_1234@cluster0.lvywqj9.mongodb.net/invicious?retryWrites=true&w=majority', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Check MongoDB connection sts
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Defining schema for email subscriptis
const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

// Creating model for email subscriptions
const Subscription = mongoose.model('Subscription', subscriptionSchema);

//  bodyParser middleware to parse JSON
app.use(bodyParser.json());

// Configure CORS middleware
// app.use(cors());

// Configure CORS middleware
const corsOptions = {
  origin: ['http://35.200.213.112', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://35.200.213.112:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));



// API route creatn to handle email subscripti.
 app.post('/Subscribe', async (req, res) => {

  // app.post('http://35.200.213.112:3000/Subscribe', async (req, res) => {
  

  const { email } = req.body;

  try {
    // Check email already exists or not
    const existingSubscription = await Subscription.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    //  new subscripton entry creatn
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.status(201).json({ message: 'Email subscribed successfully' });
    
  // } catch (error) {
  //   console.error('Error subscribing email:', error);
  //   res.status(500).json({ message: 'Failed to subscribe email' });
  // }

} catch (error) {
  console.error('Error subscribing email:', error);
  if (error.response) {
    console.log('Axios Response:', error.response);
  }
  alert('Failed to subscribe email');
}




});

// Start Exprss server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
