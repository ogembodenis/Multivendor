const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")
const logger = require("morgan");
// app.use(cors())

// app.use(cors({
  // origin: 'http://localhost:3000',
  // origin: 'http://localhost:3002',
  // origin: 'https://dev1418.dyx5onyra3kmc.amplifyapp.com',
  // origin: 'https://dom-shop-frontend.vercel.app/',
  // origin: 'https://dev.d2hcfczghr77rw.amplifyapp.com/',
  // credentials: true
// }));

const corsOptions = {
  // origin: 'https://dom-shop-frontend.vercel.app',
  origin: ['http://localhost:5173','http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
};

app.use(cors(corsOptions));
app.use(logger("dev")); 
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname,"./uploads")))
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");
const lipaNaMpesaRoutes = require('./routes/lipanampesa.js');
const contactus = require('./controller/contact.js');

app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);
app.use('/api/v2/mpesa', lipaNaMpesaRoutes);
app.use('/api/v2/contact', contactus)

// it's for ErrorHandling
// app.use(ErrorHandler);

module.exports = app;
