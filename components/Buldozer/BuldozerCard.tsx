import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import classes from './buldozercard.module.css';

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
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
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
