import { read } from '../api/products';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// type product = {
//     id: any;
//     name: string;
//     image: string;
//     price: number;
//     discount:number;
//     description:string;
   
// };
const DetailProduct:any = () => {
    
    const { id } = useParams();
    const iidNum:any =id
  const [product, setProduct] = useState({
    image:'',
    name:'',
    price:'',
    description:'',
    discount:''
  });
  useEffect(() => {
    // khai báo hàm getProduct
    const getProduct = async () => {
      try {
        // call API lấy thông tin sản phẩm thông qua ID gửi lên
        const { data } = await read(iidNum);
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
    return (
       <div>
          {/* <img src={product.image} /> */}
           {product.name}

           <div className="container mx-auto max-w-7xl mt-36">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <div ><img src={product.image} style={{ width: 350, height: 450 }} /></div>
                    </div>
                    <div className="col-span-8 mx-5">
                        <div>

                            <div className="border-b">
                                <h1 className="text-4xl "> {product.name} </h1>
                                <span className="text-base">Thương Hiệu : <span className="font-medium "> Classic </span> </span>
                                <span className="text-base mx-5">Mã sản phẩm : <span className="font-medium ">MNB4XyZ  </span> </span>
                            </div>
                            <div>
                              
                                <div className="my-3 flex">
                                    <label className="py-5">Màu sắc</label>
                                    <select className="my-5 py-2 w-full border">
                                        <option value="">Trắng</option>
                                        <option value="">Đỏ</option>
                                        <option value="">Vàng</option>
                                    </select>
                                </div>
                                <div className="my-5">
                                    SKU:	79481
                                    CATEGORY:	Armchairs
                                    TAGS:	chair, living room, sofas
                                </div>
                                <div>
                                    <button className="bg-blue-300 text-white px-5 py-3 hover:bg-red-400">Thêm Vào Giỏ Hàng</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="text-2xl">Thông tin chi tiết</h2>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h3>Đánh giá sản phẩm</h3>
                    <input type="text" className="w-full py-3 border " />
                    <button className="bg-blue-300 px-6 rounded py-2 mt-3">Gửi</button>
                </div>
            </div>
       </div>
    )
}

export default DetailProduct


