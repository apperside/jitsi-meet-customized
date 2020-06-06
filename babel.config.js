module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@ui": "./myapp/ui",
          "@hooks": "./myapp/hooks",
          "@screen": "./myapp/screens",
          "@models": "./myapp/models",
          "@api": "./myapp/api",
          "@redux": "./myapp/redux",
          "@utils": "./myapp/utils"
        },
      },
    ],
  ],
};
