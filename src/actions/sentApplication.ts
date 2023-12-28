'use server';

export const sendApplication = async (formData: FormData, bulldozername: string) => {
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
            ok: true,
            message: 'Сообщение не отправлено',
        };
    }

    console.log(rawFormData)
    console.log(bulldozername)

    // const res = await fetch(`${BASE_URL}/api/contact/`, {
    //     method: 'post',
    //     body: formData,
    // });

    // if (!res.ok) {
    //     return {
    //         ok: false,
    //         message: 'Сообщение не отправлено',
    //     };
    // }

    return {
        ok: true,
        message: 'Сообщение отправлено',
    };
};
