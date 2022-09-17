import { display } from '@mui/system';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {openModal} from '../actions/modalAction'
import "./Modal.css"
const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const {openClose, content} = modal;
  
  
    let modalInlineStyle;
 
    if(openClose ==='open'){
        modalInlineStyle = {
            display: 'block',
        };
    }else{
        modalInlineStyle = {
            display: 'none',
        };
    }

  const closeModalHandler = () => {
    dispatch(openModal('close',''))
  };
    return (
    <div className='site-Modal' style={modalInlineStyle}>
      <div className='modal_content'>

        <div className='col right'>
            <spa onClick = {closeModalHandler }className= 'close'>
                &times;
            </spa>
        </div>
        <div className=''>{content}</div>
      </div>
    </div>
  )
}

export default Modal
