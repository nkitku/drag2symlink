const body = document.body;

const fs = require('fs');
import { render } from 'react-dom';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { App } from './components/App';
import { $ } from './fun';

const AppRoot = $('#root');

export const createSymLink = ([target, link]) =>
	fs.symlinkSync(target, 'C:/Users/ankit/Desktop/' + link, 'junction');

body.ondragover = () => false;

body.ondragenter = () => {
	//   holder.classList.add("holder_state_hover");
	return false;
};

const onFilesDrop$ = fromEvent(body, 'ondrop').pipe(
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
				.filter(file => fs.lstatSync(file.path).isDirectory())
				.map(file => file.path)
		),
		AppRoot
	);
});

export function main() {
	render(App([]), AppRoot);
}
main();
