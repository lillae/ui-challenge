import Link from 'next/link';
import '@/styles/common.scss';

type LoginBtnProps = {
	children: React.ReactNode;
	href: string;
};
const LoginButton = ({ children, href }: LoginBtnProps) => {
	return (
		<Link href={href} className='loginBtn'>
			{children}
		</Link>
	);
};

export default LoginButton;
