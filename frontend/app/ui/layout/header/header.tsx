'use client';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { useUser, useSession } from '@clerk/nextjs';

import Logo from './logo';
import { LoginButton, SignUpButton } from '@/ui/common/buttons';

const Header = () => {
	const { user } = useUser();
	const { isSignedIn } = useSession();

	return (
		<header className='header'>
			<nav className='wrapper'>
				<Logo href='/'>Magazine</Logo>
				{isSignedIn ? (
					<>
						<div className='user-icon-box'>
							<Link href='/dashboard' className='nav-link'>
								Dashboard
							</Link>
							<div className='user-icon'>
								<UserButton />
								<small>{user?.username}</small>
							</div>
						</div>
					</>
				) : (
					<div className='login-buttons'>
						<SignUpButton href='/sign-up'>Sign Up</SignUpButton>
						<LoginButton href='/sign-in'>Login</LoginButton>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
