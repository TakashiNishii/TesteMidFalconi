import React from 'react'
import SignUpForm from '../../components/sign-up/sign-up-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MidFalconi - Sign Up',
  description: 'Página de cadastro do MidFalconi',
}

const SignUpPage = () => {
  return (
    <SignUpForm />
  )
}

export default SignUpPage