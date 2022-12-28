import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Divider } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { classNames } from 'primereact/utils'
import { Password } from 'primereact/password'

const PasswordSettings = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    setFormData(data)
    setShowMessage(true)
    reset()
  }

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  }

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
  const passwordHeader = <h6>Pick a password</h6>
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  )

  return (
    <>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        Password and Security:
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
            <h5>Update Password Successful!</h5>
            <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
              Congratulation, You successfully changed your password !
            </p>
          </div>
        </Dialog>

        <div className="flex justify-content-center">
          <div>
            <div className="card" style={{ padding: '10px' }}>
              <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <div className="field">
                  <span className="p-float-label">
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: 'Password is required.' }}
                      render={({ field, fieldState }) => (
                        <Password
                          id={field.name}
                          {...field}
                          toggleMask
                          className={classNames({ 'p-invalid': fieldState.invalid })}
                          header={passwordHeader}
                        />
                      )}
                    />
                    <label
                      htmlFor="password"
                      className={classNames({ 'p-error': errors.password })}
                    >
                      Current Password*
                    </label>
                  </span>
                  {getFormErrorMessage('password')}
                </div>

                <div className="field">
                  <span className="p-float-label">
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: 'Password is required.' }}
                      render={({ field, fieldState }) => (
                        <Password
                          id={field.name}
                          {...field}
                          toggleMask
                          className={classNames({ 'p-invalid': fieldState.invalid })}
                          header={passwordHeader}
                          footer={passwordFooter}
                        />
                      )}
                    />
                    <label
                      htmlFor="password"
                      className={classNames({ 'p-error': errors.password })}
                    >
                      New Password*
                    </label>
                  </span>
                  {getFormErrorMessage('password')}
                </div>

                <div className="field">
                  <span className="p-float-label">
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: 'Password is required.' }}
                      render={({ field, fieldState }) => (
                        <Password
                          id={field.name}
                          {...field}
                          toggleMask
                          className={classNames({ 'p-invalid': fieldState.invalid })}
                          header={passwordHeader}
                          footer={passwordFooter}
                        />
                      )}
                    />
                    <label
                      htmlFor="password"
                      className={classNames({ 'p-error': errors.password })}
                    >
                      Repeat Password*
                    </label>
                  </span>
                  {getFormErrorMessage('password')}
                </div>

                <Button
                  type="submit"
                  label="Confirm Password Change"
                  className="mt-2"
                  icon="pi pi-check"
                  style={{ display: 'flex', flexDirection: 'row-reverse' }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordSettings
