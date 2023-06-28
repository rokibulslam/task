import { Link } from 'react-router-dom';
import { search } from '../features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector(state => state.cart.cart)
  const searchText = useSelector((state) => state.search.searchText);
  console.log(searchText)
  const dispatch=useDispatch()
  return (
    <nav className=" mx-auto flex flex-col md:flex-row items-center py-10 justify-center">
      {/* Name */}
      <Link
        to="/"
        className="flex title-font items-center text-gray-900 mb-4 md:mb-0 no-underline text-black font-bold"
      >
        GROCERIES
      </Link>
      {/* Search */}
      <div className="flex items-center text-base justify-between h-[40px] border-gray-900 lg:w-4/6 rounded-81xl shadow-lg mx-10">
        <input
          required
          onKeyUp={(e) => dispatch(search(e.target.value))}
          className="h-full w-4/6   border-0 outline-0 ms-5"
          placeholder="Search"
          type="text"
        />
        <button
          className='bg-inherit border-0'>
          <Link to="/search">
            <img
              className="w-[20px] pr-3 cursor-pointer"
              src="/src/assets/search.png"
              alt=""
            />
          </Link>
        </button>
      </div>

      {/* Icons */}
      <ul className="flex items-center justify-center space-x-10 list-none mt-[50px] md:mt-0">
        {/* Favourite */}
        <li className="relative">
          <img
            className="w-[25px] h-[25px] md:w-[51px] md:h-[43px]"
            src="/src/assets/Icon.png"
            alt=""
          />
          <span className="absolute right-[-15px] top-[-15px] md:top-[-30px] w-[12px] h-[12px] md:h-[24px] md:w-[24px] bg-red-400 rounded-[100%] md:text-sm text-[10px] flex justify-center items-center">
            8
          </span>
        </li>
        {/* Profile */}
        <li className="relative">
          <img
            className="w-[25px] h-[25px] md:w-[51px] md:h-[43px]"
            src="/src/assets/Avatar.png"
            alt=""
          />
        </li>
        {/* Cart */}
        <li className="relative">
          <Link to="/cart">
            <img
              className="w-[25px] h-[25px] md:w-[51px] md:h-[43px]"
              src="/src/assets/cart.png"
              alt=""
            />
            <span className="absolute right-[-15px] top-[-15px] md:top-[-30px] w-[12px] h-[12px] md:h-[24px] md:w-[24px] bg-red-400 rounded-[100%] md:text-sm text-[10px] flex justify-center items-center">
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar