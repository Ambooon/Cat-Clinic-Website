import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Store() {
  return (
    <section className="w-full mb-12">
      <div className="grid grid-cols-5 max-w-6xl mx-auto">
        <div className="p-4 border-r">
          <h1 className="text-center text-4xl font-bold mb-8 font-playfair">Store</h1>
          <ul>
            <li>
              <button className="w-full rounded-md hover:bg-slate-600 hover:text-white text-start px-2 py-1 font-semibold text-lg mb-2">
                Food
              </button>
              <button className="w-full rounded-md hover:bg-slate-600 hover:text-white text-start px-2 py-1 font-semibold text-lg mb-2">
                Toys
              </button>
              <button className="w-full rounded-md hover:bg-slate-600 hover:text-white text-start px-2 py-1 font-semibold text-lg mb-2">
                Supplies
              </button>
              <button className="w-full rounded-md hover:bg-slate-600 hover:text-white text-start px-2 py-1 font-semibold text-lg">
                Medicine
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-4 p-4">
          <div className="flex items-center justify-between p-4 pt-0">
            <div>
              <input
                className="border px-2 py-1 rounded-md mr-4"
                type="search"
                placeholder="Search Here"
              />
              <button>
                <FaSearch />
              </button>
            </div>
            <div>
              <button>
                <IoIosArrowBack size={24} />
              </button>
              <button>
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-8">
            {itemData.map((item) => (
              <ItemCard
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ItemCard(props: { imageUrl: string; name: string; price: string }) {
  return (
    <div>
      <img
        className="mb-2"
        src={props.imageUrl}
        alt={props.name + " picture"}
      />
      <p className="font-medium">{props.price}</p>
      <p className="font-thin">{props.name}</p>
    </div>
  );
}

// Add here the items data
const itemData = [
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
  },
];
