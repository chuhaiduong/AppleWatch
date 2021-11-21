import React from "react";
import { IProduct } from "../model/Product";

type Props = {
    products :IProduct[];
    onRemove :(id:number) => void;
};
const Product:React.FC<Props> = (props) =>{
    return (
        <div>
            {props.products.map((item)=>{
                return item.name;
            })}
            <button onClick={() => props.onRemove(1)}>Click</button>
        </div>
    );
};
export default Product;