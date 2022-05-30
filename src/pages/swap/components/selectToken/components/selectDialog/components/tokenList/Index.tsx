import { Avatar } from '@mui/material';
import React from 'react';

type Prop = {
  data: any[];
};
export default function TokenList(props: Prop) {
  return (
    <div>
      {props.data.map(item => (
        <div
          key={item}
          className="bg-main-grounding mb-10 rounded-8 w-414 h-74 px-1 py-1 flex justify-center items-center text-18">
          <div className="w-full rounded-8 bg-lowColor  px-10 py-16 flex justify-between items-center">
            <div className=" flex justify-between items-center">
              <div className="pr-14">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div>1INCH TOKEN</div>
            </div>
            <div className="flex justify-between items-center">
              <div>10.059 &nbsp;</div>
              <div> TOKEN</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
