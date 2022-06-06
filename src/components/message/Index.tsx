import { Alert, AlertTitle, Snackbar } from '@mui/material';
import React from 'react';

type Prop = {
  text: string;
  type: 'error' | 'warning' | 'info' | 'success';
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  close: any;
};

const Messgae = (props: Prop) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={props.isOpen}
      onClose={props.close}
      autoHideDuration={3000}>
      <Alert severity={`${props.type}`}>
        <AlertTitle>{props.type}</AlertTitle>
        <span className="text-center">{props.text}</span>
      </Alert>
    </Snackbar>
  );
};
export default Messgae;
