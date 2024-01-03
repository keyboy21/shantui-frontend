import Instagram from '../../../../public/FixedLinks/instagram-fixed.svg';
import YouTube from '../../../../public/FixedLinks/youtube-fixed.svg';
import FaceBook from '../../../../public/FixedLinks/facebook-fixed.svg';
import NextImage from 'next/image';

export const SocialLinks = () => {
	return (
		<div className="hidden lg:flex flex-col fixed z-40 top-[25%] left-5 gap-5">
			<a
				href="https://www.instagram.com/stt_uz/"
				target="_blank"
				rel="noreferrer"
				className="group"
			>
				<NextImage
					src={Instagram}
					alt="instagram"
					className="rounded-md border border-[#dbdbdb] size-11 group-hover:scale-110 transition-transform"
				/>
			</a>
			<a
				href="https://www.youtube.com/channel/UCbVYAfWBA78oYYu3ei4OWcA/videos"
				target="_blank"
				rel="noreferrer"
				className="group"
			>
				<NextImage
					src={YouTube}
					alt="youtube"
					className="rounded-md border border-[#dbdbdb] size-11 group-hover:scale-110 transition-transform"
				/>
			</a>
			<a
				href="https://www.facebook.com/sttuzb"
				target="_blank"
				rel="noreferrer"
				className="group"
			>
				<NextImage
					src={FaceBook}
					alt="facebook"
					className="rounded-md border border-[#dbdbdb] size-11 group-hover:scale-110 transition-transform"
				/>
			</a>
		</div>
	);
};
