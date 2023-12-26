'use server'
import { BASE_URL } from "@/configs/env.config"

export const sendContactMessage = async (formData: FormData) => {

    const rawFormData = {
        name: formData.get('name') as string | null,
        phone: formData.get('phone') as string | null,
        email: formData.get('email') as string | null,
        message: formData.get('message') as string | null,
    }

    if (rawFormData.name === null || rawFormData.phone === null || rawFormData.email === null || rawFormData.message === null) {
        return {
            ok: true,
            message: 'Сообщение не отправлено'
        }
    }

    const res = await fetch(`${BASE_URL}/api/contact/`, {
        method: "post",
        body: formData
    })

    if (!res.ok) {
        return {
            ok: false,
            message: 'Сообщение не отправлено'
        }
    }

    return {
        ok: true,
        message: 'Сообщение отправлено'
    }

}

