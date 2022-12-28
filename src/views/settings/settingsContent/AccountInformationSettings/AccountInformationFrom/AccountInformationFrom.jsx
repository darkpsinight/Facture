import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { classNames } from 'primereact/utils'
import './style.css'

const AccountInformationForm = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})

  const defaultValues = {
    name: '',
    email: '',
    password: '',
    signature: '',
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

  return (
    <>
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
            <h5>Update Account Details Successful!</h5>
            <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
              <b>{formData.name}</b>, Your changes are successfully updated ; this is your new
              email: <b>{formData.email}</b> you should use from now on.
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
                      name="name"
                      control={control}
                      rules={{ required: 'User name is required.' }}
                      render={({ field, fieldState }) => (
                        <InputText
                          id={field.name}
                          {...field}
                          autoFocus
                          className={classNames({ 'p-invalid': fieldState.invalid })}
                        />
                      )}
                    />
                    <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>
                      User name
                    </label>
                  </span>
                  {getFormErrorMessage('name')}
                </div>

                <div className="field">
                  <span className="p-float-label">
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: 'Email is required.' }}
                      render={({ field, fieldState }) => (
                        <InputText
                          id={field.email}
                          {...field}
                          autoFocus
                          className={classNames({ 'p-invalid': fieldState.invalid })}
                        />
                      )}
                    />
                    <label htmlFor="email" className={classNames({ 'p-error': errors.email })}>
                      Email
                    </label>
                  </span>
                  {getFormErrorMessage('email')}
                </div>

                <div className="field">
                  <span className="p-float-label">
                    <Controller
                      name="RepeatEmail"
                      control={control}
                      rules={{ required: 'Repeat Email is required.' }}
                      render={({ field, fieldState }) => (
                        <InputText
                          id={field.RepeatEmail}
                          {...field}
                          autoFocus
                          className={classNames({ 'p-invalid': fieldState.invalid })}
                        />
                      )}
                    />
                    <label
                      htmlFor="RepeatEmail"
                      className={classNames({ 'p-error': errors.RepeatEmail })}
                    >
                      Repeat Email
                    </label>
                  </span>
                  {getFormErrorMessage('RepeatEmail')}
                </div>

                <div className="card">
                  <span className="p-3">Signature</span>
                </div>

                <Button
                  type="submit"
                  label="Update Account details"
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

export default AccountInformationForm