import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  paper: {
    backgroundColor: theme.palette.secondary.main
  },
  fullWidth: {
    width: '100%'
  },
  borderBottom: {
    borderBottom: '2px solid ' + theme.palette.primary.white
  }
});

const SessionControls = (props) => {
  const { classes, buttons, listItems, listLabel, onListItem } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.borderBottom}>
        {buttons.map(({ text, handler }) => (
          <Button key={text} children={text} onClick={handler} />
        ))}
      </div>
      <div>
        <ExpansionPanel className={classes.paper}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography children={listLabel} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List component="div" className={classes.fullWidth}>
              {listItems.map((item) => (
                <ListItem key={item} button divider>
                  <Typography children={item} onClick={onListItem} />
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Paper>
  );
};

SessionControls.propTypes = {
  listLabel: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onListItem: PropTypes.func,
  listItems: PropTypes.arrayOf(PropTypes.string),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      handler: PropTypes.func
    })
  )
};

export default withStyles(styles)(SessionControls);
