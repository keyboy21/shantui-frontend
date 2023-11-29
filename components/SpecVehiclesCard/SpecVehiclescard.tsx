import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import classes from './vehiclescard.module.css';

type props = {
	name: string;
	image: string;
	id: number;
};

const SpecVehiclescard: FC<props> = ({ name, image, id }) => {
	return (
		<div className={`card ${classes.veh_card}`}>
			<div className={classes.veh_img}>
				<Image
					src={image}
					className={`card-img-top ${classes.veh_im_img}`}
					fill
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
					style={{ objectFit: 'contain' }}
					alt="bulldozer"
				/>
			</div>
			<div className={`card-body ${classes.veh_body}`}>
				<h5 className={`card-title ${classes.veh_title}`}>{name}</h5>
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

export default SpecVehiclescard;
