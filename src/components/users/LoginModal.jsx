
/*
 * components / users / PasswordLoginModal.jsx
**/
import React, { Fragment as F, useContext, useState, } from 'react'
import Modal from "react-modal"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

import {
  Btn,
  C, CloseBtn,
  FlexCol, FlexRow,
  logg,
  request,
} from "$shared"
import {
  AuthContext, AuthContextProvider,
} from './'

import styles from './LoginModal.scss'

/**
 * LoginModal
**/
const LoginModal = (props) => {
  // logg(props, 'LoginModal')

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    useApi,
  } = useContext(AuthContext)
  // logg(useContext(TwofoldContext), 'LoginModalUsedContext')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const api = useApi()

  const doPasswordLogin = async (email, password) => {
    api.postLogin({ email, password }).then((r) => {
      setLoginModalOpen(false)
      toast('Login Successful.')
    }).catch((err) => {
      logg(e, 'e323')
      toast("Login failed")
      setCurrentUser(C.anonUser)
    })
  }

  return <Modal
    className={{
      base: styles.LoginModal,
      // afterOpen: 'after-open-1',
      // beforeClose: 'after-open-2',
    }}
    isOpen={loginModalOpen}
    overlayClassName={styles.LoginModalOverlay}
    // portalClassName={'LoginModalPortal'}
  >
    <FlexRow style={{ flexDirection: 'row-reverse' }} >
      <CloseBtn onClick={() => setLoginModalOpen(false)} />
    </FlexRow>
    <FlexCol>
      <label for='email'>Email</label>
      <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)    } />

      <label for='password'>Password</label>
      <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value) }
        onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
      />
      <FlexRow style={{
        justifyContent: 'space-between',
        marginTop: '0.4em',
      }} >
        <span>Forgot?</span>
        <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
      </FlexRow>
    </FlexCol>
  </Modal>
}

export default LoginModal
