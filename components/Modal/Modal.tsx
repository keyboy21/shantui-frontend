import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';
import classes from './modal.module.css';

type props = {
	Catmodal: boolean;
	setCatModal: Dispatch<SetStateAction<boolean>>;
	image: string;
};

const MyModal: FC<props> = ({ Catmodal, setCatModal, image }) => {
	const rootClasses = [classes.myModal];

	if (Catmodal) {
		rootClasses.push(classes.active);
	}
	const removeModal = () => {
		setCatModal(false);
	};

	return (
		<div className={rootClasses.join(' ')} onClick={removeModal}>
			<div
				className={classes.modalContent}
				onClick={(e) => e.stopPropagation()}
			>
				<Image
					src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
					className="card-img-top"
					sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw"
					priority
					fill
					alt="factory"
				/>
			</div>
		</div>
	);
};

export default MyModal;
