module.exports = {
    "extends": "airbnb",
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
