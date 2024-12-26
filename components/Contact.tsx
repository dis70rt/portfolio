import { FaEnvelope } from "react-icons/fa";
import { MagicButton } from "./UI/MagicButton";
import { BorderBeam } from "./UI/Background";

export const Contact = () => {
  return (
    <section id="contact" className="lg:p-4 lg:px-96 pr-1">
      <div className="relative flex flex-col items-start font-bold bg-dot-blue-900 border border-purple/20 text-blue-100 rounded-3xl p-4">
        <p className="text-4xl lg:text-4xl">
          Like what you see? Reach out{" "}
          <a
            href="mailto:sd.saikat369@gmail.com"
            className="text-blue-500 underline"
          >
            via email
          </a>{" "}
          to collaborate!
        </p>
        <a className="pt-8" href="mailto:sd.saikat369@gmail.com">
          <MagicButton
            title={"Email"}
            icon={<FaEnvelope />}
            position={"left"}
          />
        </a>
        <BorderBeam />
      </div>
      
    </section>
  );
};