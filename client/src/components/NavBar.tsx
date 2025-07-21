import { useState } from "react";

export default function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <nav className="relative">
      <button
        type="button"
        className="fixed top-4 left-4 z-50 flex flex-col justify-center bg-white rounded-xl p-3 shadow-md"
        aria-label="Ouverture du menu"
        onClick={() => setClick(!click)}
      >
        Menu
      </button>

      {click && (
        <div>
          <button
            type="button"
            className="fixed inset-0 bg-white transition-opacity duration-300 z-40 opacity-30 pointer-events-auto"
            onClick={() => setClick(false)}
          >
            {" "}
          </button>
          <ul className="fixed top-0 left-0 h-full w-2/3 max-w-1/3 md:max-w-1/8 bg-white shadow-lg flex flex-col gap-6 p-8 transition-transform duration-300 z-50">
            <li>Inscription</li>
            <li>Connexion</li>
            <li>Les recettes</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
