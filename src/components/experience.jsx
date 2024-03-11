import { experience } from "./objFile";

export default function Experience() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 p-5">
      <h2 className="font-bold text-2xl lg:text-4xl">Latest Experience</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experience.map((key, exp) => (
          <li key={exp}>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={`${key.id % 2 === 0 ? "timeline-end md:text-start" : "timeline-start md:text-end"} flex flex-col mb-10 gap-2`}>
              <time className="font-mono italic">{key.year}</time>
              <div className="text-lg font-black">{key.name}</div>
              <ul className="list-disc list-inside">
                {key.description.name.map((objArr, index) => (
                  <li key={index}>{objArr}</li>
                ))}
              </ul>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
