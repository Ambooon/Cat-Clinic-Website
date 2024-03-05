export default function Family() {
  return (
    <div className="w-full mt-28">
      <section className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-2">Meet Our Family</h2>
          <p className="font-thin">
            Everyone wants their cat to be happy and healthy and to look and
            feel their best. Now the same sanitary and functional benefits of
            today's advanced beauty and cat care.
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 justify-between items-center">
          <div className="bg-white text-center p-4 pb-12 rounded-2xl shadow-xl h-full max-w-96">
            <img
              className="size-56 object-cover rounded-full mx-auto mb-8"
              src="https://img.freepik.com/free-photo/close-up-veterinary-doctor-taking-care-pet_23-2149267966.jpg?w=360&t=st=1709607500~exp=1709608100~hmac=008dba6be1a0ef8eb78a7d9ee8c411ffe674aa93d72285565877250d50b04ca8"
              alt="Veterinarian Picture"
            />
            <p className="text-xl font-semibold mb-4">Aleira Rodriguez</p>
            <p>
              Veterinarian, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Assumenda fuga, in quibusdam neque natus suscipit labore
              commodi reiciendis sint laborum?
            </p>
          </div>
          <div className="bg-white text-center p-4 pb-12 rounded-2xl shadow-xl h-full max-w-96">
            <img
              className="size-56 object-cover rounded-full mx-auto mb-8"
              src="https://img.freepik.com/free-photo/front-view-female-veterinarian-observing-little-dog-yellow-wall_179666-12493.jpg?w=740&t=st=1709608022~exp=1709608622~hmac=f96ddd5b408d61191e6e97328edba6264a8d6369490d375b156b4584bc9077ed"
              alt="Veterinarian Picture"
            />
            <p className="text-xl font-semibold mb-4">Ingelmae San Juan</p>
            <p>
              Pet Groomer, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quia amet mollitia repellendus nemo alias! Dolorum.
            </p>
          </div>
          <div className="bg-white text-center p-4 pb-12 rounded-2xl shadow-xl h-full max-w-96">
            <img
              className="size-56 object-cover rounded-full mx-auto mb-8"
              src="https://img.freepik.com/free-photo/happy-female-veterinarian-with-dog-table-showing-thumbup-sign_23-2147928397.jpg?w=360&t=st=1709607998~exp=1709608598~hmac=84dce9b54bd52bd6ca9734a1574f71d2b789102fe006d831c4e3a96dc8c17ffc"
              alt="Veterinarian Picture"
            />
            <p className="text-xl font-semibold mb-4">Kiara Viar</p>
            <p>
              Pet Trainer, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam consectetur dolores provident voluptatum
              voluptatibus assumenda repudiandae aliquid temporibus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
