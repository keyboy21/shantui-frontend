import { BaseInput } from '@/components/inputs/BaseInput';
import { TextArea } from '@/components/inputs/TextArea';
import { Button } from '@/components/ui/Button';

export const ContactForm = () => {
	return (
		<form className="flex flex-col">
			<div className="flex flex-col md:flex-row md:justify-between gap-6">
				<BaseInput
					autoComplete="name"
					className="w-full"
					required={true}
					label="Имя"
					id="name"
					type="text"
					name="name"
				/>
				<BaseInput
					placeholder="998931234567"
					autoComplete="tel"
					required={true}
					label="Телефон"
					id="phone"
					type="number"
					pattern="[0-9]"
					name="phone"
				/>
			</div>
			<BaseInput
				placeholder="example@gmail.com"
				autoComplete="email"
				required={true}
				labelClassName="my-3"
				label="Почта"
				id="email"
				type="email"
				name="email"
			/>
			<TextArea required={true} id="message" name="message" label="Собшения" />
			<Button className="mt-5 h-12">Отправить</Button>
		</form>
	);
};
