import { techStack } from "./objFile";

export default function Skills() {
  return (
    <section className="flex flex-col items-center gap-20 min-h-screen justify-center">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="flex flex-wrap lg:flex-row gap-5 justify-center">
        {techStack.map((key, tech) => (
          <div
            className={`flex flex-row justify-center gap-2 p-3 border-solid border-2 items-center rounded-2xl ${key.bdrColor} ${key.bgColor} duration-200 cursor-pointer hover:text-black`}
            key={tech}>
            <p className="font-bold text-base lg:text-2xl">{key.name}</p>
            <img src={key.image} alt={key.alt} className="w-[45px] h-[45px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
