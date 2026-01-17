import app from './config/express';
import { APP_PORT } from './config/env';

app.listen(APP_PORT, () => {
  console.log(`The server is running on port: ${APP_PORT}.`);
});
