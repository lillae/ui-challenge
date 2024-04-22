import styles from '@/styles/globals.scss';
import { LoginButton, SignUpButton } from '@/ui/common/buttons';

const Header = () => {
	return (
		<header className={styles.header}>
			<SignUpButton href='#'>Sign Up</SignUpButton>
			<LoginButton href='#'>Login</LoginButton>
		</header>
	);
};

export default Header;
