import React from 'react'
import propTypes from 'prop-types'

const ContactUsSettingsUpload = (props) => {
  return (
    <>
      <div>
        <div className="card" style={{ padding: '10px' }}>
          <h5>Upload a screenshot</h5>
          <input type="file" {...props.register('file')} />
        </div>
      </div>
    </>
  )
}

export default ContactUsSettingsUpload

ContactUsSettingsUpload.propTypes = {
  register: propTypes.any,
}
