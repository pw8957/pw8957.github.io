import React from 'react'
import { Form } from 'react-bootstrap';

function LabelComponent({text , className}) {
	return (
		<Form.Label className={className}>{text}</Form.Label>
	)
}
LabelComponent.defaultProps = {
	title : '회원가입'
}


export default LabelComponent;