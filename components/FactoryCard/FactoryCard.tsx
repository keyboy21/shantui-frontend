import { useState, FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './factorycard.module.css';
import MyButton from '../Mybutton/Button';
import Modal from '../Modal/Modal';

type props = {
  id: number;
  image: string;
  name: string;
};

const FactoryCard: FC<props> = ({ id, image, name }) => {
  const [Catmodal, setCatModal] = useState<boolean>(false);

  const getImage = () => {
    setCatModal(true);
  };
  return (
    <div className={`card ${classes.veh_card}`}>
      <div className={classes.veh_img}>
        <Image
          onClick={() => getImage()}
          src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw"
          priority
          fill
          className="card-img-top"
          alt="factory"
        />
      </div>
      <Modal Catmodal={Catmodal} setCatModal={setCatModal} image={image} />
      <div className={`card-body ${classes.veh_body}`}>
        <h5 className={`card-title ${classes.veh_title}`}>{name}</h5>
        <Link href={`/AboutFactory/${id}`} passHref>
          <MyButton>Подробне</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default FactoryCard;
