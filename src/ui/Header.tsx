import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center h[50px] px-5 py-3 shadow-md bg-red-500 text-white">
        <h3>Github Search</h3>
        <nav>
          <Link
            className="mr-3 text-base font-medium hover:text-gray-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-base font-medium hover:text-gray-300"
            to="/favourites"
          >
            Favourites
          </Link>
        </nav>
      </div>
    </header>
  );
}
