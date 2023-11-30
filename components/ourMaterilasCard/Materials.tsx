import Image from 'next/image'
import { FC } from 'react'
import classes from './materials.module.css'

type props = {
	Video: string
	create_at: string
	title: string
}

const Materials: FC<props> = ({ Video, create_at, title }) => {
	return (
		<div className={`card ${classes.outmaterial}`}>
			<a href={Video} target="_blank" rel="noreferrer">
				<div className={classes.materail_img}>
					<Image
						src={`${process.env.NEXT_PUBLIC_YOUTUBE_IMG}/vi/${Video.slice(
							17,
						)}/0.jpg`}
						fill
						sizes="(max-width: 1200px) 100vw,"
						className="card-img-top"
						alt="youtubeMaterial"
					/>
				</div>
			</a>
			<div className={`card-body ${classes.cardbody}`}>
				<p className={`card-text ${classes.cardtext}`}>{title}</p>
			</div>
			<div className={classes.bottomcard}>
				<span>{create_at?.substring(0, 10)}</span>
				<a
					className={classes.link}
					href={Video}
					target="_blank"
					rel="noreferrer"
				>
					<span>подробнее</span>
				</a>
			</div>
		</div>
	)
}

export default Materials
