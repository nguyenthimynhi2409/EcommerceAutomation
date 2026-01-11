export const createUser = () => {
  const timestamp = Date.now();

  return {
    name: `User${timestamp}`,
    email: `user${timestamp}@testmail.com`,
    password: "Test@12345",
  };
};
