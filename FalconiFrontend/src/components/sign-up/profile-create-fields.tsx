"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

const ProfileCreateForm = () => {
  const [name, setName] = useState("")
  const [messageError, setMessageError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessageError("")

    try {
      const response = await fetch("http://localhost:3001/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao criar perfil")
      }

      // Limpar o formulário após sucesso
      setName("")
      setShowSuccessModal(true)
    } catch (error) {
      console.error("Erro:", error)
      setMessageError("Erro ao criar perfil. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="space-y-4 w-full">
          <input
            type="text"
            placeholder="Nome do Perfil"
            className={cn("input input-bordered w-full", messageError && "input-error")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="min-h-[20px]">
          {messageError && (
            <label className="text-error text-sm block">{messageError}</label>
          )}
        </div>

        <button
          type="submit"
          className={cn("btn btn-primary w-full", isLoading && "loading")}
          disabled={isLoading}
        >
          {isLoading ? "Criando..." : "Criar Perfil"}
        </button>
      </form>

      {/* Modal de Sucesso */}
      <dialog id="success_modal" className={cn("modal", showSuccessModal && "modal-open")}>
        <div className="modal-box flex flex-col items-center justify-center">
          <CheckCircleIcon className="w-32 h-32 text-success" />
          <p className="py-4 text-lg font-bold">
            Perfil criado com sucesso!
          </p>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleCloseModal}>
              OK
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCloseModal}>close</button>
        </form>
      </dialog>
    </>
  )
}

export default ProfileCreateForm 