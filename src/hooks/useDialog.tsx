'use client';
import { useCallback, useState } from 'react';

export const useDialog = (initialState = false, options?: UseDialogOptions) => {
	const { title = '', message = '' } = options || {};

	const [isOpen, setIsOpen] = useState(initialState);
	const [dialogTitle, setDialogTitle] = useState(title);
	const [dialogMessage, setDialogMessage] = useState(message);

	const onOpenDialog = useCallback((newTitle?: string, newMessage?: string) => {
		if (newTitle) {
			setDialogTitle(newTitle);
		}
		if (newMessage) {
			setDialogMessage(newMessage);
		}
		setIsOpen(true);
	}, []);

	const onCloseDialog = useCallback(() => {
		setIsOpen(false);
		if (message) {
			setDialogMessage(message);
		}
		if (title) {
			setDialogTitle(title);
		}
	}, [message, title]);

	return {
		isOpen,
		title: dialogTitle,
		message: dialogMessage,
		openDialog: onOpenDialog,
		closeDialog: onCloseDialog,
		setTitle: setDialogTitle,
		setMessage: setDialogMessage,
		setIsOpen,
	};
};

interface UseDialogOptions {
	title?: string;
	message?: string;
}
