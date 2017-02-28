module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            linkColorDark: "#107491",
            linkColorLight: "#55c0ee",
            linkColor: "#448fc1",
            textColorLT: "#000000",
            textColorDT: "#dedede",
            bgLT: "#FFFFFF",
            bgDT: "#383838"
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
