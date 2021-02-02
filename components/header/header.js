import Topbar from './topbar'
import MenuWeb from './menuWeb'

export default function header() {
    return(
        <div className='header'>
            <Topbar />
            <MenuWeb />
        </div>
    );
}