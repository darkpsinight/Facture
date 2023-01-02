import React, { useEffect, useState } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner'
import { getAccountDetails } from 'src/Service/Settings/apiAccountInformationSettings'
import AccountForm from './AccountForm'
import './style.css'

const AccountInformationForm = () => {
  /* get Account details */
  const [accountDetails, setAccountDetails] = useState({})
  const [data, setData] = useState(null)

  useEffect(() => {
    getAccountDetails().then((response) => setData(response.data.user))
  }, [])

  console.log('accountDetails: ', accountDetails)

  useEffect(() => {
    setAccountDetails(data)
  }, [data])

  return accountDetails ? (
    <>
      <div className="form-demo">
        <div>
          <AccountForm preloadedValues={accountDetails} />
        </div>
      </div>
    </>
  ) : (
    <div>
      <ProgressSpinner />
      <h2>Loading your data, please wait ...</h2>
    </div>
  )
}

export default AccountInformationForm
