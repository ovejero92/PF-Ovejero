import { create, router as _router, defaults } from 'json-server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = create();
const router = _router(join(__dirname, 'db.json'));
const middlewares = defaults();
const port = process.env.PORT || 3000;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server corriendo en puerto ${port}`);
});