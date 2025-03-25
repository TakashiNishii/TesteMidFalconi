"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "../../lib/utils"
import Cookies from 'js-cookie'

const SignInFields = () => {
  const [id, setId] = useState("")
  const [messageError, setMessageError] = useState("")
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          Cookies.set('userId', id, { expires: 7 });
          router.push(`/dashboard/${id}`)
        } else {
          setMessageError("ID não encontrado")
        }
      })
      .catch(error => {
        console.error('Erro:', error)
        setMessageError("Erro ao tentar fazer login")
      })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="min-h-[20px] -mb-1"> {/* Container com altura mínima fixa */}
        {messageError && (
          <label htmlFor="id" className="text-error text-xs block">{messageError}</label>
        )}
      </div>
      <input
        type="text"
        name="id"
        id="id"
        placeholder="ID"
        className={cn("input-lg w-full rounded-md border border-neutral p-2", messageError.length > 0 && "border-error")}
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
        onFocus={() => setMessageError("")}
      />
      <button type="submit" className="btn btn-primary w-full">Entrar</button>
    </form>
  )
}

export default SignInFields