const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    position: "relative",
    top: "12%",
    margin: "auto",
    maxWidth: "25em",
    padding: "3em"
  },
  wrap: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#EEEEEE",
    textAlign: "center"
  },
  headline: {
    textAlign: "center",
    fontWeight: "bold"
  },
  logo: {
    position: "absolute",
    top: "-40px",
    right: "210px",
    height: "5em"
  },
  par: {
    padding: "1em 0"
  },
  subPaper: {
    backgroundColor: "#F4F4F4",
    padding: "15px 0"
  },
  icon: {
    color: theme.palette.secondary.main
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    color: "white",
    fontWeight: "bold"
  },
  help: {
    marginTop: theme.spacing.unit * 3
  },
  footer: {
    display: "block",
    position: "absolute",
    width: "100%",
    height: "6em",
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
  },
  footerText: {
    color: "#EEEEEE",
    position: "relative",
    top: "20px"
  },
  footerLogo: {
    position: "relative",
    top: "1em",
    height: "1.5em",

  }

});


export default styles;
