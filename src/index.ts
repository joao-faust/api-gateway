import app from './config/app.ts';
import { APP_PORT } from './config/env.ts';

app.listen(APP_PORT, () => {
  console.log(`The server is running on port: ${APP_PORT}.`);
});
