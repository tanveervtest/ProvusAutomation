import { AuthenticatedUser } from '../abilities/authenticate';
import { Actor } from '../support/actor';
import Browse from './interactions/browse';

const LoginUrl = {
	withCredentials: async(actor: Actor) => {
		const authUserInfo: AuthenticatedUser = actor.recall(AuthenticatedUser.type);
		let loginResults;
		if (!authUserInfo.isLoggedIn) {
//			const { loginUrl, username, password } = authUserInfo;
			loginResults = await actor.attemptsTo(
				Browse.to.theUrl('www.google.com'),
				async() => authUserInfo.loggedIn(),
			);
		}

		return loginResults;
	},
};

export default LoginUrl;
