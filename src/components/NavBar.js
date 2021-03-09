import { BsFillPersonFill } from 'react-icons/all';

export default function NavBar() {
  return (
    <nav className="flex px-12 pt-8 pb-4 bg-white border-b-1 border-black">
      <div className="flex justify-between w-1/2 items-baseline">
        <h1 className="text-blue-500 text-2xl font-bold">Bookstore CMS</h1>
        <p className="text-xs">BOOKS</p>
        <p className="text-gray-500 text-xs">CATEGORIES</p>
      </div>
      <div className="flex w-1/2 justify-end items-end">
        <div className="p-1 border border-gray-300 rounded-full">
          <BsFillPersonFill className="text-blue-500 text-2xl" />
        </div>
      </div>
    </nav>
  );
}
