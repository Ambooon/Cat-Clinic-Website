import { FaArrowRight } from "react-icons/fa6";

export default function Service() {
  return (
    <section className="max-w-6xl mx-auto p-12 ">
      <div className="md:grid grid-cols-2 items-center gap-4 mb-24">
        <div className="max-w-sm mx-auto text-center md:text-start">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 font-playfair">
            Service
          </h1>
          <p className="font-light">
            Welcome to the Gentle Paws Cat Care Services Page – your gateway to
            comprehensive and specialized care tailored exclusively for our
            feline friends.
          </p>
        </div>
        <img
          className="rounded-2xl hidden md:block"
          src="https://plus.unsplash.com/premium_photo-1663011219208-418276022b35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cat with Vet"
        />
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4">
        Discover Our Services
      </h2>
      <div className="flex flex-col justify-between items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          imageUrl={
            "https://img.freepik.com/premium-vector/veterinarian-holding-cat_171919-1215.jpg?w=740"
          }
          title={"Preventive Care"}
          content={
            "Maintaining your cat's health starts with preventive care. Our routine check-ups, vaccinations, and wellness exams are crafted to keep your feline companion in optimal condition. We emphasize early detection and prevention to ensure a lifetime of well-being."
          }
        />
        <Card
          imageUrl={
            "https://img.freepik.com/free-vector/cat-health-checkup-by-vet-veterinary-clinic-woman-stroking-happy-kitten-flat-vector-illustration-pet-care-medicine-domestic-animals-concept-banner-website-design-landing-web-page_74855-21720.jpg?t=st=1709631863~exp=1709635463~hmac=24dceb5cd6a859837f5111be61ad3d9a7de040b4b3f5ad93393d15da7da461be&w=740"
          }
          title={"Dental Care"}
          content={
            "Oral health is crucial for overall well-being. Our dental services include routine cleanings, dental examinations, and treatments for common dental issues. We prioritize preventive measures to keep your cat's pearly whites in top-notch condition."
          }
        />
        <Card
          imageUrl={
            "https://img.freepik.com/free-vector/veterinary-concept-illustration_114360-3261.jpg?t=st=1709631722~exp=1709635322~hmac=2626eb5d2f709d4ba5a5df8084629e49e98eb27f4e8a2c74bd51548cf78a0c08&w=740"
          }
          title={"Medical Consultations"}
          content={
            "Our experienced veterinarians are here to address any health concerns your cat may have. Whether it's a sudden illness or chronic condition, we provide thorough examinations, diagnostics, and treatment plans to ensure the best possible outcomes for your feline friend."
          }
        />{" "}
        <Card
          imageUrl={
            "https://img.freepik.com/free-vector/pet-veterinary_24908-57945.jpg?t=st=1709631742~exp=1709635342~hmac=ab559f19420fc93eebc29f1a07baaac4da63f04d061122f12b37781b396f3373&w=740"
          }
          title={"Emergency Care"}
          content={
            "Life is unpredictable, and emergencies can happen. Our clinic is equipped to handle urgent situations with efficiency and care. If your cat requires emergency medical attention, rest assured that our team is ready to provide swift and effective intervention."
          }
        />
        <Card
          imageUrl={
            "https://img.freepik.com/free-vector/veterinary-concept-illustration_114360-3100.jpg?t=st=1709631828~exp=1709635428~hmac=aaca332aaf7012cec23a06320ee5d1f591aa68cf4051f00c1a8fee4e6a3901ea&w=740"
          }
          title={"Nutritional Counseling"}
          content={
            "Proper nutrition is key to a cat's overall health. Our team provides personalized nutritional counseling to address your cat's specific dietary needs. Whether managing weight, addressing allergies, or supporting specific health conditions, we offer guidance for optimal nutrition."
          }
        />
        <Card
          imageUrl={
            "https://img.freepik.com/free-vector/pet-veterinary_24908-57958.jpg?t=st=1709631759~exp=1709635359~hmac=8f3c7f168f96854ac294197cb1fa6e063cfd8b723dc0c15943c735aa8cfd7a9a&w=740"
          }
          title={"Behavioral Consultations"}
          content={
            "Understanding feline behavior is essential for a harmonious relationship. Our team includes experts in feline behavior who can provide guidance on common behavioral issues, offer training tips, and create tailored plans to enhance the bond between you and your cat."
          }
        />
      </div>
    </section>
  );
}

function Card(props: { imageUrl: string; title: string; content: string }) {
  return (
    <div className="shadow-lg hover:shadow-2xl rounded-2xl flex flex-col justify-between items-center p-8 text-center max-w-sm">
      <img className="h-40 mb-8" src={props.imageUrl} alt="Service Picture" />
      <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
      <p className="font-light mb-4">{props.content}</p>
      <div className="hover:cursor-pointer flex justify-between items-center gap-2 hover:font-medium">
        <a className="hover:font-semibold">Read More</a>
        <FaArrowRight />
      </div>
    </div>
  );
}
