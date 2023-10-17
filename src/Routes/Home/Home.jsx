import { Outlet } from 'react-router-dom';

import CategoryDirectory from '../../Components/CategoryDirectory/CategoryDirectorry'

const Home = () => {


  return (
    <div>
      <Outlet/>
      <CategoryDirectory/>
    </div>
  );
};

export default Home;