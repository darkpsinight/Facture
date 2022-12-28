import React from 'react'
import { Button } from 'primereact/button'
import PercentIcon from '@mui/icons-material/Percent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Typography } from '@mui/material'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

const TVASettings = () => {
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/vat')
  }
  return (
    <>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        VAT:
      </Typography>
      <Divider />
      <div>
        <Button className="discord p-0 p-button-lg p-button" aria-label="Discord">
          <PercentIcon />
          <span className="px-3" onClick={navigateHome}>
            VAT table
          </span>
          <ArrowForwardIcon />
        </Button>
      </div>
    </>
  )
}

export default TVASettings
