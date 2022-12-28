import React, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputSwitch } from 'primereact/inputswitch'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Typography } from '@mui/material'
import { Divider } from 'antd'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import './style.css'

const InvoiceSettings = () => {
  const [value1, setValue1] = useState('2')
  const [value2, setValue2] = useState('0')
  const [value3, setValue3] = useState('0.0')
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [valueTextArea, setValueTextArea] = useState('')
  const [loading, setLoading] = useState(false)

  const onLoadingClick = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    console.log('Number of price degits :', value1)
    console.log('Number of Quantity degits :', value2)
    console.log('Stamp :', value3)
    console.log('Invoice Discount :', checked1)
    console.log('Edit item in invoice :', checked2)
    console.log('Footer :', valueTextArea)
  }, [value1, value2, value3, checked1, checked2, valueTextArea])

  return (
    <>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        Invoice Preferences:
      </Typography>
      <Divider />
      <div>
        <h5>Number of price degits :</h5>
        <InputText type={'number'} value={value1} onChange={(e) => setValue1(e.target.value)} />
      </div>
      <div>
        <h5>Number of Quantity degits :</h5>
        <InputText type={'number'} value={value2} onChange={(e) => setValue2(e.target.value)} />
      </div>
      <div>
        <h5>Stamp :</h5>
        <InputText type={'number'} value={value3} onChange={(e) => setValue3(e.target.value)} />
      </div>
      <div>
        <h5>Invoice Discount :</h5>
        <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
        <h5>Edit item in invoice :</h5>
        <InputSwitch checked={checked2} onChange={(e) => setChecked2(e.value)} />
      </div>
      <div>
        <h5>Footer :</h5>
        <InputTextarea
          value={valueTextArea}
          onChange={(e) => setValueTextArea(e.target.value)}
          autoResize
          rows={5}
          cols={30}
        />
      </div>
      <div>
        <Button
          label="Update"
          icon="pi pi-check"
          className="p-button-success"
          loading={loading}
          onClick={onLoadingClick}
        />
      </div>
    </>
  )
}

export default InvoiceSettings
