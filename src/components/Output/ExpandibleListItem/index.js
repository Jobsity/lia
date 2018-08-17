import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";

function ExpandibleListItem({render, mainText, icon, trigger, toggleFunction, contentComponent}) {
  return (
    (render)
      ? (
        <React.Fragment>
          <ListItem button onClick={toggleFunction}>
            <ListItemIcon>
              <FontAwesomeIcon icon={icon} />
            </ListItemIcon>
            <ListItemText inset primary={mainText} />
            {trigger ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
          </ListItem>
          <Collapse in={trigger} timeout="auto" unmountOnExit>
            {contentComponent}
          </Collapse>
        </React.Fragment>
      ) 
      : null
  );
}

export default ExpandibleListItem;