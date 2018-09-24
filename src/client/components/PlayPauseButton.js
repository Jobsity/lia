import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default props => (
  <IconButton
    onClick={props.onClick}
  >
    <FontAwesomeIcon
      icon={props.isPlaying ? faPause : faPlay}
    />
  </IconButton>
);
