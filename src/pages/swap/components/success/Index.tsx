import SuccessImg from '@/static/successimg.png';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export default function Success() {
  const openConfirm = () => {
    console.log(1);
  };
  return (
    <div className="border-1 bg-secondary mx-auto w-463  px-38 py-32 rounded-8 text-center">
      <div className="w-full flex justify-end items-center">
        <CloseSharpIcon
          className="cursor-pointer hover:scale-110"
          sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>{' '}
      </div>
      <div className="pt-38 pb-27 flex justify-center">
        <img src={SuccessImg} alt="" width="164px" height="126px" />
      </div>
      <div className="text-19 text-white ">Transaction Submited</div>
      <div className="text-16 pt-16 pb-48 text-gray-400">Swapping 0.22 ICP for 9.74 NDP</div>
      <div
        className=" flex justify-center items-center cursor-pointer px-121 py-16 bg-secondaryGrey rounded-27"
        onClick={() => openConfirm()}>
        <div className="gradientText font-bold text-center cursor-pointer">View Pair Analytics</div>
      </div>
    </div>
  );
}
