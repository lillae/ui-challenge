import { SignIn, SignUp } from '@clerk/nextjs';

const SignInContainer = () => {
	return (
		<section>
			<SignIn path='/sign-in' />
		</section>
	);
};

export default SignInContainer;
