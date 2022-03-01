import { Selector,t} from 'testcafe';

class ProvusPage{
	usernameTextBox
    constructor() {        
        this.usernameTextBox = Selector('a').withText('Register')
}
export default new ProvusPage();