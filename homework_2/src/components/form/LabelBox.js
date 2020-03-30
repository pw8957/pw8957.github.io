import React from 'react'
import { Form } from 'react-bootstrap';

function LabelBox({text , className}) {
	return (
		<Form.Label className={className}>{text}</Form.Label>
	)
}
LabelBox.defaultProps = {
	title : '회원가입'
}

export default LabelBox;