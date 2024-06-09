
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:container md:mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;