export default function Header() {
  return (
          <div>
      <nav className="fixed top-0 left-0 right-0 px-[10rem] py-5 z-10 bg-white drop-shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-black font-bold flex items-center">
            My Website<span className="ml-10 text-sm text-gray-500">Shop</span>
          </div>
          <h1 className="text-black">Sign in</h1>
        </div>
      </nav>
      <div className="mt-[5rem]">
        <nav className="px-[10rem]">
          <div className="bg-gray-300 py-3 flex justify-center rounded-lg">
            <h1 className="text-white text-lg">Transform your home.</h1>
          </div>
        </nav>
      </div>
    </div>

  );
}
