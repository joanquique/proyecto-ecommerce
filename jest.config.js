module.exports = {
    preset: 'react-native',
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    transformIgnorePatterns: [
      "/node_modules/(?!(axios)/)", // Ignora axios si es necesario
    ],
    setupFiles: ["<rootDir>/setupTests.js"], // Esto puede ser útil para configuraciones adicionales
  };
  