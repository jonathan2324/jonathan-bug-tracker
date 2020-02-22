import React from 'react';
import BugList from './BugList'
import BugListFilters from '../components/BugListFilters'
import  BugsSummary  from './BugsSummary';



const DashboardPage = () => {
  return (
    <div >
        <BugListFilters />
        <BugList />
    </div>
  );
}

export default DashboardPage;


//        <BugsSummary />