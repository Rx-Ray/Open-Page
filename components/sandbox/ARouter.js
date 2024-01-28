import React, { useEffect, useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../../views/sandbox/home/Home'
import UserList from '../../views/sandbox/user-manage/UserList'
import RoleList from '../../views/sandbox/right-manage/RoleList'
import RightList from '../../views/sandbox/right-manage/RightList'
import AnnouncementAdd from '../../views/sandbox/announcement-manage/AnnouncementAdd'
import AnnouncementDraft from '../../views/sandbox/announcement-manage/AnnouncementDraft'
import Nopermission from '../../views/sandbox/nopermission/Nopermission'
import axios from 'axios'
import Preview from '../../views/sandbox/home/Preview'


const LocalRouterMap = {
  "/home":Home,
  "/user-manage/list":UserList,
  "/right-manage/role/list":RoleList,
  "/right-manage/right/list":RightList,
  "/announcement-manage/add":AnnouncementAdd,
  "/announcement-manage/draft" :AnnouncementDraft,
  "/preview/:id":Preview
}

export default function ARouter() {
  const [BackRouteList,setBackRouteList]=useState([])
  useEffect(()=>{
    Promise.all(
      [
        axios.get ("http://localhost:8000/route")
      ]).then(res=>{
        console.log(res)
        setBackRouteList([...res[0].data])
      })
    
  },[])
  return (
    <div>
      <Switch>
             {
              BackRouteList.map (item=>
                <Route path={item.key} key={item.key} component={LocalRouterMap[item.key]} />
                )
             }

              <Redirect from="/"to="/home" exact/>
              {
                BackRouteList.length>0&&<Route path="*" component={Nopermission}/>
              }
              
          </Switch>
    </div>
  )
}
