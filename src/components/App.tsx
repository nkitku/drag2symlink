import { SymLinks, HostFolder } from './SymLinks';
import * as React from 'react';
import { DragBox } from './DragBox';

export const App = (dirs: Array<any>) => {
	if (dirs.length) {
		return (
			<div>
				<HostFolder />
				<SymLinks folders={dirs} />
			</div>
		);
	} else {
		return <DragBox />;
	}
};
