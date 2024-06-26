'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/feedback/AlertDialog';
import { useDialog } from '@/hooks/useDialog';
import type { FC } from 'react';
import { createContext, useContext } from 'react';

interface useDialogContext {
	openDialog: () => void;
	closeDialog: () => void;
	isOpen: boolean;
	message: string;
	title: string;
	setMessage: (message: string) => void;
	setTitle: (title: string) => void;
	openSuccesDialog: () => void;
	openErrorDialog: () => void;
}

const useDialogContext = createContext<useDialogContext>(
	{} as useDialogContext,
);
export const useDialogData = () => useContext(useDialogContext);

export const DialogProvider: FC<DialogProviderProps> = ({ children }) => {
	const {
		openDialog,
		closeDialog,
		isOpen,
		message,
		title,
		setMessage,
		setTitle,
	} = useDialog();

	const openSuccesDialog = () => {
		setTitle('Спасибо!');
		setMessage(
			'Ваше сообщение отправлено! Через некоторое время мы свяжемся с вами.',
		);
		openDialog();
	};
	const openErrorDialog = () => {
		setTitle('Ошибка!');
		setMessage('Что-то пошло не так. Попробуйте еще раз.');
		openDialog();
	};

	const value: useDialogContext = {
		isOpen,
		message,
		title,
		setMessage,
		setTitle,
		openDialog,
		closeDialog,
		openSuccesDialog,
		openErrorDialog,
	};

	return (
		<useDialogContext.Provider value={value}>
			{children}
			<AlertDialog open={isOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>{title}</AlertDialogTitle>
					</AlertDialogHeader>
					<AlertDialogDescription>{message}</AlertDialogDescription>
					<AlertDialogFooter>
						<AlertDialogAction onClick={closeDialog}>Закрыть</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</useDialogContext.Provider>
	);
};

interface DialogProviderProps {
	children: React.ReactNode;
}
