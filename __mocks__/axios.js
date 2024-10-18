const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    // Agrega otros métodos según sea necesario
  };
  
  export default mockAxios;
  