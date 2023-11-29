import { FC } from 'react';
import Link from 'next/link';
import classes from './buldozercard.module.css';
import Image from 'next/image';

type props = {
  name: string;
  image: string;
  id: number;
};

const BuldozerCard: FC<props> = ({ name, image, id }) => {
  return (
    <div className={`card ${classes.buldozer}`}>
      <div className={classes.buldozer_im}>
        <Image
          src={image}
          className={`card-img-top ${classes.buldozer_im_img}`}
          fill
          style={{ objectFit: 'contain' }}
          alt="Buldozer"
        />
      </div>
      <div className={`card-body ${classes.bodystyle}`}>
        <h5 className={`card-title ${classes.cardtitlestyle} `}>{name}</h5>
        <Link
          href={`/Bulldozer/${id}`}
          passHref
          prefetch={false}
          className={classes.btn}
        >
          Подробне
        </Link>
      </div>
    </div>
  );
};

export default BuldozerCard;
