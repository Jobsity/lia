const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: "-webkit-fill-available"
  },
  loading: {
    position: "relative",
    top: "0.5em",
    left: "25em"
  }
});

export default styles;
