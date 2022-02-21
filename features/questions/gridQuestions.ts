import { Actor } from '../support/actor';
import QuoteGridTable from '../tasks/view-models/quoteGridTable';

const TheGrid = {
	has: {
		aRoleNamed: (roleName: string) => async(actor: Actor) => {
			const targetElementState = await QuoteGridTable.roleColumnCellForName(roleName).with({ boundTestRun: actor.world.tc })();
			return targetElementState.innerText === roleName;
		},
		aSectionNamed: (sectionName: string) => async(actor: Actor) => {
			const targetElementState = await QuoteGridTable.sectionForName(sectionName).with({ boundTestRun: actor.world.tc })();
			return targetElementState.innerText === sectionName;
		},
		aDefaultSection: () => TheGrid.has.aSectionNamed('1. Default Section'),
	},
};

export default TheGrid;
