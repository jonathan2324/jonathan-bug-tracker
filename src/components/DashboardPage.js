import React from 'react';
import BugList from './BugList'
import BugListFilters from '../components/BugListFilters'



const DashboardPage = () => {
  return (
    <div >
        <BugListFilters />
        <BugList />
    </div>
  );
}

export default DashboardPage;
