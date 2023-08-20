// Text.js
import React, { useContext, useState, useEffect } from 'react';
import { UserStatusContext, ResDataContext } from './Header/Header'; 
import {groupAndSortDataByUserPriority, groupByPriorityAndTitle,groupByUserAndTitle , groupByPriorityAndPriority , groupByStatusAndPriority,groupByStatusAndTitle  } from './Func/Func'
import ColumnBaord from './ColumnComp/Column';
import './GroupandOrder.css'


const Text = () => {
  const userStatus = useContext(UserStatusContext);
  const resData = useContext(ResDataContext);  
  const [cachedUserStatus, setCachedUserStatus] = useState(["User","Priority"]);
  const [cachedResData, setCachedResData] = useState(null);
 
  useEffect(() => {
    // Store context values in local state
    setCachedUserStatus(userStatus);
  }, [userStatus]);
  useEffect(() => {
    // Store context values in local state
    setCachedResData(resData);
  }, [ resData]);
   
var groupedData = { };

if(cachedUserStatus?.groupBy === "User" && cachedUserStatus?.orderBy==="Priority") {
   if(cachedResData?.users){
        groupedData = groupAndSortDataByUserPriority(cachedResData?.users, cachedResData?.tickets);
       }
   }else if(cachedUserStatus?.groupBy === "User" && cachedUserStatus?.orderBy==="Title")
{
    console.log("user and title ");
    if(cachedResData?.tickets && cachedResData?.users){
        groupedData = groupByUserAndTitle(cachedResData?.users, cachedResData?.tickets);
        console.log(groupedData);
       }
    }
else if(cachedUserStatus?.groupBy === "Priority" && cachedUserStatus?.orderBy==="Priority")
{
    console.log("priority and priority ");
    if(cachedResData?.tickets && cachedResData?.users){
        groupedData = groupByPriorityAndPriority(cachedResData?.users, cachedResData?.tickets);
        console.log(groupedData);
       }
     
}
else if(cachedUserStatus?.groupBy === "Priority" && cachedUserStatus?.orderBy==="Title")
{
    console.log("priority and title ");
    if(cachedResData?.tickets && cachedResData?.users ){
        groupedData = groupByPriorityAndTitle(cachedResData?.users, cachedResData?.tickets);
        console.log(groupedData);
       }
    
}
else if(cachedUserStatus?.groupBy === "Status" && cachedUserStatus?.orderBy==="Priority")
{
    console.log("Status and priority ");
    if(cachedResData?.tickets && cachedResData?.users ){
        groupedData = groupByStatusAndPriority(cachedResData?.users, cachedResData?.tickets);
        console.log(groupedData);
       }
    
     
}
else if (cachedUserStatus?.groupBy === "Status" && cachedUserStatus?.orderBy==="Title")
{
    console.log("Status and title ");
    if(cachedResData?.tickets && cachedResData?.users ){
        groupedData = groupByStatusAndTitle(cachedResData?.users, cachedResData?.tickets);
        console.log(groupedData);
       }
    }

//  console.log(groupedData);
 
 return (
  <div className='columnContainer'>
  
    {Object.entries(groupedData).map(([status, data]) => (
            
        <ColumnBaord title={status} tickets={data} />
     
    ))}
  </div>
);


}

export default Text;
