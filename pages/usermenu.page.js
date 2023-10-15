import React from "react";

export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="#pablo"
                >
                  pink Starter Menu
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fas fa-globe text-lg leading-lg text-white opacity-75"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fas fa-user text-lg leading-lg text-white opacity-75"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fas fa-cog text-lg leading-lg text-white opacity-75"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
