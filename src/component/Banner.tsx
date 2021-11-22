import { Carousel } from 'antd';
import { relative } from 'path';
import './Baner.css';
import baner2 from '../images/slide-bg-1.jpg';
import baner4 from '../images/slide-bg-2.jpg';



const Banner: React.FC = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div className="slideItem"> 
                        <img src={baner4}  />   
                        <div className="slideContent">
                            <h4 >Mona Watch</h4>
                            <h1>Đồng hồ Classico</h1>
                            <p>Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương <br /> hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách,<br /> kiểu dáng, màu sắc, kích cỡ...</p>
                            <a className="slideButton">
                                <span>XEM SẢN PHẨM</span>
                            </a>
                        </div>            
                    </div>
                </div>
                <div>
                    <div >
                    <div className="slideItem"> 
                        <img src={baner2}  />   
                        <div className="slideContent">
                            <h4>Mona Watch</h4>
                            <h1>Đồng hồ Classico</h1>
                            <p>Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương <br /> hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách,<br /> kiểu dáng, màu sắc, kích cỡ...</p>
                            <a className="slideButton">
                                <span>XEM SẢN PHẨM</span>
                            </a>
                        </div>            
                    </div>

                    </div>
                </div>
               
                        
            </Carousel>
        </div>
    )
}

export default Banner