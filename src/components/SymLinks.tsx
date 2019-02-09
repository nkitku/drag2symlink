import * as React from 'react';
import { SymLink } from './SymLink';
import { InputGroup, Col, Row, FormControl } from 'react-bootstrap';

export let hostFolder = '.';
export function SymLinks(props: any) {
	return props.folders.map((v: any) => {
		return <SymLink name={v} />;
	});
}

export class HostFolder extends React.Component {
	state = { val: hostFolder };
	props: any;

	render() {
		return (
			<Row>
				<Col lg={4} md={6} xs={12}>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className="bg-dark text-white">
								Enter Host Directory
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							className="bg-dark text-white"
							value={this.state.val}
							onChange={(event: any) => {
								this.setState({ val: event.target.value });
								hostFolder = event.target.value;
							}}
						/>
					</InputGroup>
				</Col>
			</Row>
		);
	}
}
