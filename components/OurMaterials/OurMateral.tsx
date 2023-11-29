import { Blogs } from '@/interface/Data';
import { FC } from 'react';
import { Zoom } from 'react-awesome-reveal';
import OurMaterilasCard from '../ourMaterilasCard/Materials';
import classes from './ourmaterial.module.css';

type props = {
	Blog: Blogs[];
};

const OurMateral: FC<props> = ({ Blog }) => {
	return (
		<section className="ourmaterial">
			<div className="container">
				<div className="row">
					<h4 className={classes.head}>Наши видеоматериалы </h4>
					{Blog.map((item) => (
						<Zoom
							key={item.id}
							delay={250}
							triggerOnce={true}
							className={`col-lg-3 col-md-6 col-sm-6 ${classes.material}`}
						>
							<OurMaterilasCard
								Video={item.Video}
								create_at={item.create_at}
								title={item.title}
							/>
						</Zoom>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurMateral;
