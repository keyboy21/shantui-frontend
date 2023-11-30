import Image from 'next/image'
import { FC } from 'react'
import { Zoom } from 'react-awesome-reveal'
import aboutPicture from '../../public/aboutGroup60.svg'
import aboutPicture3 from '../../public/aboutGroup62.svg'
import BackPicture from '../../public/back.webp'
import aboutPicture2 from '../../public/serviceGroup 61.svg'
import classes from './about.module.css'

const About: FC = () => {
	return (
		<section>
			<div className={classes.about}>
				<Image
					quality={100}
					src={BackPicture}
					alt="backgroundimg"
					fill
					style={{ objectFit: 'cover', zIndex: -1 }}
				/>
				<div className="container">
					<div className="row">
						<Zoom delay={200} triggerOnce={true} className="col-lg-4">
							<div className={classes.aboutcontent}>
								<div className="about-img">
									<Image alt="service" src={aboutPicture} />
								</div>
								<span className={classes.more}>
									Сертифицированный дилер заводов
								</span>
							</div>
						</Zoom>
						<Zoom delay={200} triggerOnce={true} className="col-lg-4">
							<div className={classes.aboutcontent}>
								<div className="about-img">
									<Image alt="service" src={aboutPicture2} />
								</div>
								<span className={classes.more}>
									Собственный магазин запчастей
								</span>
							</div>
						</Zoom>
						<Zoom delay={200} triggerOnce={true} className="col-lg-4">
							<div className={classes.aboutcontent}>
								<div className="about-img">
									<Image alt="service" src={aboutPicture3} />
								</div>
								<span className={classes.more}>
									Бесплатный сервисный центр до 1,5 года
								</span>
							</div>
						</Zoom>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
