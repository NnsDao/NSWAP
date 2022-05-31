import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import { Avatar, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import style from './index.module.css';
export default function Manager() {
  const data = [1, 2, 3];
  const tokenData = [1, 2, 3];
  const [index, setIndex] = useState(0);
  const Left = () => {
    const left = ['Lists', 'Token'];
    return (
      <div className="flex justify-center items-center mb-40">
        {left.map((item, i) => (
          <Button key={item} onClick={() => setIndex(i)}>
            <div className={`${style.menuBox} ${index === i ? style.selectedBox : ''} `}>{item}</div>
          </Button>
        ))}
      </div>
    );
  };
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
    <div className="w-463 h-780 px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll relative">
      <div className="flex justify-between items-center pb-30">
        <div>
          <KeyboardArrowLeftIcon
            className="cursor-pointer"
            sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>
        </div>
        <div className="text-22 text-white leading-26  font-bold bg-secondary">Import Token</div>
        <div>
          <CloseSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
        </div>
      </div>
      <Left />
      {index === 0 ? (
        <div className="pb-30 relative bg-secondary rounded-8">
          <input
            type="text"
            placeholder="http:// or ipfs:// or ENS name"
            className="text-18 leading-22 px-20 py-20 w-full rounded-8  bg-lowColor "
          />
          <div className=" absolute right-25 top-19">
            <ManageSearchSharpIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 26 }}></ManageSearchSharpIcon>
          </div>
        </div>
      ) : null}
      {index === 0 ? (
        <div>
          {data.map(item => (
            <div
              key={item}
              className="w-full rounded-8 bg-lowColor pt-10 pr-0 pb-14 pl-10 flex justify-between items-center mb-14">
              <div className=" flex justify-between items-center">
                <div className="pr-14">
                  <Avatar alt="Remy Sharp" src="" />
                </div>
                <div>
                  <div className="text-18 text-white leading-22">Gemini Token list</div>
                  <div className=" text-17 text-gray-400 leading-17">21 Tokens …</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <FormControlLabel control={<Android12Switch defaultChecked />} label={undefined} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {index === 1 ? (
        <div className="pb-30 relative bg-secondary rounded-8">
          <input
            type="text"
            placeholder="0x000"
            className="text-18 leading-22 px-20 py-20 w-full rounded-8  bg-lowColor "
          />
          <div className=" absolute right-25 top-19">
            <ManageSearchSharpIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 26 }}></ManageSearchSharpIcon>
          </div>
        </div>
      ) : null}
      {index === 1 ? (
        <div>
          <div className="flex justify-between items-center pb-14 text-14">
            <div>{tokenData.length} Custom Token</div>
            <div className="gradientText cursor-pointer">Clear All </div>
          </div>
          <div>
            {tokenData.map(item => (
              <div
                key={item}
                className="w-full rounded-8 bg-lowColor py-16 pl-10 pr-20 flex justify-between items-center mb-14">
                <div className=" flex justify-between items-center">
                  <div className="pr-14">
                    <Avatar alt="Remy Sharp" src="" />
                  </div>
                  <div className="text-18 text-white leading-22">BNB</div>
                </div>
                <div className="flex justify-end items-center">
                  <DeleteSweepIcon className="cursor-pointer mr-14"></DeleteSweepIcon>
                  <DeleteSweepIcon className="cursor-pointer"></DeleteSweepIcon>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className=" mx-auto absolute  bottom-30 left-90  flex justify-center items-center cursor-pointer ">
        <span className="text-gray-400 text-18 text-center">
          {' '}
          Tip:Custom tokens are stored Iocally in <br /> your browser
        </span>
      </div>
    </div>
  );
}
