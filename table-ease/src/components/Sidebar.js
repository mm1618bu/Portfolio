import 'react';
import '../App.css';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarlinks'>
                <a href='#'>Home</a>
                <a href='#'>Product</a>
                <a href='#'>Sales</a>
                <button>Contact</button>
            </div>
        </div>
    );
}