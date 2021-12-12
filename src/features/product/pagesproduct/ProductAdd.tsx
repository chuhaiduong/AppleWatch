import React from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../model/Product"

type FormValues = {
  _id: number;
  name: string;
  image: string;
  price: number;
  discount:number;
  description:string;
};


type Props = {
  products: IProduct[];

  onAdd: (product: FormValues) => void;
};


const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
        name: {
          type: "required",
          message: "This is required."
        }
      }
      : {}
  };
};

const ProductAdd: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // console.log(data);
    props.onAdd(data);
    navigate("/admin/adminproducts", { replace: true });
  };
  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name",
         { required: true })} />
        {errors?.name && <p>{errors.name.message}</p>}
        <input type="number" {...register("price", { required: true })} />
        {errors.price && <p>Field is required</p>}
        <button>Add</button>
      </form> */}

      <form onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen p-6 bg-gray-100 flex items-center justify-center" id="form-add">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-6">Welcome to more products</h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Hãy thêm sản phẩm của bạn tại đây!</p>
                  <p>Vui lòng điền vào các trường</p>
                  <p>(Please fill out all the fields.)</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label > Name </label>
                      <input type="text" {...register("name",{ required: true })}  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                        placeholder="Tên Sản Phẩm" />
                         {errors?.name && <p>{errors.name.message}</p>}
                    </div>

                    <div className="md:col-span-5">
                      <label >Image</label>
                      <input type="text"  {...register("image",{ required: true })}  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                        placeholder="image" />
                        {errors?.image && <p>{errors.image.message}</p>}
                    </div>

                    <div className="md:col-span-3">
                      <label >Price</label>
                      <input type="number" {...register("price", { required: true })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                         placeholder="Giá" />
                          {errors.price && <p>Field is required</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label >Discount</label>
                      <input type="number"  {...register("discount",{ required: true })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Giảm Giá" />
                        {errors?.discount && <p>{errors.discount.message}</p>}
                    </div>

                    <div className="md:col-span-5">
                      <label >Description</label>
                      <input type="text" {...register("description",{ required: true })}
                        className="h-20 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Mô Tả" />
                        {errors?.description && <p>{errors.description.message}</p>}
                    </div>


                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit">Submit</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="../index.html" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
            <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee"
              className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
