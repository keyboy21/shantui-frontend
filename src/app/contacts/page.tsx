import { ContactForm } from '@/components/forms/ContactForm';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { DialogProvider } from '@/contexts/use-alert-dialog';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Контакты',
};

const ContactsPage = () => {
	return (
		<section className="pb-24">
			<Heading
				className="text-center text-shantuiblack mt-[150px] mb-14"
				size="5xl"
				weight="bold"
			>
				Контакты
			</Heading>
			<Container>
				<div className="shadow-sm px-7 bg-white py-16 xl:px-20">
					<Heading
						as="h2"
						className="text-center text-[#4f4f4f] mb-3 xl:text-5xl"
						size="xl"
						weight="bold"
					>
						Свяжитесь с нами
					</Heading>
					<Paragraph size="lg" className="text-center text-gray-600 mb-5">
						Наши менеджеры свяжитесь с Вами в течении 5 минут!
					</Paragraph>
					<DialogProvider>
						<ContactForm />
					</DialogProvider>
				</div>
			</Container>
		</section>
	);
};

export default ContactsPage;
