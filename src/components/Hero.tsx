import { FaCheckSquare } from "react-icons/fa";
import HeroCat from "../assets/Hero Cat.png";

function Hero() {
  return (
    <div className="my-12 md:h-screen w-full md:-mt-20 flex items-center">
      <section className="text-center md:text-start grid md:grid-cols-2 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="p-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-playfair">
              Your Trusted Cat Haven for Health
            </h1>
            <p className="mb-4">
              A Haven of Comfort, Health, and Happiness for Your Feline Friends
              – Unmatched Care Tailored Just for Them!
            </p>
            <div className="flex justify-center md:justify-start gap-6 mb-8">
              <p className="flex items-center font-medium">
                <FaCheckSquare className="inline mr-2" />
                Vet Service
              </p>
              <p className="flex items-center font-medium">
                <FaCheckSquare className="inline mr-2" />
                14 Days Trial
              </p>
              <p className="flex items-center font-medium">
                <FaCheckSquare className="inline mr-2" />
                Free For Teacher
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <button className="font-medium hover:font-bold">Schedule</button>
              <button className="font-medium py-2 px-4 rounded-full bg-myBlue-light hover:bg-myBlue-dark hover:font-bold text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center p-8">
          <img className="-z-10" src={HeroCat} alt="Cat" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
