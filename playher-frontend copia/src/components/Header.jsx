import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm p-4 flex items-center justify-between">
      <img src={logo} alt="PlayHer Logo" className="h-10" />
      <nav className="space-x-4">
        <a href="/" className="text-900 hover:text-[#ff36ab]">Home</a>
        <a href="/about" className="text-900 hover:text-[#ff36ab]">Chi Siamo</a>
        <a href="/join" className="text-900 text-white bg-[#ff36ab] rounded-[5px] hover:text-[#ff36ab] hover:bg-white px-4 py-2">Diventa Playher</a>
        <a href="/login" className="border border-white rounded-[5px] text-white px-4 py-2"
        >Login</a>
      </nav>
    </header>
  );
};

export default Header;
