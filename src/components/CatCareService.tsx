export default function Hero() {
  return (
    <div className="w-full mt-24">
      <section className="max-w-6xl mx-auto bg-gray-800 text-white rounded-3xl grid grid-cols-3 p-6">
        <div className="flex justify-between items-center p-4 col-span-1 border-r border-slate-100">
          <div>
            <h2 className="text-4xl font-semibold mb-2">
              Our Cat Care Service
            </h2>
            <p className="font-thin">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              velit suscipit, fuga ipsa minima dolorem?
            </p>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-x-4 px-4">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

function Card() {
  return (
    <div className="p-4 hover:bg-orange-400 rounded-xl ease-in-out duration-200">
      <img
        className="max-h-40 mx-auto mb-2"
        src="https://images.unsplash.com/photo-1589298739459-feb767abf7b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cat Training"
      />
      <p className="text-lg font-medium">Cat Training</p>
      <p className="font-light">Teaches your cat basic training</p>
    </div>
  );
}
