import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button, Input } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import React from 'react';
import style from './index.module.css';

export default function Setting() {
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  return (
    <div className={style.wrapper}>
      <div className={style.settingTitle}>Transaction Settings</div>
      <div className={style.toleranceWrapper}>
        <div className={'mr-10'}>Slippage Tolerance</div>
        <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A6', fontSize: 14 }}></HelpOutlineIcon>
      </div>
      <div className={style.buttonWrapper}>
        <Button>
          <div className={style.buttonItem}>0.1%</div>
        </Button>
        <Button>
          <div className={style.buttonItem}> 0.5%</div>
        </Button>
        <Button>
          <div className={style.buttonItem}> 1%</div>
        </Button>
        <div className="bg-main-btn p-1 flex justify-center items-center rounded-8">
          <div className="bg-secondaryGrey rounded-8 text-white">
            <Input placeholder="1.00%" className="text-white"></Input>
          </div>
        </div>
      </div>
      <div className={style.dealineWrapper}>
        <div className={'mr-10'}>Transaction Dealine</div>
        <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A6', fontSize: 14 }}></HelpOutlineIcon>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-main-btn p-1 flex justify-center items-center rounded-8">
          <div className="bg-secondaryGrey rounded-8 text-white">
            <Input placeholder="1.00%" className="text-white w-108"></Input>
          </div>
        </div>
        <div className={'ml-11'}>minutes</div>
      </div>
      <div className={style.Interface}>Interface Setting</div>
      <div className={style.ToggleWrapper}>
        <div className={style.ExpertWrapper}>
          <div className={`${style.Expert} mr-10`}>Toggle Expert Mode</div>
          <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A6', fontSize: 14 }}></HelpOutlineIcon>
        </div>
        <FormControlLabel control={<Android12Switch defaultChecked />} label={undefined} />
      </div>
      <div className={style.DisableWrapper}>
        <div className={style.Multihopswrapper}>
          <div className={`${style.Disable} mr-10`}>Disable Multihops</div>
          <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A6', fontSize: 14 }}></HelpOutlineIcon>
        </div>
        <FormControlLabel control={<Android12Switch defaultChecked />} label={undefined} />
      </div>
    </div>
  );
}
