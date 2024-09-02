module.exports = {
  extends: [
    "expo",
    "prettier",
    "plugin:@typescript-eslint/recommended", // Reglas recomendadas para TypeScript
    "plugin:react/recommended", // Reglas recomendadas para React
    "plugin:react-native/all", // Reglas recomendadas para React Native
  ],
  plugins: [
    "prettier",
    "@typescript-eslint", // Soporte para TypeScript
    "react", // Soporte para React
    "react-native", // Soporte para React Native
  ],
  parser: "@typescript-eslint/parser", // Define el parser para TypeScript
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off", // Desactiva la obligación de especificar los tipos de retorno en funciones
    "react/react-in-jsx-scope": "off", // Desactiva la obligación de importar React en cada archivo JSX
    "react/prop-types": "off", // Desactiva la obligación de usar prop-types ya que usas TypeScript
  },
  settings: {
    react: {
      version: "detect", // Detecta automáticamente la versión de React para usar las reglas correspondientes
    },
  },
};
