import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import React from 'react';

export default function ImportInput(props: any) {
  return (
    <div className="flex justify-center items-center rounded-8 px-1 py-1 bg-main-grounding mb-30">
      <div className="w-full bg-secondary relative  rounded-8">
        <div className=" bg-lowColor py-8 pl-20  rounded-8">
          <div className="w-200">
            <div className="text-sm leading-17 pb-8 text-gray-400">Search name or paste address</div>
            <input type="text" placeholder="" className="text-18 leading-22  w-90  bg-lowColor " />
          </div>
          <div className=" absolute right-25 top-19">
            <ManageSearchSharpIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 26 }}></ManageSearchSharpIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
