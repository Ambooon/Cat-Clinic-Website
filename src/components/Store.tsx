import { useState } from "react";

const categories = ["all", "food", "toys", "medicine", "other"];

export default function Store() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  function handleClick(category: string) {
    setCategory(category);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <section className="w-full my-4 mb-12">
      <div className="grid grid-cols-5 max-w-6xl mx-auto h-screen">
        <div className="p-4 border-r">
          <h1 className="text-center text-4xl font-bold mb-8 font-playfair">
            Store
          </h1>
          <ul>
            {categories.map((item) => {
              return (
                <li key={item}>
                  <button
                    className={`w-full rounded-md hover:bg-myBlue-dark hover:text-white hover:font-semibold text-start px-2 py-1 font-medium text-lg mb-2 capitalize ease-in-out duration-100 ${
                      category === item
                        ? "bg-myBlue-dark text-white font-semibold"
                        : ""
                    }`}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-4 p-4  overflow-y-scroll">
          <input
            className="border px-2 py-1 rounded-md mb-4 border-slate-400"
            type="search"
            placeholder="Search Here"
            value={search}
            onChange={handleChange}
          />

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {itemData.map((item) => {
              if (
                item.category === category &&
                item.name.toLowerCase().includes(search)
              ) {
                return (
                  <ItemCard
                    key={item.name}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    price={item.price}
                  />
                );
              } else if (
                category === "all" &&
                item.name.toLowerCase().includes(search)
              ) {
                return (
                  <ItemCard
                    key={item.name}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    price={item.price}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type ItemCardPropType = {
  imageUrl: string;
  name: string;
  price: string;
  category?: string;
};

function ItemCard(props: ItemCardPropType) {
  return (
    <div className="flex flex-col justify-between rounded-md hover:cursor-pointer hover:shadow-lg hover:scale-105 ease-in-out duration-200 p-2">
      <img
        className="m-auto"
        src={props.imageUrl}
        alt={props.name + " picture"}
      />
      <div>
        <p className="font-medium">{props.price}</p>
        <p className="font-light">{props.name}</p>
      </div>
    </div>
  );
}

// Add here the items data
const itemData: ItemCardPropType[] = [
  {
    imageUrl:
      "https://img.freepik.com/free-photo/pet-food_1339-862.jpg?t=st=1709715771~exp=1709716371~hmac=e986b9a226f13cfa0cf3e9985c3c1846fcc1521500345746de5a053218b92b71",
    name: "Cat Food",
    price: "$10.99",
    category: "food",
  },
  {
    imageUrl:
      "https://www.kahayupan.com/cdn/shop/products/whiskasdryfoodtuna_1_ea929f55-d2fb-47fa-b4de-9d3f9df7351d_1200x1200.jpg?v=1602707830",
    name: "Whiskas",
    price: "$13.39",
    category: "food",
  },
  {
    imageUrl:
      "https://ph-live-01.slatic.net/p/a6a2632ffcb0198a6396be6623e2dd6e.jpg",
    name: "Lucy Cat Food",
    price: "$9.39",
    category: "food",
  },
  {
    imageUrl:
      "https://www.petexpress.com.ph/cdn/shop/files/10243702KitCatClassic32DryCatFoodA.png?v=1693985067",
    name: "Classic Cuisine Cat",
    price: "$17.89",
    category: "food",
  },
  {
    imageUrl:
      "https://www.petwarehouse.ph/24803/brit-premium-by-nature-adult-salmon-8kg-cat-dry-food.jpg",
    name: "Brit Premium",
    price: "$27.19",
    category: "food",
  },
  {
    imageUrl:
      "https://down-ph.img.susercontent.com/file/0de6c0468f50449c5cc5c558a34fb938",
    name: "Monello Cat",
    price: "$14.10",
    category: "food",
  },
  {
    imageUrl:
      "https://www.petplay.com/cdn/shop/files/P.L.A.Y.FelineFrenzy2020-TwiceasMice_1LowRes_18c3b731-dc98-4920-9feb-78e078692329_720x.jpg?v=1695224725",
    name: "Mice Toy",
    price: "$4.99",
    category: "toys",
  },
  {
    imageUrl:
      "https://cms-www.chewy.com/contentAsset/image/be760c3c-4851-4095-8da8-fe0d7d2ae796/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/222/resize_h/222/2022-CatToys-Recipe2-3.jpg",
    name: "Mini Mices",
    price: "$5.19",
    category: "toys",
  },
  {
    imageUrl:
      "https://assets.petco.com/petco/image/upload/f_auto,q_auto/2372975-center-1",
    name: "Homeo Pet",
    price: "$24.99",
    category: "medicine",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwFD8jLjm3foUeWcpJqfxKrUoTy-kESlalw&usqp=CAU",
    name: "Cat Star",
    price: "$12.79",
    category: "medicine",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkh-EZXKnO0McGn2RNgGkpeYoHe4HhCPmJhg&usqp=CAU",
    name: "Respocare Cat L-Lysine",
    price: "$15.49",
    category: "medicine",
  },
  {
    imageUrl:
      "https://www.dailypaws.com/thmb/1PVtSf2ap8UtGrzIy7v9ayLYjps=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/supplies-to-get-before-you-adopt-a-cat-105027327-2000-816931e35fd0444a80af4a82f049abb1.jpg",
    name: "Pet House",
    price: "$13.75",
    category: "other",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/81YaKdTnuSL.jpg",
    name: "Lobeve Kitten Supplies Starter Kit",
    price: "$34.99",
    category: "other",
  },
];
