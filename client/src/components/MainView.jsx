import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

// Components
import RegionsView from './RegionsView';
import WinesView from './WinesView';
import RegionView from './RegionView';
import axios from 'axios';
import { AppContext } from '../AppContext';
function MainView() {
    const navigate = useNavigate();
    const { number } = React.useContext(AppContext);
    const [regions, setRegions] = React.useState([]);

    const getRegions = () => {
        axios
            .get(`http://localhost:5000/regions`)
            .then((res) => {
                console.log(res.data);
                setRegions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    React.useEffect(() => {
        getRegions();
        console.log(regions, number);
    }, []);

    return (
        <div className='main-content'>
            <h1>Welcome to nzWine app</h1>
            <p>You can learn about New Zealand Wine...</p>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/regions')}>Region</button>
            <button onClick={() => navigate('/wines')}>Variety</button>
            <Routes>
                <Route path='/regions' element={<RegionsView />} />
                <Route path='/wines' element={<WinesView />} />

                <Route path='/regions/:name' element={<RegionView />} />
                {/* <Route path='/regions/Marlborough' element={<RegionView />} /> */}
            </Routes>
        </div>
    );
}

export default MainView
