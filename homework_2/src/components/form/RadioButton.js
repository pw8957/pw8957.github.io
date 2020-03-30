import React from 'react';
import styled from 'styled-components'

const CustopRadioWrap = styled.div`
	display:flex; justify-content:space-between; padding:20px 0 30px;
`
const CustopRadioBox = styled.div`
	flex:auto;
	input[type=radio] {width:0; height:0; visibility:hidden;}
	label {width:100%; margin:0;}
	input[type=radio]:checked + label {background:#17a2b8; color:#fff;}
	&:not(:first-child) {margin-left:-1px;}
	&:not(:first-child) label {border-bottom-left-radius:0; border-top-left-radius:0;}
	&:not(:last-child) label {border-top-right-radius:0; border-bottom-right-radius:0;}
	&:last-child  label {border-bottom-left-radius:0; border-top-left-radius:0;}
`


function RadioItem({items}){
	return (
		<CustopRadioBox>
			<input 
				type="radio"
				name="radio" 
				value={items.name}
				id={items.htmlFor}
			/>
			<label 
				htmlFor={items.htmlFor}
				className="btn btn-outline-info"
				value={items.name}
			>
				{items.name}
			</label>
		</CustopRadioBox>
	)
}

function RadioButton({className}) {
	const itemList = [
		{
			id:1,
			name:'남자',
			htmlFor:'radio1'
		},
		{
			id:2,
			name:'여자',
			htmlFor:'radio2'
		},
	]
	return (
		<CustopRadioWrap className={className}>
			{
				itemList.map(
					items => <RadioItem 
						items={items} 
						id={items.htmlFor}
						key={items.id}
					/>
				)
			}
		</CustopRadioWrap>
	)
}

export default RadioButton;