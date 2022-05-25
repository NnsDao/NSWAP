import { Alert, Backdrop, Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useBoolean } from 'usehooks-ts';
import { useGlobalState } from '../hooks/globalState';

export default function Demo() {
  const { value, toggle } = useBoolean(false);
  const [{ count }, dispatch] = useGlobalState();
  console.log('render demo');
  return (
    <>
      <Button onClick={toggle}>MUI button</Button>

      <h3 className="bg-main-btn">Demo</h3>
      <Alert severity="success">successfully done</Alert>
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={value} onClick={toggle}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <p>count:{count}</p>
      <Button onClick={() => dispatch({ type: 'x', value: true })}>Login</Button>
      <Button onClick={() => dispatch({ type: 'x', value: false })}>Logout</Button>
      <Demo2></Demo2>
    </>
  );
}

export const Demo2 = () => {
  const [{ count }, dispatch] = useGlobalState();
  console.log('render Demo2 ');
  return (
    <>
      <p> demo2 {count}</p>
    </>
  );
};
