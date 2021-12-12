import { IProduct } from "../model/Product";
import instance from "./instance";

export const list =() =>{
    const url ="/products";
    return instance.get(url);
};
export const create = (product:IProduct) =>{
    const url ="/product";
    return instance.post(url,product);
};
export const remove = (id: number) =>{
    const url = "/product/" + id;
    return instance.delete(url);
};
export const read = (id: number) =>{
    const url="/product/" + id ;
    return instance.get(url);
};
export const update = (product:IProduct) =>{
    const url ="/updateproduct/" + product._id;
    return instance.put(url,product);
}