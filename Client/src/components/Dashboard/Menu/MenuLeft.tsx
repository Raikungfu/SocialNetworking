import './MenuLeft.scss';
import GroupIcon from '@mui/icons-material/Diversity1TwoTone';
import FriendRequestIcon from '@mui/icons-material/GroupAddTwoTone';
import NewsIcon from '@mui/icons-material/NewspaperTwoTone';
import PagesIcon from '@mui/icons-material/DocumentScannerTwoTone';
import MarketIcon from '@mui/icons-material/StorefrontTwoTone';

const MenuLeft = () => {
    return (
        <div className="flex flex-col h-screen w-[20vw] justify-start px-10">
            <ul className='flex flex-col gap-2 my-20'>
                <li className=' flex flex-row justify-start px-2 gap-5 py-3 md:w-full font-normal hover:bg-[#827d7d21] hover:dark:bg-white hover:dark:bg-transparent hover:dark:bg-opacity-25 rounded-lg block dark:text-white'>
                    <GroupIcon className='text-red-500'/>
                    <span className='menu-title'>Groups</span></li>
                <li className='flex flex-row justify-start px-2 gap-5 py-3 md:w-full font-normal hover:bg-[#827d7d21] hover:dark:bg-white hover:dark:bg-transparent hover:dark:bg-opacity-25 rounded-lg block text-dark dark:text-white'>
                    <FriendRequestIcon className='text-purple-500' />
                    <span className='menu-title'>Friends Request</span></li>
                <li className='flex flex-row justify-start px-2 gap-5 py-3 md:w-full font-normal hover:bg-[#827d7d21] hover:dark:bg-white hover:dark:bg-transparent hover:dark:bg-opacity-25 rounded-lg block text-dark dark:text-white'>
                    <NewsIcon className='text-green-500'/>
                    <span className='menu-title'>News</span></li>
                <li className='flex flex-row justify-start px-2 gap-5 py-3 md:w-full font-normal hover:bg-[#827d7d21] hover:dark:bg-white hover:dark:bg-transparent hover:dark:bg-opacity-25 rounded-lg block text-dark dark:text-white'>
                    <PagesIcon className='text-blue-500'/>
                    <span className='menu-title'>Pages</span></li>
                <li className='flex flex-row justify-start px-2 gap-5 py-3 md:w-full font-normal hover:bg-[#827d7d21] hover:dark:bg-white hover:dark:bg-transparent hover:dark:bg-opacity-25 rounded-lg block text-dark dark:text-white'>
                    <MarketIcon className='text-yellow-300'/>
                    <span className='menu-title'>Market</span></li>
            </ul>
        </div>
    );
};

export default MenuLeft;