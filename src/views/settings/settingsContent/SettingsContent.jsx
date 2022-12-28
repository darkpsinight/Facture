import React from 'react'
import { Box, Card } from '@mui/material'
import PropTypes from 'prop-types'
import InvoiceSettings from './InvoiceSettings/InvoiceSettings'
import TVASettings from './TVASettings/TVASettings'
import ExportExcelSettings from './ExportExcelSettings/ExportExcelSettings'
import CompanyDetailsSettings from './CompanyDetailsSettings/CompanyDetailsSettings'
import AccountInformationSettings from './AccountInformationSettings/AccountInformationSettings'
import PasswordSettings from './PasswordSettings/PasswordSettings'
import DeleteAccountSettings from './DeleteAccountSettings/DeleteAccountSettings'
import DisplaySettingSettings from './DisplaySettingSettings/DisplaySettingSettings'
import ContactUsSettings from './ContactUsSettings/ContactUsSettings'

const SettingsContent = (props) => {
  return (
    <>
      <div>
        <Box sx={{ padding: '10px' }}>
          {props.isToggleInvoice ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <InvoiceSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isToggleTVA ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <TVASettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isToggleExportExcel ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <ExportExcelSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isToggleCompanyDetails ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <CompanyDetailsSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isToggleAccountInformation ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <AccountInformationSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isTogglePassword ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <PasswordSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isToggleDeleteAccount ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <DeleteAccountSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isToggleDisplaySetting ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <DisplaySettingSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
          {props.isToggleContactUs ? (
            <>
              <Card sx={{ padding: '10px' }}>
                <div>
                  <ContactUsSettings />
                </div>
              </Card>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </Box>
      </div>
    </>
  )
}

export default SettingsContent

SettingsContent.propTypes = {
  isToggleInvoice: PropTypes.bool,
  isToggleTVA: PropTypes.bool,
  isToggleExportExcel: PropTypes.bool,
  isToggleCompanyDetails: PropTypes.bool,
  isToggleAccountInformation: PropTypes.bool,
  isTogglePassword: PropTypes.bool,
  isToggleLogout: PropTypes.bool,
  isToggleDeleteAccount: PropTypes.bool,
  isToggleDisplaySetting: PropTypes.bool,
  isToggleContactUs: PropTypes.bool,
}
