import React from "react";
import { IProduct } from "../model/Product";
import { Link } from "react-router-dom";
type Props = {
    products: IProduct[];
    onRemove: (id: number) => void;
};
const Product: React.FC<Props> = (props) => {
    return (
        <div>
            <h1 className="text-3xl font-bold ml-11 pt-24 py-3">Tất cả các sản phẩm</h1>
            <div className="grid grid-cols-4 gap-2">
                {props.products.map((item, index) => {
                    return (
                        
                            <div className="py-3 container mx-auto text-center border-2">
                                <img src={item.image} />
                                <p className="font-bold text-xl">{item.name}</p>
                                <p className="text-yellow-600">{item.price}</p>
                               
                                <Link to={`/product/${item._id}`}><button className="bg-yellow-600 py-2">THÊM VÀO GIỎ</button></Link>
                            </div>                   
                    );
                })}
            </div>
        </div>
    );
};
export default Product;