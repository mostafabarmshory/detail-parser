import DetailParser from './components/DetailParser';
import logo from './logo.svg';
import './App.css';
import { 
	Container,
	Row,
	Col
} from "react-bootstrap";

function App() {
	return (
		<Container
			fluid>
			<Row
				className="ms-5">
				<img
					height="32px"
					src={logo}
					className="App-logo col-1"
					alt="logo"
					style={{
						'margin': '0px',
						'padding': '0px',
					}} />
				<Col className="align-middle m-0"><p>Detail Parser</p></Col>
			</Row>
			<DetailParser></DetailParser>
		</Container>
	);
}

export default App;
