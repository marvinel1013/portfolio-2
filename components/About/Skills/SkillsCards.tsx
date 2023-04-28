import Image, { StaticImageData } from "next/image";
import SamplePic from "../../../assets/tech_logo/nextjs.png";

type Props = {
  data:
    | {
        logo: any;
        title: string;
        bg?: undefined;
      }
    | {
        logo: StaticImageData;
        title: string;
        bg: string;
      };
};

function SkillsCards({ data }: Props) {
  return (
    <div className="relative bg-white border-2 border-dark flex items-center rounded-xl flex-col p-2 px-4 lg:p-5">
      <div className="absolute rounded-xl top-0 rounded-tr-2xl -right-2 rounded-bl-2xl -z-10 h-[109%] w-[104%] bg-dark" />
      <div className={`w-14 lg:w-20 p-2 ${data?.bg} rounded-lg`}>
        <Image src={data.logo} alt="/" />
      </div>

      <h2 className="font-semibold">{data.title}</h2>
    </div>
  );
}

export default SkillsCards;
