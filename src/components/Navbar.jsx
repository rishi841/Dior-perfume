import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const favorites = useSelector((state) => state.favorites || []);
  const count = favorites.length;

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Search for:", search);
      setSearch("");
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-zinc-700 text-white relative">
      
    
      <h1 className="font-serif text-2xl tracking-widest">DIOR</h1>

     
      <div className="hidden sm:flex flex- grow justify-center">
        <input
          type="text"
          placeholder="Search perfume here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-72 md:w-80 px-4 py-2 rounded-full text-white bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-400 shadow-lg"
        />
      </div>

     
      <div className="hidden md:flex items-center gap-6 font-medium">
        <NavLink to="/" className="hover:text-gray-400 transition">
          Home
        </NavLink>
        <NavLink to="/quiz" className="hover:text-gray-400 transition">
          Find Your Scent
        </NavLink>
        <NavLink to="/ForHer" className="hover:text-gray-400 transition">
          For Her
        </NavLink>
        <NavLink to="/ForHim" className="hover:text-gray-400 transition">
          For Him
        </NavLink>
        <NavLink to="/About" className="hover:text-gray-400 transition">
          About
        </NavLink>

        <div className="relative">
          <NavLink to="/favorites" className="hover:text-gray-400 transition">
            Favorites
          </NavLink>
          {count > 0 && (
            <span className="absolute -top-3 -right-4 bg-white text-black text-xs rounded-full px-2">
              {count}
            </span>
          )}
        </div>
      </div>

     
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

   
      <AnimatePresence>
        {isOpen && (
          <>
            
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
           
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-zinc-800 text-white flex flex-col items-start px-6 py-10 z-50 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <X size={26} />
              </button>

              <div className="flex flex-col gap-6 mt-10 text-lg w-full">
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/quiz" onClick={() => setIsOpen(false)}>Find Your Scent</NavLink>
                <NavLink to="/ForHer" onClick={() => setIsOpen(false)}>For Her</NavLink>
                <NavLink to="/ForHim" onClick={() => setIsOpen(false)}>For Him</NavLink>
                <NavLink to="/About" onClick={() => setIsOpen(false)}>About</NavLink>
                <NavLink to="/favorites" onClick={() => setIsOpen(false)}>
                  Favorites{" "}
                  {count > 0 && (
                    <span className="ml-2 bg-white text-black text-xs rounded-full px-2">
                      {count}
                    </span>
                  )}
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

