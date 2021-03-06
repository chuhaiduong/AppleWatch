import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;

const Footer: React.FC = () => {
    const [current, setCurrent] = useState<string>("mail");

    return (
        <div>
            <footer className="py-20 bg-current">
                <div className="container mx-auto ">
                    <div className="grid-cols-1 sm:grid grid-cols-3 ml-3 sm:ml-0 ">
                        <div>
                            <div >
                                <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png" className="my-5 mx-auto" width="300px" />
                                <p className="text-white w-2/3 text-lg mx-auto">Grabbing the concsumer’s attention isn’t enough you have
                                    to keep
                                    that
                                    attention for at
                                    least a.</p>
                            </div>
                        </div>
                        {/*end footer-1*/}
                        <div className="grid-cols-1 sm:grid grid-cols-2">
                            <div >
                                <h4 className="my-5 font-bold text-xl text-white">NAVICATION</h4>
                                <ul className="text-lg text-white">
                                    <li className=" my-3 "><Link to="/">Home</Link></li>
                                    <li className=" my-3 "><Link to="/about">About</Link></li>
                                    <li className=" my-3 "><Link to="/products">Products</Link></li>
                                    <li className=" my-3 "><Link to="/abums">Abum</Link></li>
                                    <li className=" my-3 "><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            {/*1*/}
                            <div>
                                <h4 className="my-5 font-bold text-xl text-white">USEFUL LINKS</h4>
                                <ul className="block text-gray-600 text-lg">
                                    <li className=" my-3 "><Link to="/">Registration</Link></li>
                                    <li className=" my-3 "><Link to="/">Login</Link></li>
                                    <li className=" my-3"><Link to="/">Policy</Link></li>
                                    <li className=" my-3"><Link to="/">Terms &amp; Conditions</Link></li>
                                </ul>
                            </div>
                            {/*2*/}
                        </div>
                        {/*end footer-2*/}
                        <div>
                            <h4 className="my-5 text-white font-bold text-xl">
                                INSTAGRAM FEED
                            </h4>
                            <p className="text-white text-lg">Ứng dụng Mona Watch hiện có sẵn trên <br /> Google Play & App Store. Tải nó ngay.</p>
                            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg" alt="" className="py-5 mx-auto" />
                            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg" alt="" className=" pb-5 mx-auto " />


                        </div>
                        {/*end footer 3*/}
                    </div>
                    {/*end cols-1 footer*/}
                    
                </div>
                    <div className="border-t border-gray-400 text-white"></div>
                    <div className="flex py-5 ">
                         <p className="text-white mx-auto text-xl ">Bản quyền thuộc về.Thiết kế website anh Dương</p>
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-payment.png" alt="" className="mx-auto " />
                    </div>
            </footer>

        </div>
    );
};
export default Footer;
