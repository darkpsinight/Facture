import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import PeopleIcon from '@mui/icons-material/People'
import ArticleIcon from '@mui/icons-material/Article'
import PercentIcon from '@mui/icons-material/Percent'
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import LoginIcon from '@mui/icons-material/Login'
import SettingsIcon from '@mui/icons-material/Settings'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BrightnessAutoOutlinedIcon from '@mui/icons-material/BrightnessAutoOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'
import { FileExcelOutlined } from '@ant-design/icons'
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded'
import PasswordIcon from '@mui/icons-material/Password'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Clients',
    to: '/clients',
    icon: <PeopleIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavItem,
    name: 'Articles',
    to: '/articles',
    icon: <ArticleIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavItem,
    name: 'VAT',
    to: '/vat',
    icon: <PercentIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavItem,
    name: 'Devis',
    to: '/devis',
    icon: <CurrencyExchangeTwoToneIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavItem,
    name: 'Factures',
    to: '/factures',
    icon: <RequestQuoteIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavItem,
    name: 'Sales',
    to: '/sales',
    icon: <BarChartIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <SettingsIcon style={{ marginRight: 20, marginLeft: 5 }} />,
    items: [
      {
        component: CNavGroup,
        name: 'Invoice',
        icon: <DescriptionOutlinedIcon style={{ marginRight: 5, marginLeft: -20 }} />,
        items: [
          {
            component: CNavItem,
            name: 'Invoice preference',
            to: '/settings',
            icon: <AppSettingsAltIcon style={{ marginRight: 10, marginLeft: -10 }} />,
          },
          {
            component: CNavItem,
            name: 'Export Excel',
            to: '/settings',
            icon: (
              <FileExcelOutlined style={{ marginRight: 10, marginLeft: -10, fontSize: '22px' }} />
            ),
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Account',
        icon: <AccountCircleOutlinedIcon style={{ marginRight: 5, marginLeft: -20 }} />,
        items: [
          {
            component: CNavItem,
            name: 'Company Details',
            to: '/settings',
            icon: <ApartmentRoundedIcon style={{ marginRight: 10, marginLeft: -10 }} />,
          },
          {
            component: CNavItem,
            name: 'Account Informations',
            to: '/settings',
            icon: <ManageAccountsOutlinedIcon style={{ marginRight: 10, marginLeft: -10 }} />,
          },
          {
            component: CNavItem,
            name: 'Password & Security',
            to: '/settings',
            icon: <PasswordIcon style={{ marginRight: 10, marginLeft: -10 }} />,
          },
          {
            component: CNavItem,
            name: 'Delete Account',
            to: '/settings',
            icon: <DeleteForeverOutlinedIcon style={{ marginRight: 10, marginLeft: -10 }} />,
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Display',
        icon: <BrightnessAutoOutlinedIcon style={{ marginRight: 5, marginLeft: -20 }} />,
        items: [
          {
            component: CNavItem,
            name: 'Display Settings',
            to: '/settings',
            icon: <DisplaySettingsIcon style={{ marginRight: 10, marginLeft: -10 }} />,
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Support',
        icon: <SupportAgentOutlinedIcon style={{ marginRight: 5, marginLeft: -20 }} />,
        items: [
          {
            component: CNavItem,
            name: 'Contact Us',
            to: '/settings',
            icon: <EmailOutlinedIcon style={{ marginRight: 10, marginLeft: -10 }} />,
          },
        ],
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Authentication',
  },
  {
    component: CNavItem,
    name: 'Login',
    to: '/login',
    icon: <LoginIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
]

export default _nav
