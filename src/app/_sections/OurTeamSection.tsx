import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import NextImage from 'next/image';
import Accauntant from '../../../public/Team/chief-accountant.png';
import Mechanic from '../../../public/Team/chief-mechanical-engineer.png';
import Cook from '../../../public/Team/cook.webp';
import Director from '../../../public/Team/general-director.png';
import Olim from '../../../public/Team/olim-salesmanagerjpg.jpg';
import Zam from '../../../public/Team/Abduvali-zam.jpg';
import Mahliyo from '../../../public/Team/mahliyo-ofismanager.jpg';
import Mansur from '../../../public/Team/mansur-smm.jpg';
// import MarketingManager from '../../../../public/Team/marketing-manager.webp';
// import OfficeManager from '../../../../public/Team/office-manager.webp';
// import SalesManager from '../../../../public/Team/sales-manager.webp';
// import SalesManager2 from '../../../../public/Team/sales-manager2.webp';
import TenderManager from '../../../public/Team/tender-procurement-manager.webp';

export const TeamSection = () => {
	return (
		<section className="mt-20">
			<Heading
				as="h2"
				className="text-center mb-10 text-shantuiblack"
				weight="bold"
				size="3xl"
			>
				Наша команда
			</Heading>
			<Container className="flex flex-wrap gap-10 md:gap-2 md:gap-y-8 lg:gap-3 xl:gap-x-4 xl:gap-y-9 justify-around *:text-center *:text-balance *:text-[#464646]">
				<div className="flex flex-col items-center">
					<NextImage
						width={203}
						height={203}
						src={Director}
						alt="general-director"
					/>
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Каримбердиев Мирзабек
					</Heading>
					<Paragraph size="sm">Генеральный директор</Paragraph>
				</div>
				<div className="flex flex-col items-center">
					<NextImage
						width={203}
						height={203}
						src={Accauntant}
						alt="general-accauntant"
					/>
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Турсунова Хилола
					</Heading>
					<Paragraph size="sm">Главный бухгалтер</Paragraph>
				</div>
				<div className="flex flex-col items-center">
					<NextImage
						width={203}
						height={203}
						src={Mechanic}
						alt="general-mechanic"
					/>
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Алламбергенов Амангелди
					</Heading>
					<Paragraph size="sm">Главный механик</Paragraph>
				</div>
				<div className="flex flex-col items-center">
					<NextImage width={203} height={203} src={Olim} alt="sales-manager" />
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Олим
					</Heading>
					<Paragraph size="sm">Менеджер по продажам</Paragraph>
					<a
						href="tel:+99888 140 48 44"
						target="_blank"
						rel="noreferrer"
						className="mt-2"
					>
						+99888 140 48 44
					</a>
				</div>
				<div className="flex flex-col items-center">
					<NextImage width={220} height={220} src={Zam} alt="sales-manager" />
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Абдували Раджабов
					</Heading>
					<Paragraph size="sm">Зам директор</Paragraph>
					<a
						href="tel:+99888 140 48 44"
						target="_blank"
						rel="noreferrer"
						className="mt-2"
					>
						+99899 305 01 10
					</a>
				</div>
				<div className="flex flex-col items-center">
					<NextImage
						width={203}
						height={203}
						src={Mahliyo}
						alt="office-manager"
					/>
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Истамова Махлие
					</Heading>
					<Paragraph size="sm">Менеджер офиса</Paragraph>
					<a
						href="tel:+99888 140 48 44"
						target="_blank"
						rel="noreferrer"
						className="mt-2"
					>
						+99897 007 08 30
					</a>
				</div>
				<div className="flex flex-col items-center">
					<NextImage
						width={203}
						height={203}
						src={Mansur}
						alt="marketing-manager"
					/>
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Мансур Сулаймонов
					</Heading>
					<Paragraph size="sm">Аккаунт-менеджер СММ</Paragraph>
					<a
						href="tel:+99888 140 48 44"
						target="_blank"
						rel="noreferrer"
						className="mt-2"
					>
						+99898 306 60 11
					</a>
				</div>
				<div className="flex flex-col items-center">
					<NextImage width={203} height={203} src={Cook} alt="Повар" />
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Махкамова Нигора
					</Heading>
					<Paragraph size="sm">Повар</Paragraph>
				</div>
				<div className="flex flex-col items-center">
					<NextImage
						width={203}
						height={203}
						src={TenderManager}
						alt="tender-manager"
					/>
					<Heading className="mt-3" weight="semibold" size="lg" as="h3">
						Гуломрасулов Асилхожа
					</Heading>
					<Paragraph size="sm" className="text-[#4f4f4f]">
						Менеджер по тендерным закупам
					</Paragraph>
				</div>
			</Container>
		</section>
	);
};
