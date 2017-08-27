import * as express from 'express';
import * as mongoose from 'mongoose';
import { config } from './config/config';

require('./models/User');
require('./services/passport');

mongoose.connect(config.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

app.listen(config.PORT, () => {
    console.log(`server is listening at port ${config.PORT}`);
});