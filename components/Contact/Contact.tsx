import { FC } from 'react';
import classes from './contact.module.css';

const Contact: FC = () => {
	return (
		<>
			<div className={`container ${classes.contacts}`}>
				<div className="row">
					<div className="col-12">
						<h2 className={classes.adres}>Наш адрес</h2>
						<iframe
							title="Spets Texnika Tashkent"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d379.7909178940601!2d69.22761471485043!3d41.24439746495347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fb81d3b6c56450e!2z0J7QntCeICJTcGV0cyBUZXhuaWthIFRhc2hrZW50Ig!5e0!3m2!1suz!2s!4v1649495601193!5m2!1suz!2s"
							width="100%"
							height="400px"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
