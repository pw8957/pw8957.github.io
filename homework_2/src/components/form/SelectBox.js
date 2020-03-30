import React from "react";
import { Form } from 'react-bootstrap';

function SelectBox({size,children,labelText}) {
	return (
		<Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">
			{labelText ? <Form.Label>{labelText}</Form.Label> : null}
			<Form.Control
				as="select" 
				size={size}>
			>
			{children}
			</Form.Control>
		</Form.Group>
	)
}
SelectBox.defaultProps = {
	size : 'sm'
}

export default SelectBox;