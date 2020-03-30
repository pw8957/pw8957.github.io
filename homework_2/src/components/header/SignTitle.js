import React from 'react';
import styled from 'styled-components';

const JoinTitle = styled.h1`
	font-size:20px;
	font-weight:bold;
	padding:10px 0;
`

function SignTitle({title}) {
	return(
		<div>
			<JoinTitle>{title}</JoinTitle>
		</div>
	)
}

SignTitle.defaultProps = {
	title : '회원가입'
}

export default SignTitle;