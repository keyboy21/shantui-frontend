'use client';
import { sendContactMessage } from '@/actions/sendContactMessage';
import { BaseInput } from '@/components/inputs/BaseInput';
import { TextArea } from '@/components/inputs/TextArea';
import { useDialogData } from '@/contexts';
import { useRef } from 'react';
import { Submit } from './Submit';

export const ContactForm = () => {
	// ==== Dialog Context ==== //
	const { openSuccesDialog, openErrorDialog } = useDialogData();

	const formRef = useRef<null | HTMLFormElement>(null);

	const onSubmit = async (formdata: FormData) => {
		const response = await sendContactMessage(formdata);
		formRef.current?.reset();
		if (response.ok) {
			openSuccesDialog();
		} else {
			openErrorDialog();
		}
	};

	return (
		<form action={onSubmit} ref={formRef} className="flex flex-col">
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
			<Submit />
		</form>
	);
};
