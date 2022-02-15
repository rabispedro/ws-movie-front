import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from 'pages/Listing/index';
import Form from 'pages/Form/index'; 
import Header from './components/Header/index';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Listing />} />
					<Route path="/form" element={<Form />} >
						<Route path=":movieId" element={<Form />}/>
					</ Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
