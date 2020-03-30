import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import SignTitle from './components/header/SignTitle';
import InputBox from './components/form/InputBox';
import RadioButton from './components/form/RadioButton';
import LabelBox from './components/form/LabelBox';
import SelectBox from './components/form/SelectBox';
import AgreeBox from './components/form/AgreeBox';


function App() {
	return (
	<Container className="Container-fluid">
		<SignTitle title="회원가입"/>
		<Form>
			<Form.Row>
				<InputBox
					size="md"
					type="text"
					placeholder="아이디"
					className="mb-1 w-100"
				/>
				<InputBox
					size="md"
					type="password"
					placeholder="비밀번호"
					className="mb-1 w-100"
				/>
			</Form.Row>
			<Form.Row>
				<RadioButton className="w-100"/>
			</Form.Row>
			<Form.Row>
				<Col xs="2" className="d-flex align-items-center justify-content-center">
					<LabelBox text="생일" className="mb-0" />
				</Col>
				<Col>
					<SelectBox>
						<option value="">선택</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
						<option value="2018">2018</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
						<option value="2015">2015</option>
						<option value="2014">2014</option>
						<option value="2013">2013</option>
						<option value="2012">2012</option>
						<option value="2011">2011</option>
						<option value="2010">2010</option>
					</SelectBox>
				</Col>
				<Col>
					<SelectBox>
						<option value="">선택</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</SelectBox>
				</Col>
				<Col>
					<SelectBox>
						<option value="">선택</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
						<option value="22">22</option>
						<option value="23">23</option>
						<option value="24">24</option>
						<option value="25">25</option>
						<option value="26">26</option>
						<option value="27">27</option>
						<option value="28">28</option>
						<option value="29">29</option>
						<option value="30">30</option>
						<option value="31">31</option>
					</SelectBox>
				</Col>
			</Form.Row>
			<Form.Row className="mt-2">
				<Col xs="2" className="d-flex align-items-center justify-content-center">
					<LabelBox text="전화" className="mb-0" />
				</Col>
				<Col xs="3">
					<SelectBox>
						<option value="010">010</option>
						<option value="011">011</option>
						<option value="016">016</option>
						<option value="018">018</option>
						<option value="019">019</option>
					</SelectBox>
				</Col>
				<Col xs="4">
					<InputBox 
						placeholder="1234-5678"
						className="mb-0"
					/>
				</Col>
				<Col xs="3">
					<Button
						variant="outline-primary" 
						size="sm"
						className="w-100"
					>인증</Button>
				</Col>
			</Form.Row>
			<Form.Row>
				<AgreeBox fontSize="sm"/>
			</Form.Row>
			
			<Button
				variant="primary"
				size="lg"
				className='w-100'
			>가입하기</Button>
		</Form>
	</Container>
	);
}

export default App;
