import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
  container: {
    height: '100%',
    whiteSpace: 'pre-line',
  },
  passedList: {
    color: '#00FF00',
  },
  failedList: {
    color: '#FF0000',
  },
  error: {
    color: '#FF4800',
  },
  noTestsResults: {
    margin: '1rem'
  },
  typography: {
    margin: '1rem',
  },
  progress: {
    margin: '1rem',
  },
  success: {
    margin: '2rem',
    color: '#00FF00',
    textAlign: 'center',
  },
  successText: {
    margin: '1rem',
    color: 'inherit',
  },
  expandedContent: {
    marginLeft: '2rem',
  }
});

class ExpandableListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  toggleOpen() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  render() {
    const {
      render,
      mainText,
      icon,
      componentClass,
      children,
      classes,
    } = this.props;
    const { open } = this.state; 
    return (
      (render)
        ? (
          <React.Fragment>
            <ListItem button onClick={() => this.toggleOpen()} className={componentClass}>
              <ListItemIcon>
                <FontAwesomeIcon icon={icon} className={componentClass}/>
              </ListItemIcon>
              {open ? <FontAwesomeIcon icon={faAngleUp} className={componentClass}/> : <FontAwesomeIcon icon={faAngleDown} className={componentClass}/>}
              <ListItemText inset primary={mainText}/>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit className={classes.expandedContent}>
              {children}
            </Collapse>
          </React.Fragment>
        ) 
        : null
    );
  }
}

ExpandableListItem.propTypes = {
  render: PropTypes.bool.isRequired,
  mainText: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object),
  componentClass: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

ExpandableListItem.defaultProps = {
  icon: {},
};
export default withStyles(styles)(ExpandableListItem);