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
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    display: 'grid',
    gridTemplateColumns: '1fr 192px'
  },
});

export default styles;
