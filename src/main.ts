const body = document.body;

import 'bootstrap/dist/css/bootstrap.min.css';
import { lstatSync, symlinkSync } from 'fs';
import { join } from 'path';
import { render } from 'react-dom';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { App } from './components/App';
import { hostFolder } from './components/SymLinks';
import { $ } from './fun';

const AppRoot = $('#root');

export const createSymLink = ([target, link]) =>
	symlinkSync(target, join(hostFolder, link), 'junction');

body.ondragover = () => false;

body.ondragenter = () => {
	// $('.holder').classList.add('holder_state_hover');
	return false;
};

const onFilesDrop$ = fromEvent(body, 'drop').pipe(
	map((e: any) => {
		const files = [...e.dataTransfer.files];
		e.preventDefault();
		e.stopPropagation();
		return files;
	})
);

onFilesDrop$.subscribe(files => {
	render(
		App(
			files
				.filter(file => lstatSync(file.path).isDirectory())
				.map(file => file.path)
		),
		AppRoot
	);
});

export function main() {
	render(App([]), AppRoot);
}
main();
