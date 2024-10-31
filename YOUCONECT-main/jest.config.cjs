// jest.config.js
module.exports = {
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom', // Isso ajuda a resolver o problema do 'document is not defined'
  };
  