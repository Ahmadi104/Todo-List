import ThemeToggle from "./ThemBack";
function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">📝 TodoApp</div>

        <nav>
          <ul className="flex space-x-6 text-sm md:text-base">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
