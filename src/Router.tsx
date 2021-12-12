import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
// import Product from "./component/Product";
import Content from "./component/Content";
import About from "./pages/About";
import Product from './pages/Product';
import Blogs from './pages/Blogs';
import Contact from "./pages/Contact";
import AdminProducts from "./pages/admin/AdminProducts";
import ProductAdd from "./features/product/pagesproduct/ProductAdd";
import { IProduct } from "./model/Product";
import {ICategory} from "./model/Category"
import EditProduct from "./features/product/pagesproduct/EditProduct";
import DetailProduct from "./pages/DetailProduct";
import Signin from "./features/auth/Signin";
import Signup from "./features/auth/Signup";
import AdminCategory from "./pages/category/AdminCategory";
import AddCategory from "./features/product/category/AddCategory";


// const AddProduct = React.lazy(() =>
//   import("./features/product/pagesproduct/AddProduct")
// );
// const EditProduct = React.lazy(() =>
//   import("./features/product/pagesproduct/EditProduct")
// );

type Props = {
  products: IProduct[];
  categoris : ICategory[];
  onRemove: (id: number) => void;
  onAdd: (product: IProduct) => void;
  onUpdate: (product: IProduct) => void;
  onCate:(category: ICategory) =>void;
};

const Router: React.FC<Props> = (props) => {
  return (
    <div>

      <Routes>

        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Content />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product {...props} />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<DetailProduct  {...props} />}  />
          {/* <Route path="products" element={<Product {...props} />} /> */}
        </Route>

        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />

        <Route path="admin/*" element={<LayoutAdmin />}>
          <Route path="adminproducts" element={<AdminProducts {...props} />} />
          <Route path="categories" element={<AdminCategory {...props} />} />
          {/* <Route path="product" element={<div>Product Manager</div>} /> */}
          <Route path="products" element={<ProductAdd {...props} />} />  
          <Route path="updateproduct/:id" element={<EditProduct {...props} />} />

           
           <Route path="category" element={<AddCategory {...props}  />} />
        </Route>
      </Routes>

    </div>
  )
};
export default Router;