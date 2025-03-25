import React from 'react'
import HomeTemplate from '../common/homeTemplate'
import Link from 'next/link'
import SignUpFields from './sign-up-fields'

const SignUpForm = () => {
  return (
    <HomeTemplate
      title="Crie sua conta"
      description="Por favor, insira suas informações para criar sua conta."
    >
      <SignUpFields />
      <div className="flex flex-row items-center justify-center gap-2">
        <Link href="/" className="text-neutral">Já tem uma conta?
          <span className="text-info"> Faça login</span></Link>
      </div>
    </HomeTemplate>
  )
}

export default SignUpForm