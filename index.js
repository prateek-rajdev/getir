const app = require('./app');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";


async function connectMongoose() {
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('mongoose connected'));
}

async function initialLoad() {
    await connectMongoose();
}
initialLoad();
