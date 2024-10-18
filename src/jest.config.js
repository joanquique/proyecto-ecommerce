module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest', // Usa Babel para transformar archivos JS
    },
    verbose: true,
    transformIgnorePatterns: [
      '/node_modules/', // Asegúrate de ignorar node_modules por defecto
    ],
  };
  