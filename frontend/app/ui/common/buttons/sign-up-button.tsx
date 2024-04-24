import Link from 'next/link';


import { LinkProps } from '@/lib/types/common-types';

const SignUpButton = ({ children, href }: LinkProps) => {
	return (
		<Link href={href} className='signup-btn'>
			{children}
		</Link>
	);
};

export default SignUpButton;
