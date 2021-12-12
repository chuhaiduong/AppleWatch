import React from "react";
import { ICategory } from "../../model/Category";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
type Props = {
    categoris: ICategory[];
    // onRemove: (id: number) => void;
};
const { Header, Content, Footer, Sider } = Layout;
const AdminCategory: React.FC<Props> = (props) => {
    return (

        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        STT
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        <Link to="/admin/category" >Them</Link>
                                    </th>
                                    {/* <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {props.categoris.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {/* <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={item.image} alt="" />
                                                    </div> */}
                                                    <div className="">
                                                        <div className="text-sm font-medium text-gray-900">{index+1}</div>
                                                        {/* <div className="text-sm text-gray-500">{item.price}</div> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.name}</div>
                                               
                                            </td>
                                            
                                            {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a> */}

                                            <td>
                                                {/* <button onClick={() => props.onRemove(item._id)} className="pr-4">DELETE</button> */}
                                                <Link to={`/admin/updateproduct/${item._id}`}>Edit</Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminCategory;
