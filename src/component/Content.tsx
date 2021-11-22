import React, { useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;

const Content: React.FC = () => {


  return (
    <div>
      <Banner />
      <section className="container mx-auto mt-20">

        <div className="grid grid-cols-1 grid lg:grid-cols-2 gap-8 mt-10 px-5">
          <div className="relative">
            <div className="overflow-hidden">
              <a href="#"><img
                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-1.jpg" alt="" /></a>
            </div>
            <div className="absolute bottom-0 pb-5 sm:pb-10 pt-5 px-5 bg-black bg-opacity-25">
              <p className="text-green-500 bg-white w-32 p-2 text-center rounded-md">
                July 27, 2018
              </p>
              <h3 className="font-bold text-2xl sm:text-3xl text-white">
                When Blight Strikes, it’s Time To Be More Careful
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <a href="#"><img
                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg" alt="" /></a>
            </div>
            <div className="absolute bottom-0 pb-5 sm:pb-10 pt-5 px-5 bg-black bg-opacity-25">
              <p className="text-green-500 bg-white w-32 p-2 text-center rounded-md">
                July 27, 2018
              </p>
              <h3 className="font-bold text-2xl sm:text-3xl text-white">
                When Blight Strikes, it’s Time To Be More Careful
              </h3>

            </div>
          </div>
        </div>
      </section>
      <h1 className="text-3xl font-medium ml-11 pt-24 py-3">San Pham Ban Chay</h1>
      <div className="grid grid-cols-4 gap-2 py-3 container mx-auto">
        <div className="border-2 mx-auto ">
          <div><img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-02.png" /></div>

          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2 mx-auto">
          <div><img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-03.png" /></div>
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2 mx-auto">
          <div><img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-12.jpg" /></div>
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2 mx-auto">
          <div><img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png" /></div>
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 py-5">
        <div
          className=" mx-auto rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-03.jpg" alt="" width="685px" height="250px" />
        </div>
        <div
          className=" mx-auto  rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-04.jpg" alt="" width="685px" height="250px" />
        </div>
      </div>

      <div className="grid grid-cols-12 text-3xl ml-11 pt-24 py-3 container mx-auto">
        <div className="col-span-4  font-medium hover:text-hover ">
          <h1>Sản phẩm phổ biến </h1>
        </div>
        <div className="col-span-4 font-medium hover:text-hover">
          <h1>Sản phẩm khuyến mãi</h1>
        </div>
        <div className="col-span-4 font-medium hover:text-hover">
          <h1>Sản phẩm mới</h1>
        </div>
      </div>

      <div className="grid grid-cols-5 container mx-auto">
        <div className="border-2  mx-auto ">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-06.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-07.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-12.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-09.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-11.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 container mx-auto py-5">
        <div className="border-2  mx-auto ">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-06.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-07.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-12.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-09.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
        <div className="border-2  mx-auto">
          <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-11.jpg" alt="" width="216px" height="252px" />
          <div className="text-center border-2">
            <p>Classico</p>
            <p>700,000d</p>
            <button>Them gio hang</button>
          </div>
        </div>
      </div>

      <section className="container mx-auto mt-20 py-7 mb-20">

        <div className="grid grid-cols-1 grid lg:grid-cols-3 gap-8 mt-10 px-5 ">
          <div className="relative">
            <div className="">
              <a href="#"><img
                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1 w-full"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg" alt="" /></a>
              <a href="" className="font-medium text-xl">Chiếc đồng hồ của những CEO quyền lực nhất thế giới</a><br />
              <a href="">“Một chiếc đồng hồ nói cho người khác biết bạn là tuýp người như thế nào và giá trị của bạn ra sao”.</a>
            </div>

          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <a href="#"><img
                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg" alt="" /></a>
              <a href="" className="font-medium text-xl"> 10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3</a> <br />
              <a href="">Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai năm gần đây do nhu cầu giảm.</a>
            </div>

          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <a href="#"><img
                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1"
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg" alt="" /></a>
              <a href="" className="font-medium text-xl">Chiếc đồng hồ của những CEO quyền lực nhất thế giới</a> <br />
              <a href="">Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, Audemars Piguet sản xuất ra 36.000</a>
            </div>

          </div>
        </div>
      </section>

      <div className="border-t border-gray-400 grid grid-cols-12 py-10">
        <div className="col-span-6">
          <h1 className="text-3xl font-medium">ĐĂNG KÝ NHẬN THÔNG TIN </h1>
        </div>
        <div className="col-span-6">
          <div className="col-span-6 justify-items-center">
            <div className="flex items-center justify-center">
              <div className="flex border-2 rounded">
                  <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
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
        </div>
      </div>
    </div>
  );
};
export default Content;
