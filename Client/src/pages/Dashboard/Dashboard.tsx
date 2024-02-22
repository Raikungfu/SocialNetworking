import {MenuLeft, MenuRight, Content } from '../../components';

const Dashboard = () => {
  
    return (
          <div className='flex flex-row w-screen'>
            <div className='basis-[20%]'><MenuLeft/></div>
            <div className='flex-1 mt-10'><Content/></div>
            <div className='basis-[20%] right-[20vw]'><MenuRight/></div>
          </div>
    );
  };

export default Dashboard;