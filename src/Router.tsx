import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import Product from "./component/Product";
import Content from "./component/Content";
import { IProduct } from "./model/Product";

type Props = {
    products : IProduct[];
    onRemove :(id:number) => void;
};
const Router: React.FC<Props>= (props) => {
    return (
        <div>
        
        <Routes>

          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Content />} />
            <Route path="products" element={<Product {...props} />} />
          </Route>
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard " element={<div>Admin Dashboard</div>} />
            <Route path="product " element={<div>Product Manager</div>} />
          </Route>
        </Routes>
     
      </div>
    )
};
export default Router;