import * as http from "http";
import { app } from "../src/app"

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`O servidor está conectado na porta: ${port}`);
});
