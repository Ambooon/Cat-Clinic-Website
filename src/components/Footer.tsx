import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-white">
      <div className="container mx-auto grid md:grid-cols-6 gap-8 p-12">
        <div className="col-span-2">
          <p className="font-semibold text-xl mb-2">Cat Clinic Website</p>
          <p className="text-xs font-light mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            maxime mollitia, hic alias recusandae aliquam?
          </p>
          <div className="flex justify-between items-center gap-4 w-fit">
            <a href="#" className="hover:cursor-pointer">
              <FaFacebook />
            </a>
            <a href="#" className="hover:cursor-pointer">
              <FaInstagram />
            </a>
            <a href="#" className="hover:cursor-pointer">
              <TiSocialLinkedin />
            </a>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Our Product</p>
          <ul className="font-thin text-sm">
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Groomings
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Vaccines
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Nail Cut
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Cat Shower
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Our Resources</p>
          <ul className="font-thin text-sm">
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Community
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Product Updates
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Our Cat.care
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Documents
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Our Support</p>
          <ul className="font-thin text-sm">
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Customer
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Privacy Policy</p>
          <ul className="font-thin text-sm">
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Terms Condition
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Payment Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Cat.care
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:cursor-pointer">
                Management Tools
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
