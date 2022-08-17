module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "tailwindcss/nesting": "postcss-nesting",
    "postcss-import": {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
};
