import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
import PeopleIcon from '@mui/icons-material/People'
import ArticleIcon from '@mui/icons-material/Article'
import PercentIcon from '@mui/icons-material/Percent'
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import LoginIcon from '@mui/icons-material/Login'
import SettingsIcon from '@mui/icons-material/Settings'
import BarChartIcon from '@mui/icons-material/BarChart'

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
    component: CNavItem,
    name: 'Settings',
    to: '/settings',
    icon: <SettingsIcon style={{ marginRight: 20, marginLeft: 5 }} />,
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
