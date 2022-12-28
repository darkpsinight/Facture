import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Typography } from '@mui/material'
import { Divider } from 'antd'
import ContactUsSettingsForm from './ContactUsSettingsForm/ContactUsSettingsForm'

const ContactUsSettings = () => {
  const [showMessage, setShowMessage] = useState(false)

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  )

  return (
    <>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        Contact Us:
      </Typography>
      <Divider />
      <div className="form-demo">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ '960px': '80vw' }}
          style={{ width: '30vw' }}
        >
          <div className="flex justify-content-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: '5rem', color: 'var(--green-500)' }}
            ></i>
            <h5>Thank you for getting in touch!</h5>
            <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
              We appreciate you contacting us. One of our colleagues will get back in touch with you
              soon! Have a great day!
            </p>
          </div>
        </Dialog>
        <div>
          <ContactUsSettingsForm />
        </div>
      </div>
    </>
  )
}

export default ContactUsSettings
