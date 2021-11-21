import { Carousel } from 'antd';

const contentStyle = {
    height: '500px',
    color: '#ff4040',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
};

const Banner: React.FC = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div>           
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg" />
                        
                    </div>
                </div>
                <div>
                    <div >
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg" />

                    </div>
                </div>
                        
            </Carousel>
        </div>
    )
}

export default Banner