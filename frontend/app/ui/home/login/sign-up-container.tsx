import { SignUp } from '@clerk/nextjs';

const SignUpContainer = () => {
	return (
		<section>
			<SignUp path='/sign-up' />
		</section>
	);
};

export default SignUpContainer;
