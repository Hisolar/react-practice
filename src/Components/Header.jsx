import { defaults } from "autoprefixer";
import airbnb from "../assets/airbnb.svg";
export const Header = () => {
  return (
    <header className="bg-white w-full h-[70px] flex items-center justify-center shadow-md">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <h1 className="">
          <img className="w-[150px]" src={airbnb} alt="" />
        </h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li><a href="">Blog</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
