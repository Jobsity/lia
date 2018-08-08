module.exports = {
    "extends": [
      "airbnb",
      "prettier",
      "prettier/flowtype", // flow
      "prettier/react"
    ],
    "globals": {
      "document": true,
      "window": true,
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
    },
    "env": {
      "jest": true
  }
};
