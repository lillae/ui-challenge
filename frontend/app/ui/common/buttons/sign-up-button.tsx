import Link from 'next/link';
import '@/styles/common.scss';

type SignUpBtnProps = {
	children: React.ReactNode;
	href: string;
};
const SignUpButton = ({ children, href }: SignUpBtnProps) => {
	return (
		<Link href={href} className='signUpBtn'>
			{children}
		</Link>
	);
};

export default SignUpButton;
