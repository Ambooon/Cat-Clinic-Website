import { FaCheckSquare } from "react-icons/fa";

function Hero() {
  return (
    <div className="my-12 md:h-screen w-full md:-mt-20 flex items-center">
      <section className="text-center md:text-start grid md:grid-cols-2 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="p-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
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
              <button className="hover:font-semibold">Sign In</button>
              <button className="py-2 px-4 rounded-full bg-orange-400 hover:bg-orange-500 text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <img
            className="-z-10"
            src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-cat_23-2149100172.jpg?w=740&t=st=1709609061~exp=1709609661~hmac=c3ec2a58d6d11041534cd8da4e1561742869f4adf3b87ab6bf66dca73d7ccd8b"
            alt="Cat"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
