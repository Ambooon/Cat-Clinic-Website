import { MdHealthAndSafety } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto p-12">
      <div className="w-1/2 text-center mx-auto mb-16">
        <h1 className="text-6xl font-bold mb-4">About Us</h1>
        <p className="font-light">
          Welcome to Cat Clinic, where feline health and well-being take center
          stage! Our passion for cats and dedication to providing exceptional
          veterinary care define us as a leading cat clinic in Philippines.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <p className="mb-4 text-justify">
            At Cat Clinic, we strive to create a purr-fect environment where
            your beloved feline companions receive the highest standard of care.
            Our mission is to promote the health, happiness, and longevity of
            cats through comprehensive veterinary services, compassionate staff,
            and a cat-friendly atmosphere.
          </p>
          <div className="flex items-center justify-around gap-4 p-4">
            <div>
              <MdHealthAndSafety size={60} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                Expertise in Feline Care
              </h2>
              <p>
                With a team of experienced and cat-loving veterinarians, we
                specialize exclusively in the unique healthcare needs of cats.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-around gap-4 p-4">
            <div>
              <FaCity size={60} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                State-of-the-Art Facilities
              </h2>
              <p>
                Our clinic is equipped with the latest technology and modern
                facilities designed to cater to the specific needs of cats.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-around gap-4 p-4">
            <div>
              <FaPeopleGroup size={60} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                Compassionate and Skilled Staff
              </h2>
              <p>
                Our team consists of dedicated professionals who are not only
                highly skilled in feline medicine but also genuinely passionate
                about cats.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between items-center px-12">
          <img
            className="h-64 rounded-2xl"
            src="https://img.freepik.com/premium-photo/veterinary-doctors-holding-dog-cat_105751-9902.jpg?w=740"
            alt="Group of Veterinarians"
          />
          <img
            className="h-64 rounded-2xl"
            src="https://img.freepik.com/free-photo/close-up-man-woman-with-cat_23-2149304290.jpg?t=st=1709626030~exp=1709629630~hmac=55c47d40b5000ab4abfc1fc251bccadd20d4c6c3b99a792a1aa1d8184cc10365&w=740"
            alt="Group of Veterinarians"
          />
        </div>
      </div>
    </section>
  );
}
