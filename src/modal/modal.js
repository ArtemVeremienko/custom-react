import React from 'react'

export default ({ formData, showCongrats, closeModal }) => {
  const { email, phone, name } = formData

  const handleCancel = () => {
    closeModal();
  }

  const handleOk = () => {
    showCongrats()
  }

  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Change your info:</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
              onClick={handleCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Email: <strong>{email}</strong></p>
            <p>Phone: <strong>{phone}</strong></p>
            <p>Name: <strong>{name}</strong></p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal"
              onClick={handleCancel}>Close</button>
            <button type="button" className="btn btn-primary"
              onClick={handleOk}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
