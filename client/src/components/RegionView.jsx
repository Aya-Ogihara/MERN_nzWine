import React from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
function RegionView(props) {
    const { region } = props;

    const{name} = useParams();

    const { number } = React.useContext(AppContext);

    React.useEffect(() => {
        console.log('RegionView', region, props);
        console.log('RegionView', name, number);
    }, [region, props]);

    return (
        <div>
            <h3>test</h3>
            
            {/* <div>{region.Name}</div>
            <img src={region.ImagePath} alt={region.Name} crossOrigin='anonymous' />
            <div>{region.Description}</div> */}
        </div>
    );
}

export default RegionView
