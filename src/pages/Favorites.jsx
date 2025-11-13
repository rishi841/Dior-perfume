import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../feature/favoirteSlice"; 

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return (
      <p className="text-center mt-20  text-xl">
        No favorite perfumes added yet 💫
      </p>
    );
  }

  
  const handleClearAll = () => {
    favorites.forEach((item) => dispatch(removeFromFavorites(item.id)));
  };

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Your Favorites</h2>
        <button
          onClick={handleClearAll}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Clear All
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <button
                onClick={() => dispatch(removeFromFavorites(item.id))}
                className="text-red-600 font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;

