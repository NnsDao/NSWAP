import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Avatar, Button } from '@mui/material';
import React from 'react';
import style from './index.module.css';

export default function Asset() {
  return (
    <div className="w-463 mx-auto pt-15">
      <div>
        <div className={`${style.colorCyan} text-center text-34 font-34 font-bold `}>ELLAsset</div>
        <div className="pt-38 pb-42 text-24 text-center font-bold ">Connect to ELLAsset!</div>
      </div>
      <div className="bg-secondary w-463 pt-26 pr-24 pb-23 pl-26 rounded-8">
        <div className="flex justify-between items-center pb-30">
          <div className="flex items-center">
            <KeyboardArrowLeftIcon
              className="cursor-pointer hover:scale-110 mr-25"
              sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>

            <div className="flex">
              <div>
                <Avatar></Avatar>
              </div>
              <div className="ml-14">
                <div className="flex items-center">
                  <div className="text-18 tetx-white mr-16 ">Floyd Miles</div>
                  <div>
                    <KeyboardArrowDownIcon
                      className="cursor-pointer"
                      sx={{ color: '#fff', fontSize: 18 }}></KeyboardArrowDownIcon>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-700 rounded-4 mr-8"> </div>
                  <div className="text-gray-400">via Kleros Tokens</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <CloseSharpIcon
              className="cursor-pointer hover:scale-110"
              sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
          </div>
        </div>
        {/* <div>
          <div className="pt-27 pb-27 text-18 text-white">
            <div>Allow https://app.devaswap.org to spend</div>
            <div>your Devaswap V2?</div>
          </div>
          <div className="text-16 text-gray-400">
            <div>Do you trust this site? By granting this permission,</div>
            <div>you’re allowing Https://app.devaswap.org to </div>
            <div>withdraw your Devaswap V2 and automate </div>
            <div>transactions for you.</div>
          </div>
          <div className={`pt-8 pb-30 text-16 font-bold `}>
            <span className="gradientText"> Edit Permission</span>
          </div>
          <div className="flex justify-between items-center text-16 text-white pb-20">
            <div className="text-gray-400">Transaction Fee</div>
            <Button>
              <span className="gradientText cursor-pointer font-bold"> Edit</span>
            </Button>
          </div>
          <div className="flex justify-between items-center text-16 text-white pb-8">
            <div className="text-gray-400">A fee is associated</div>
            <div>$6.27</div>
          </div>
          <div className="flex justify-end items-center text-16 text-white pb-8">
            <div>0.002873 ICP</div>
          </div>
          <div className="text-center text-16 font-bold py-30">
            <Button>
              <span className="gradientText">View Full Transaciton Details</span>
            </Button>
          </div>
          <div className="rounded-27  text-white text-18 leading-22 flex justify-center items-center ">
            <Button className="mr-69">
              <div className="gradientText rounded-40 cursor-pointer px-58 py-14 font-bold">Reject</div>
            </Button>
            <div className="w-69 h-1"></div>
            <Button>
              <div className="cursor-pointer rounded-40 text-white font-bold bg-main-btn px-58 py-14">Confirm</div>
            </Button>
          </div>
        </div> */}
        {
          <div className="text-18 text-white">
            <div className="">Signature Request</div>
            <div className="flex justify-between pt-26 pb-40">
              <div className="mr-30 flex flex-nowrap  truncate">Jersey Pinkman</div>
              <div className="text-gray-400">
                <div> https://app.devaswap.org</div>
                <div>0xBBB6…Ae96e</div>
              </div>
            </div>
            <div className="pb-26">Message</div>
            <div className="flex justify-between items-center pb-10">
              <div className="text-gray-400">Owner</div>
              <div>0xBBB6…A3445e96e</div>
            </div>
            <div className="flex justify-between items-center pb-10">
              <div className="text-gray-400">Spender</div>
              <div>0xBBB6…A3445e96e</div>
            </div>
            <div className="flex justify-between items-center pb-10">
              <div className="text-gray-400">Value</div>
              <div>4452353</div>
            </div>
            <div className="flex justify-between items-center pb-10">
              <div className="text-gray-400">Nonce</div>
              <div>#12</div>
            </div>
            <div className="flex justify-between items-center pb-50">
              <div className="text-gray-400">Deadline</div>
              <div>17199888876</div>
            </div>
            <div className="rounded-27  text-white text-18 leading-22 flex justify-center items-center ">
              <Button className="mr-69">
                <div className="gradientText rounded-40 cursor-pointer px-58 py-14 font-bold">Cancel</div>
              </Button>
              <div className="w-69 h-1"></div>
              <Button>
                <div className="cursor-pointer rounded-40 text-white font-bold bg-main-btn px-75 py-14">Sign</div>
              </Button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
