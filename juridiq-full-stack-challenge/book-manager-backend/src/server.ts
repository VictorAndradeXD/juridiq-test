import { createServer } from './app';

const startServer = async () => {
  const server = createServer();

  try {
    await server.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();