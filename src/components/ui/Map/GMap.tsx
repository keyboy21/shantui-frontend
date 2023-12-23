import { cn } from '@/utils/cn.util';
import type { ComponentProps, FC } from 'react';

export const GMap: FC<MapProps> = ({ className }, ref) => {
	return (
		<iframe
			src={
				'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d379.7909178940601!2d69.22761471485043!3d41.24439746495347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fb81d3b6c56450e!2z0J7QntCeICJTcGV0cyBUZXhuaWthIFRhc2hrZW50Ig!5e0!3m2!1suz!2s!4v1649495601193!5m2!1suz!2s'
			}
			className={cn('h-full w-full', className)}
			title="Shantui position"
			loading="lazy"
			referrerPolicy="no-referrer"
		/>
	);
};

type MapProps = ComponentProps<'iframe'>;
