'use client';
import { sendApplication } from '@/actions/sentApplication';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/feedback/Dialog';
import { Input } from '@/components/inputs/Input';
import { Button } from '@/components/ui/Button';
import { useDialogData } from '@/contexts/use-alert-dialog';
import { useRef } from 'react';

export const DialogForm = ({ productName }: { productName: string }) => {
	// ==== Dialog Context ==== //
	const { openSuccesDialog, openErrorDialog } = useDialogData();

	const formRef = useRef<null | HTMLFormElement>(null);
	const onSend = async (formData: FormData) => {
		formRef.current?.reset();
		const response = await sendApplication(formData, productName);
		if (response.ok) {
			openSuccesDialog();
		} else {
			openErrorDialog();
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button
					type="button"
					className="text-primary font-medium underline text-base"
				>
					Оставить заявку на эту технику
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Заявкa</DialogTitle>
				</DialogHeader>
				<form action={onSend} ref={formRef} className="grid gap-4 py-4">
					<Input
						required={true}
						label="Имя"
						name="name"
						id="name"
						className="col-span-3"
					/>
					<Input
						required={true}
						type="tel"
						placeholder="998931234567"
						label="Телефон"
						name="phone"
						id="phone"
						className="col-span-3"
					/>
					<Button type="submit">Отправить заявку</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};
