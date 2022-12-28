import React, { useEffect } from 'react'
import SettingsSideMenu from './settingsSideMenu/SettingsSideMenu'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  //check authentication
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('accessTokenServer') !== null) {
      console.log(`Logged in`)
    } else {
      console.log(`Logged out`)
      navigate('/login')
    }
  }, [navigate])

  return (
    <>
      <ProSidebarProvider>
        <div>
          <SettingsSideMenu />
        </div>
      </ProSidebarProvider>
    </>
  )
}

export default Settings
