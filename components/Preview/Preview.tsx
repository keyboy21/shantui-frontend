import { FC } from 'react';
import Link from 'next/link';
import classes from '../SpecVehiclesCard/vehiclescard.module.css';
import { specCategory } from '@/interface/Data';
import { Zoom } from 'react-awesome-reveal';
import CardCategory from '../CardCategory/CardCategory';

type props = {
  firstBuldozer: specCategory[];
};

const Preview: FC<props> = ({ firstBuldozer }) => {
  return (
    <section>
      <div className="product-buldozer">
        <div className="container">
          <div className="row">
            {firstBuldozer.map((item) => (
              <Zoom
                key={item.id}
                triggerOnce={true}
                className="col-md-6 col-lg-3"
              >
                <CardCategory
                  id={item.id}
                  name={item.name}
                  image={item.image}
                />
              </Zoom>
            ))}
            <div className="bottom-buldozer">
              <Link href={'/Pagination/Pagination'} passHref prefetch={false}>
                <button className={classes.btn}>ПОСМОТРЕТЬ ВСЕ</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
