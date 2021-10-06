import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
 
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URI,
  jwtSecret: "" + process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRESIN,
  

};

const whiteList = ["http://localhost:3000", "http://localhost:3001"];

export const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (origin === undefined || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Block.."));
    }
  },
  allowedHeaders: "Authorization, Set-Cookie, Content-Type",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};
