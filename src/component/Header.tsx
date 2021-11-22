import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;

const Header: React.FC = () => {
  const [current, setCurrent] = useState<string>("mail");

  return (
    <div>
      <header className="bg-current">
        <div className=" grid grid-cols-12 py-5 justify-items-center">
          <div className="col-span-3">
            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png" alt="" width="200px" height="100px" />
          </div>
          <div className="col-span-6 justify-items-center">
            <div className="flex items-center justify-center">
              <div className="flex border-2 rounded">
                <input type="text" className="px-4 py-2 w-96" placeholder="Search..." />
                <button className="flex items-center justify-center px-4 border-l">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 justify-items-center ">
            <i className="fas fa-heart text-2xl text-white m-4"><Link to ="/admin"></Link> </i>
            <i className="fal fa-shopping-bag text-4xl text-white"></i>
          </div>
        </div>

        <nav className="py-5 border-t border-gray-400 ">
          <div className=" text-lg py-2 ">
            <ul className="grid grid-cols-5 px-96 ">
              <Link to="" className="text-center text-white font-semibold">TRANG CHỦ</Link>
              <Link to="/about" className="text-center text-white font-semibold">GIỚI THIỆU</Link>
              <Link to="/product" className="text-center text-white font-semibold">SẢN PHẨM</Link>
              <Link to="/blogs" className="text-center text-white font-semibold">BLOGS</Link>
              <Link to="/contact" className="text-center text-white font-semibold">LIÊN HỆ</Link>
            </ul>
          </div>
        </nav>
      </header>

    </div>
  );
};
export default Header;
