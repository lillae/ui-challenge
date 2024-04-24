import Link from 'next/link';
import { LinkProps } from '@/lib/types/common-types';

const Logo = ({ children, href }: LinkProps) => {
	return (
		<Link href={href}>
			<strong className='logo'>{children}</strong>
		</Link>
	);
};

export default Logo;
