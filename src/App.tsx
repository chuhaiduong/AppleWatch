import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import { IProduct } from './model/Product';
import AddProductFrom from './AddProductFrom';
import Product from './component/Product';
import {list} from './api/products';

import Router from './Router';
import 'antd/dist/antd.css'
import "./styles.css";


export default function App() {
  // const [count,setCount] = useState<number | null>(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  
  useEffect(() => {
    list().then((response) => setProducts(response.data));
  }, []);

  const onHandleRemove = (id: number) => {
    console.log("App", id);
  };

  const onHandleAdd = (product: { name: string }) => {
    console.log("App", product)
  };


  return (
    <div className="App">
      <hr />
      {/* <AddProductFrom onAddProduct={onHandleAdd} /> */}
      {/* <Product products ={products} onRemove={onHandleRemove} /> */}
     
      <Router products ={products} onRemove={onHandleRemove} />


    </div>
  );
}




//..person, spread operator => clone code ve no nhu kieu coppy objeact
// componentDidMount => sau khi render xong thi duoc goi 1 lan
// componentDidUpdate => sau khi state / props thay doi thi duoc goi