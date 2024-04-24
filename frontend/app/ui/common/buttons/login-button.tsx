import Link from 'next/link';

import { LinkProps } from '@/lib/types/common-types';

const LoginButton = ({ children, href }: LinkProps) => {
	return (
		<Link href={href} className='login-btn'>
			{children}
		</Link>
	);
};

export default LoginButton;
