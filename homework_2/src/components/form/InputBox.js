import React from 'react';
import { Form } from 'react-bootstrap'

function InputBox( { size, type, placeholder, className, labelText } ) {
	return (
		<Form.Group 
			controlId="formBasicEmail"
			className={className}
		>
			{labelText ? <Form.Label>{labelText}</Form.Label> : null}
			<Form.Control 
				size={size}
				type={type}
				placeholder={placeholder}
			/>
		</Form.Group>
	)
}

InputBox.defaultProps = {
	size : 'sm'
}


export default InputBox;