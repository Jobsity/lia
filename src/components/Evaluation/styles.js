const styles = theme => ({
  title: {
    textAlign: "center"
  },

  selector: {
    display: "grid",
    gridTemplateColumns: "1fr 144px 1fr"
  },
  leftLabel: {
    textAlign: "right",
    padding: "15px 0"
  },
  rightLabel: {
    textAlign: "left",
    padding: "15px 0"
  },
  buttonArea: {
    display: "flex"
  },
  button: {
    flex: "1"
  },
  progress: {
    position: "absolute",
    left: "43%",
    top: "-0.5em",
    fontSize: "0.7em",
    fontWeight: "bold"
  }
});

export default styles;
