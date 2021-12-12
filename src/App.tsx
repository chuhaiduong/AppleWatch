import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { IProduct } from './model/Product';
import {ICategory} from './model/Category';
import {list,create,remove, update} from "./api/products";
import {listcate,createcate} from "./api/category"
import { ToastContainer, toast } from "react-toastify";
import Router from './Router';


import 'antd/dist/antd.css'
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { Route } from 'react-router';
import { toStatement } from '@babel/types';


export default function App() {
  // const [count,setCount] = useState<number | null>(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categoris, setCategory] = useState<ICategory[]>([]);
  
  useEffect(() => {
    list().then((response) => setProducts(response.data));
    listcate().then((response) => setCategory(response.data));
  }, []);

  const onHandleRemove = (id: number) => {
  
    remove(id).then((response: AxiosResponse) =>{
      setProducts(products.filter((item) => item._id !== response.data));
      toast.success("Da xoa thành công");
    })
  };

  const onHandleAdd = (product: IProduct):void =>  {
    console.log("App", product)
    create(product).then((response: AxiosResponse) =>{
     setProducts([...products ,response.data]);
     toast.success("Đã thêm sản phẩm thành công");

    });
  };

  const onHandleUpdate = (product: IProduct) => {
   
    update(product).then((response: AxiosResponse) => {
       
        const newProducts = products.map((item) =>
         
          item._id === response.data._id ? response.data : item
        );
       
        setProducts(newProducts);
        toast.success("Cập nhật sản phẩm thành công");
      })
      .catch((error) => toast.error(error.response.data));
  };

  const onHandleAddCate = (category: ICategory):void =>  {
    console.log("App", category)
    createcate(category).then((response: AxiosResponse) =>{
      setCategory([...categoris ,response.data]);
      toast.success("Đã thêm danh muc thành công");

    });
  };
  
  return (
    <div className="App">
      <hr />
      {/* <AddProductFrom onAddProduct={onHandleAdd} /> */}
      {/* <Product products ={products} onRemove={onHandleRemove} /> */}
     
      <Router products ={products} categoris ={categoris}  onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} onCate={onHandleAddCate} />
      <ToastContainer />
    </div>
  );
}

//..person, spread operator => clone code ve no nhu kieu coppy objeact
// componentDidMount => sau khi render xong thi duoc goi 1 lan
// componentDidUpdate => sau khi state / props thay doi thi duoc goi