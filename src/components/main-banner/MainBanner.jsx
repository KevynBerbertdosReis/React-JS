import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TenisNike from "../../assets/Banner/TenisNike.png";

import "swiper/css";
import "swiper/css/pagination";
import "./mainBanner.css";


export default function mainBanner() {
  const bannerContent = [
    {
      title: 'Queima de estoque Nike 🔥',
      subtitle: 'Melhores ofertas personalizadas',
      btnTitle: 'Ver Ofertas',
      img: TenisNike,
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.'
    },

    {
      title: 'Queima de estoque Adidas 🔥',
      subtitle: 'Melhores ofertas personalizadas',
      btnTitle: 'Ver Ofertas',
      img: TenisNike,
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.'
    },

    {
      title: 'Queima de estoque Vans 🔥',
      subtitle: 'Melhores ofertas personalizadas',
      btnTitle: 'Ver Ofertas',
      img: TenisNike,
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.'
    },
  ];

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {bannerContent.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="banner-content">
              <div className="banner-info">
                <h5>{item.subtitle}</h5>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="btn-banner">{item.btnTitle}</button>
              </div>
              <div className="banner-img">
                <img src={item.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
