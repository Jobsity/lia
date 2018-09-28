import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogComponentFromMaterial from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';

const Dialog = ({ title, content, actions, onCancel, ...rest }) => {
  const buttonsFromActions = actions.map((action) => (
    <Button
      onClick={action.handler}
      children={action.text}
      color={action.color || 'primary'}
    />
  ));

  return (
    <DialogComponentFromMaterial open {...rest}>
      <DialogTitle children={title} />
      <DialogContent>
        <DialogContentText children={content} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}> Cancel </Button>
        {buttonsFromActions}
      </DialogActions>
    </DialogComponentFromMaterial>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      handler: PropTypes.func,
      color: PropTypes.string
    })
  ),
  onRefuse: PropTypes.func
};

export default Dialog;
