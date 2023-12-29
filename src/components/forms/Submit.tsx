import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/Button';

export function Submit() {
	const { pending } = useFormStatus();
	return (
		<Button className="mt-5 h-12" type="submit" disabled={pending}>
			{pending ? 'Отправка...' : 'Отправить'}
		</Button>
	);
}
