import React from 'react';
import { Form } from 'react-bootstrap';
import styled, {css} from 'styled-components';


const fontStyle = css`
	${props => props.fontSize === 'sm' && css`
		font-size:12px;
	`}
	${props => props.fontSize === 'md' && css`
		font-size:14px;
	`}
	${props => props.fontSize === 'lg' && css`
		font-size:16px;
	`}
`


const AgreeWrap = styled.div`
	display:flex;
	margin:20px 0;
	width:100%;
	${fontStyle}
`
const AgreeText = styled.div`
	max-height:100px;
	margin-right:15px;
	padding:10px; 
	border:1px solid #ced4da; 
	border-radius:3px;
	box-sizing:border-box; 
	overflow-y:scroll;
	flex:auto;
`

function AgreeBox({ color,fontSize }) {
	return (
		<AgreeWrap color={color} fontSize={fontSize}>
			<AgreeText>
				모든 약관 내용에 동의합니다.<br/>
				모든 약관 내용에 동의합니다.<br/>
				모든 약관 내용에 동의합니다.<br/>
				모든 약관 내용에 동의합니다.
				모든 약관 내용에 동의합니다.
				모든 약관 내용에 동의합니다.
				모든 약관 내용에 동의합니다.
				모든 약관 내용에 동의합니다.
			</AgreeText>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label=""
			/>
		</AgreeWrap>
	)
}

export default AgreeBox;