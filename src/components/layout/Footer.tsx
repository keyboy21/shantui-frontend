import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import NextImage from 'next/image';
import Clock from '../../../public/clock.svg';
import Logo from '../../../public/footer-logo.svg';
import Instagram from '../../../public/instagram.svg';
import Mail from '../../../public/mail.svg';
import Phone from '../../../public/phone.svg';
import Telegram from '../../../public/telegram.svg';
import Telegram2 from '../../../public/telegram2.svg';
import Youtube from '../../../public/youtube.svg';

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-shantuiblack py-24">
			<Container className="grid grid-cols-1 lg:grid-cols-3 *:text-white">
				<div className="flex flex-col gap-8 items-center lg:items-start">
					<NextImage src={Logo} alt="logo" />
					<Paragraph
						className="text-white text-balance text-center lg:text-start"
						size="lg"
						weight="medium"
					>
						Мы заботимся о вашем бизнесе и своей репутации
					</Paragraph>
					<ul className="flex gap-5">
						<li>
							<a
								className=""
								href="https://t.me/sttuzb"
								target="_blank"
								rel="noreferrer"
							>
								<NextImage
									width={50}
									height={50}
									className=""
									src={Telegram}
									alt="telegram"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/stt_uz"
								target="_blank"
								rel="noreferrer"
							>
								<NextImage
									width={50}
									height={50}
									src={Instagram}
									alt="instagram"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/channel/UCbVYAfWBA78oYYu3ei4OWcA/videos"
								target="_blank"
								rel="noreferrer"
							>
								<NextImage width={50} height={50} src={Youtube} alt="youtube" />
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-start gap-y-7 lg:items-start mt-7 lg:mt-0">
					<Heading
						className="self-center lg:self-start"
						size="2xl"
						weight="bold"
					>
						СПЕЦТЕХНИКА
					</Heading>
					<div className="flex items-center gap-5">
						<NextImage src={Clock} alt="clock" />
						<div>
							<Paragraph className="text-white mb-1" size="lg" weight="medium">
								Рабочее время:
							</Paragraph>
							<span className="text-base">
								Пн. - Сб. <time>09:00 - 18:00</time>
							</span>
						</div>
					</div>
					<div className="flex items-center gap-5">
						<NextImage src={Telegram2} alt="telegram" />
						<div>
							<Paragraph className="text-white mb-1" size="lg" weight="medium">
								Telegram bot
							</Paragraph>
							<a
								href="https://t.me/shantui_robot"
								rel="noreferrer"
								target="_blank"
								className="text-base"
							>
								@shantui_robot
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-7 items-start lg:items-start mt-7 lg:mt-0">
					<Heading
						className="self-center lg:self-start"
						size="2xl"
						weight="bold"
					>
						КОНТАКТЫ
					</Heading>
					<div className="flex items-center gap-5">
						<NextImage src={Phone} alt="phone" />
						<div className="spa">
							<Paragraph className="text-white mb-1" size="lg" weight="medium">
								Телефон:
							</Paragraph>
							<ul className="space-y-1">
								<li>
									<a
										href="tel:+99897 007 08 10"
										rel="noreferrer"
										target="_blank"
										className="text-base"
									>
										+99897 007 08 10
									</a>
								</li>
								<li>
									<a
										href="tel:+99897 007 08 20"
										rel="noreferrer"
										target="_blank"
										className="text-base"
									>
										+99897 007 08 20
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex items-center gap-5">
						<NextImage src={Mail} alt="mail" />
						<div>
							<Paragraph className="text-white mb-1" size="lg" weight="medium">
								Email:
							</Paragraph>
							<a
								href="mailto:spestexnikatashkent@gmail.com"
								rel="noreferrer"
								target="_blank"
								className="text-sm lg:text-sm xl:text-base text-balance"
							>
								spestexnikatashkent@gmail.com
							</a>
						</div>
					</div>
				</div>
			</Container>
			<Container className="mt-7">
				<hr />
				<p className="text-white mt-5 text-center">
					© 2019 - {currentYear} СП ООО "SPETS TEXNIKA TASHKENT"
				</p>
			</Container>
		</footer>
	);
};
