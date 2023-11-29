import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Loader from '../../public/MaskGroupbuldozer.png';
import classes from './cardcategory.module.css';

type props = {
	id: number;
	name: string;
	image: string;
};

const CardCategory: FC<props> = ({ id, name, image }) => {
	return (
		<div className={`card ${classes.buldozer}`}>
			<div className={classes.buldozer_im}>
				{image === null ? (
					<Image
						src={Loader}
						className="card-img-top"
						width={250}
						height={200}
						alt="Buldozer"
					/>
				) : (
					<Image
						src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
						className={`card-img-top ${classes.buldozer_picture}`}
						fill
						sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
						style={{ objectFit: 'contain' }}
						alt={name}
					/>
				)}
			</div>
			<div className={`card-body ${classes.bodystyle}`}>
				<h5 className={`card-title ${classes.cardtitlestyle} `}>{name}</h5>
				<Link href={{ pathname: '/SpecVehicles', query: { id: id } }} passHref>
					<button className={classes.btn}>подробнее</button>
				</Link>
			</div>
		</div>
	);
};

export default CardCategory;
