import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/feedback/Dialog';
import { Input } from '@/components/inputs/Input';
import { Button } from '@/components/ui/Button';

export const DialogForm = ({ bulldozerName }: { bulldozerName: string }) => {
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
				<form className="grid gap-4 py-4">
					<Input label="Имя" id="name" className="col-span-3" />
					<Input label="Телефон" id="username" className="col-span-3" />
					<Button type="submit">Отправить заявку</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};
