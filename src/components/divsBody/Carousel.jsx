import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
register();
const Carousel = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
        pagination: true,
        // These are new...
        injectStyles: [
          ` .swiper-button-next,
            .swiper-button-prev {
              padding: 8px 16px;
              color: white;
              position:absolute;
              top:80%;
              margin-inline:30%;
            }
            .swiper-pagination-bullet{
                width: 0px;
                height: 0px;
                background-color: transparent;
              }
            .swiper{
                justify-content: center;
            }
        `,
        ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);
    return (
        <div className="carousel">
            <swiper-container ref={swiperRef} init="false"> 
                <swiper-slide><img className="rounded carousel" src="https://img.freepik.com/foto-gratis/vista-verano-pradera-tierras-altas_1398-5046.jpg?w=1380&t=st=1686958297~exp=1686958897~hmac=d14d2586f2ce4d393f50406b1ced99e183fe875f3f369a5acf453909931549c6" alt="" /></swiper-slide>
                <swiper-slide><img className="rounded carousel" src="https://img.freepik.com/foto-gratis/altas-montanas-colinas-cubiertas-bosques_181624-15442.jpg?w=1380&t=st=1686958310~exp=1686958910~hmac=34606fe572ded56ecab993ea8f898e2e9c8cc0ad08bf09172e79f5e9004e719c" alt="" /></swiper-slide>
            </swiper-container>  
        </div>
  )
}

export default Carousel
