import React from 'react'

const Blogs = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl py-5 ">BLOGS</h1>
            <section className="container mx-auto mt-20  mb-20">

                <div className="grid grid-cols-1 grid lg:grid-cols-3 gap-8 mt-10 px-5 ">
                    <div className="relative">
                        <div className="">
                            <a href="#"><img
                                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1 w-full"
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg" alt="" /></a>
                            <a href="" className="font-bold text-2xl text-black">Chiếc đồng hồ của những CEO quyền lực nhất thế giới</a><br />
                            <a href="" className="text-black text-lg">“Một chiếc đồng hồ nói cho người khác biết bạn là tuýp người như thế nào và giá trị của bạn ra sao”.</a>
                        </div>

                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <a href="#"><img
                                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1"
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg" alt="" /></a>
                            <a href="" className="font-bold text-2xl text-black"> 10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3</a> <br />
                            <a href="" className="text-black text-lg">Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai năm gần đây do nhu cầu giảm.</a>
                        </div>

                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <a href="#"><img
                                className="rounded-md transition duration-1000 ease-in-out hover:scale-110 transform hover:translate-y-1"
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg" alt="" /></a>
                            <a href="" className="font-bold text-2xl text-black">Chiếc đồng hồ của những CEO quyền lực nhất thế giới</a> <br />
                            <a href="" className="text-black text-lg">Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, Audemars Piguet sản xuất ra 36.000</a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs
