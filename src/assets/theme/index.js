const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a"
  },
  size: 12 / 14 / 16 / 18 / 21 / 22,
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover{box-shadow: 0 1px 1px 1px rgba(221,221,221,.6)};
    `
  }
}

export default theme
