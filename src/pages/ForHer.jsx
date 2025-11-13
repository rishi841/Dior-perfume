import React from "react";

const perfumesForHer = [
  {
    id: 1,
    name: "Miss Dior Blooming Bouquet",
    price: "$120",
    img: "https://images.unsplash.com/photo-1698877577733-65ae7dee328c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "J’adore Eau de Parfum",
    price: "$150",
    img: "https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
  },
  {
    id:3,
    name:"new",
    price: "$180",
    img:"https://images.unsplash.com/photo-1698877577733-65ae7dee328c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpb3IlMjBzYXV2YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  }
];

const ForHer = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white "
      
    >
      
      <div className="absolute inset-0 bg-black/60"></div>

    
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-serif tracking-widest mb-4 uppercase">
          For Her
        </h1>
        <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
          Celebrate femininity with Dior’s iconic perfumes — where elegance,
          grace, and confidence come together in every scent.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {perfumesForHer.map((item) => (
            <div
              key={item.id}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.price}</p>
                <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForHer;

