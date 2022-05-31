import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import React from 'react';

export default function SearchInput(props: any) {
  return (
    <div className="pb-30 relative bg-secondary rounded-8">
      <input
        type="text"
        placeholder="Search name or paste address"
        className="text-18 leading-22 px-20 py-20 w-full rounded-8  bg-lowColor "
      />
      <div className=" absolute right-25 top-19">
        <ManageSearchSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 26 }}></ManageSearchSharpIcon>
      </div>
    </div>
  );
}
