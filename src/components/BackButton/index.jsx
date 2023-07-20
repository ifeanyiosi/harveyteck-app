// components/BackButton.js
import { useRouter } from "next/router";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      className=" flex items-center gap-4 text-nav text-[18px] font-semibold px-4 py-2"
      onClick={handleBack}
    >
      <div className="bg-gray-100 rounded-[5px] p-2 flex items-center">
        <MdOutlineArrowBackIosNew className="" />
      </div>
      Back
    </button>
  );
};

export default BackButton;
