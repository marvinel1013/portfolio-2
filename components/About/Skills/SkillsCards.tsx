import Image, { StaticImageData } from "next/image";

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
    <div className="relative bg-white dark:bg-dark border-2 border-dark dark:border-light flex items-center rounded-xl flex-col p-2 px-4 lg:p-5">
      <div className="absolute rounded-xl top-0 rounded-tr-2xl -right-2 rounded-bl-2xl -z-10 h-[109%] w-[104%] bg-dark dark:bg-light" />
      <div className={`w-14 lg:w-20 p-2 ${data?.bg} rounded-lg`}>
        <Image src={data.logo} alt="techlogo-image" priority />
      </div>

      <h2 className="font-semibold">{data.title}</h2>
    </div>
  );
}

export default SkillsCards;
