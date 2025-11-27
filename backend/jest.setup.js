const { connect, close, clear } = require("./src/__tests__/setup/mongoMemoryServer");

beforeAll(async () => {
  await connect();
});

afterEach(async () => {
  await clear();
});

afterAll(async () => {
  await close();
});
