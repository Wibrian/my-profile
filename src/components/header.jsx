// import profile from "../img/photo.jpg";

export default function Header() {
  return (
    <header className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-8 justify-center">
        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="" className="max-w-sm rounded-full shadow-2xl" />
        <div className="text-center lg:text-start">
          <div>
            <h1 className="font-bold text-2xl lg:text-4xl">Wibrian Alfathan</h1>
            <p className="text-sm">12 February 2001</p>
          </div>
          <p className="py-6 text-base lg:text-lg">Fresh graduate from BINUS majoring in Computer Science who has an interest in the world of IT and networks, understands the basics of networking, and attended some trainings and internships in various academies/companies as a form of self-development and get new insights.</p>
          <button className="btn btn-primary">Scroll More</button>
        </div>
      </div>
    </header>
  );
}
