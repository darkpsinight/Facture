import React, { useState } from 'react'
import { Card, IconButton } from '@mui/material'
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar'
import MenuIcon from '@mui/icons-material/Menu'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BrightnessAutoOutlinedIcon from '@mui/icons-material/BrightnessAutoOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'
import PercentIcon from '@mui/icons-material/Percent'
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded'
import PasswordIcon from '@mui/icons-material/Password'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import SettingsContent from '../settingsContent/SettingsContent'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import { FileExcelOutlined } from '@ant-design/icons'

const SettingsSideMenu = (props) => {
  const { collapseSidebar } = useProSidebar()
  const [isToggleInvoice, setIsToggleInvoice] = useState(false)
  const [isToggleTVA, setIsToggleTVA] = useState(false)
  const [isToggleExportExcel, setIsToggleExportExcel] = useState(false)
  const [isToggleCompanyDetails, setIsToggleCompanyDetails] = useState(false)
  const [isToggleAccountInformation, setIsToggleAccountInformation] = useState(false)
  const [isTogglePassword, setIsTogglePassword] = useState(false)
  const [isToggleDeleteAccount, setIsToggleDeleteAccount] = useState(false)
  const [isToggleDisplaySetting, setIsToggleDisplaySetting] = useState(false)
  const [isToggleContactUs, setIsToggleContactUs] = useState(false)

  function toggleInvoice() {
    setIsToggleInvoice(!isToggleInvoice)
  }
  function toggleTVA() {
    setIsToggleTVA(!isToggleTVA)
  }
  function toggleExportExcel() {
    setIsToggleExportExcel(!isToggleExportExcel)
  }
  function toggleCompanyDetails() {
    setIsToggleCompanyDetails(!isToggleCompanyDetails)
  }
  function toggleAccountInformation() {
    setIsToggleAccountInformation(!isToggleAccountInformation)
  }
  function togglePassword() {
    setIsTogglePassword(!isTogglePassword)
  }
  function toggleDeleteAccount() {
    setIsToggleDeleteAccount(!isToggleDeleteAccount)
  }
  function toggleDisplaySetting() {
    setIsToggleDisplaySetting(!isToggleDisplaySetting)
  }
  function toggleContactUs() {
    setIsToggleContactUs(!isToggleContactUs)
  }

  return (
    <>
      <Card
        style={{
          display: 'flex',
          marginTop: '-15px',
        }}
      >
        <Card
          sx={{
            height: '1500px',
            minHeight: '100vh',
            display: 'inline-flex',
            flexWrap: 'no-wrap',
            flexDirection: 'column',
            alignItems: 'baseline',
            justifyContent: 'flex-start',
            overflow: 'visible',
            backgroundColor: '#45536b',
          }}
        >
          <main style={{ padding: 10 }}>
            <div>
              <IconButton
                sx={{ color: 'black', marginLeft: '5px' }}
                onClick={() => collapseSidebar()}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </main>
          <Sidebar transitionDuration={300} backgroundColor="rgb(249, 249, 249, 0.7)">
            <Menu>
              <SubMenu
                {...props}
                defaultOpen
                icon={<DescriptionOutlinedIcon name="bar-chart" />}
                label="Invoice"
              >
                <MenuItem suffix={<AppSettingsAltIcon />} onClick={toggleInvoice}>
                  {' '}
                  Invoice Preferences
                </MenuItem>
                <MenuItem suffix={<PercentIcon />} onClick={toggleTVA}>
                  {' '}
                  VAT
                </MenuItem>
                <MenuItem
                  suffix={<FileExcelOutlined style={{ fontSize: '22px' }} />}
                  onClick={toggleExportExcel}
                >
                  Export Excel
                </MenuItem>
              </SubMenu>
              <SubMenu icon={<AccountCircleOutlinedIcon name="bar-chart" />} label="Account">
                <MenuItem suffix={<ApartmentRoundedIcon />} onClick={toggleCompanyDetails}>
                  {' '}
                  Company Details
                </MenuItem>
                <MenuItem
                  suffix={<ManageAccountsOutlinedIcon />}
                  onClick={toggleAccountInformation}
                >
                  {' '}
                  Account Informations
                </MenuItem>
                <MenuItem suffix={<PasswordIcon />} onClick={togglePassword}>
                  {' '}
                  Password and Security
                </MenuItem>
                <MenuItem
                  suffix={<DeleteForeverOutlinedIcon />}
                  onClick={toggleDeleteAccount}
                  style={{ backgroundColor: '#CE3426' }}
                >
                  {' '}
                  DeleteAccount
                </MenuItem>
              </SubMenu>
              <SubMenu icon={<BrightnessAutoOutlinedIcon name="bar-chart" />} label="Display">
                <MenuItem suffix={<DisplaySettingsIcon />} onClick={toggleDisplaySetting}>
                  {' '}
                  Display Settings
                </MenuItem>
              </SubMenu>
              <SubMenu icon={<SupportAgentOutlinedIcon name="bar-chart" />} label="Support">
                <MenuItem suffix={<EmailOutlinedIcon />} onClick={toggleContactUs}>
                  {' '}
                  Contact us
                </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </Card>
        <div style={{ padding: 10, width: '100%', height: '100vh' }}>
          <div>
            <SettingsContent
              isToggleInvoice={isToggleInvoice}
              isToggleTVA={isToggleTVA}
              isToggleExportExcel={isToggleExportExcel}
              isToggleCompanyDetails={isToggleCompanyDetails}
              isToggleAccountInformation={isToggleAccountInformation}
              isTogglePassword={isTogglePassword}
              isToggleDeleteAccount={isToggleDeleteAccount}
              isToggleDisplaySetting={isToggleDisplaySetting}
              isToggleContactUs={isToggleContactUs}
            />
          </div>
        </div>
      </Card>
    </>
  )
}

export default SettingsSideMenu
