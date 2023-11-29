import { FC } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import classes from './partnerslider.module.css';
import Partner from '../../public/partners/image 6partner.png';
import Partner2 from '../../public/partners/image 4partner.png';
import Partner3 from '../../public/partners/image 5partner.png';
import Partner4 from '../../public/partners/image 7partber.png';
import Partner5 from '../../public/partners/image 8partner.png';

const PartnerSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="ourpartners">
        <div className="container">
          <div className="row">
            <h4 className={classes.head}>Наши партнеры </h4>
            <span className={classes.paragraph}>
              Нашими партнерами являются известные международные и местные
              компании
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.partner}>
          <Slider {...settings}>
            <div>
              <Image
                src={'/partners/image 6partner.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 4partner.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 5partner.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 7partber.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 8partner.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 4partner.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 5partner.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 7partber.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
            <div>
              <Image
                src={'/partners/image 8partner.png'}
                width={230}
                height={230}
                alt="partner"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
