import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { createSymLink } from '../main';

export class SymLink extends Component {
	state = { val: '' };
	props: any;
	// state = { val: null };
	render() {
		return (
			<Row>
				<Col lg={8} md={6} xs={12} className="f-name text-white">
					{this.props.name}
				</Col>
				<Col lg={4} md={6} xs={12}>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className="bg-dark text-white">/</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							className="bg-dark text-white"
							value={this.state.val}
							onChange={event => this.setState({ val: event.target.value })}
							onKeyUp={e => {
								e.key === 'Enter' &&
									this.state.val &&
									createSymLink([this.props.name, this.state.val]);
							}}
						/>
						<InputGroup.Append>
							<Button
								variant="success"
								disabled={!this.state.val}
								onClick={() => {
									createSymLink([this.props.name, this.state.val]);
								}}
							>
								Go
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>
			</Row>
		);
	}
}
