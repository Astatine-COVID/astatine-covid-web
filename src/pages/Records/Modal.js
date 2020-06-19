import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import FocusTrap from 'focus-trap-react';



const Modal = ({onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit,isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <FocusTrap>
    <aside
      tag="aside"
      role="dialog"
      tabIndex="-100"
      aria-modal="true"
      className="modal-cover"
      onClick={onClickOutside}
      onKeyDown={onKeyDown}
    >

    
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className ="modal-body">
        <Form />
        </div>
      </div>
    </div>
    </aside>
    </FocusTrap>
  </React.Fragment>, document.body
) : null;

export default Modal;