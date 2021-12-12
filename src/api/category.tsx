import { ICategory } from "../model/Category";
import instance from "./instance";

export const listcate =() =>{
    const url ="/categories";
    return instance.get(url);
};
export const createcate = (product:ICategory) =>{
    const url ="/category/create";
    return instance.post(url,product);
};
export const removecate = (id: number) =>{
    const url = "/category/" + id;
    return instance.delete(url);
};
// export const read = (id: number) =>{
//     const url="/product/" + id ;
//     return instance.get(url);
// };
export const updatecate = (product:ICategory) =>{
    const url ="/category/" + product._id;
    return instance.put(url,product);
}