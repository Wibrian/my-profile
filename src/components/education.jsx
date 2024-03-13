import { cardData } from "./objFile";

export default function Education() {
  return (
    <section className="flex flex-col items-center min-h-screen justify-around px-10">
      <h2 className="text-4xl font-bold">Education</h2>
      <div className="flex flex-col lg:flex-row items-center">
        {cardData.map((key, obj) => (
          <div className="card lg:card-side rounded-lg bg-base-100 shadow m-4 hover:shadow-xl duration-200 border-solid border-2" key={obj}>
            <figure className="relative">
              <img className="object-cover min-h-80 w-auto lg:w-80 blur-[4px]" src={key.image} alt="Img" />
              <img className="absolute size-auto" src={key.logo} alt="Logo" srcSet="" />
            </figure>
            <div className="card-body gap-5">
              <div className="gap-0">
                <h3 className="card-title font-bold text-2xl">{key.name}</h3>
                <p className="italic">{key.degree}</p>
              </div>
              <p>{key.major}</p>
              <p className="font-bold">{key.gpa}</p>
              <div className="badge badge-primary">{key.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
