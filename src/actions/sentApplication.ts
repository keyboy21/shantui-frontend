'use server';

export const sendApplication = async (
	formData: FormData,
	bulldozername: string,
) => {
	const rawFormData = {
		name: formData.get('name') as string | null,
		phone: formData.get('phone') as string | null,
	};

	if (
		rawFormData.name === null ||
		rawFormData.phone === null ||
		bulldozername === null
	) {
		return {
			ok: false,
			message: 'Некоторые данные не заполнены',
		};
	}

	const Message = `Спец Техники 🚜🌐%0AМарка:${bulldozername}%0A👤Имя:${rawFormData.name}%0A📞Номер телефон:${rawFormData.phone}`;

	console.log(Message);

	const res = await fetch(
		`https://api.telegram.org/bot5032490328:AAF_lcDsbBYsrrbB5mCQgO-_ivdBAjWZ5ms/sendMessage?chat_id=@ShantuiReferencesChannel&text=${Message}`,
		{
			method: 'post',
		},
	);

	if (!res.ok) {
		return {
			ok: false,
			message: 'Сообщение не отправлено',
		};
	}

	return {
		ok: true,
		message: 'Сообщение отправлено',
	};
};
