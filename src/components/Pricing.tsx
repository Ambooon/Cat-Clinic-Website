import { FaCheckSquare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Pricing() {
  return (
    <div className="w-full mt-24">
      <section className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-2">Cat Care Service Pricing</h2>
          <p className="font-light">
            Each groomer sets their own pricing based on your cat's breed, size,
            behavior and cost condition. Base prices for each groomer may vary
            based on.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card */}
          <div className="bg-myWhite p-8 rounded-2xl h-fit">
            <p className="text-center text-xl font-semibold">Basic Plan</p>
            <p className=" text-center my-12">
              <span className="text-5xl font-bold">$120</span> / month
            </p>
            <ul className="grid items-center justify-center mb-12">
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Single Room
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Socialist Exercise
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Custom Meals
              </li>
              <li className="flex items-center text-slate-500">
                <IoClose className="mr-2" /> Spa and Grooming
              </li>
              <li className="flex items-center text-slate-500">
                <IoClose className="mr-2" />
                Conditioning Treatment
              </li>
              <li className="flex items-center text-slate-500">
                <IoClose className="mr-2" /> Handscissor Finish
              </li>
            </ul>
            <button className="text-center font-semibold bg-myBlue-light text-white w-full py-2 rounded-full hover:bg-myBlue-dark ease-in-out duration-100">
              Get The Basic
            </button>
          </div>
          {/* Card */}
          <div className="bg-myBlue-light text-white p-8 rounded-2xl md:scale-110">
            <p className="text-center text-xl font-semibold">Premium Plan</p>
            <p className=" text-center my-12">
              <span className="text-5xl font-bold">$180</span> / month
            </p>
            <ul className="grid items-center justify-center mb-12">
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Single Room
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Socialist Exercise
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Custom Meals
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Spa and Grooming
              </li>
              <li className="flex items-center text-myBlue-dark">
                <IoClose className="mr-2" />
                Conditioning Treatment
              </li>
              <li className="flex items-center text-myBlue-dark">
                <IoClose className="mr-2" /> Handscissor Finish
              </li>
            </ul>
            <button className="text-center font-semibold bg-white text-myBlue-light w-full py-2 rounded-full hover:bg-myBlue-dark hover:text-white ease-in-out duration-100">
              Get The Premium
            </button>
          </div>
          {/* Card */}
          <div className="bg-myWhite p-8 rounded-2xl h-fit">
            <p className="text-center text-xl font-semibold">Pro Plan</p>
            <p className=" text-center my-12">
              <span className="text-5xl font-bold">$240</span> / month
            </p>
            <ul className="grid items-center justify-center mb-12">
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Single Room
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Socialist Exercise
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Custom Meals
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Spa and Grooming
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" />
                Conditioning Treatment
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="mr-2" /> Handscissor Finish
              </li>
            </ul>
            <button className="text-center font-semibold bg-myBlue-light text-white w-full py-2 rounded-full hover:bg-myBlue-dark ease-in-out duration-100">
              Get The Pro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
