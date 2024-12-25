import { FaCopy } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./UI/Gradient";
import { MagicButton } from "./UI/MagicButton";

export const Contact = () => {
  return (
    <section>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
      <div className="mt-5 relative">

        <div className={`absolute -bottom-5 right-0 `}></div>

        <MagicButton
          title={"Copy Email"}
          icon={<FaCopy />}
          position="left"
        //   otherClasses="!bg-[#161A31]"
        />
      </div>
    </section>
  );
};
