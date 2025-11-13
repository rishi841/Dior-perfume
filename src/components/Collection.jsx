import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../feature/favoirteSlice";

const perfumes = [
  {
    id: 1,
    name: "Sauvage",
    price: "$95",
    img: "https://images.unsplash.com/photo-1698877360256-bc45ef15e072?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 2,
    name: "Miss Dior",
    price: "$110",
    img: "https://images.unsplash.com/photo-1698877577733-65ae7dee328c?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 3,
    name: "J’adore",
    price: "$120",
    img: "https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 4,
    name: "Star Dior",
    price: "$180",
    img: "https://images.unsplash.com/photo-1700522604220-471669e4364c?auto=format&fit=crop&w=600&q=60",
  },
];

const Collection = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites?.items || state.favorites || []
  );

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  return (
    <section
      id="collection"
      className="py-20  border-t text-center  bg-zinc-600"
    >
      <h2 className="text-4xl font-serif font-semibold mb-12 tracking-wide">
        Our Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {perfumes.map((item) => (
          <div
            key={item.id}
            className="bg-zinc shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
          
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-30 transition duration-500"></div>
            </div>

            
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.price}</p>

              {isFavorite(item.id) ? (
                <button
                  onClick={() => dispatch(removeFromFavorites(item.id))}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Remove Favorite
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addToFavorites(item))}
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;






