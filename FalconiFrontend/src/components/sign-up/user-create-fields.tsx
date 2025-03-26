"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { CheckCircleIcon, ClipboardIcon } from "@heroicons/react/24/solid"

interface Profile {
  name: string
  id: string
}

const UserCreateFields = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [profileId, setProfileId] = useState("")
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [messageError, setMessageError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [createdUserId, setCreatedUserId] = useState("")
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    // Carregar a lista de perfis quando o componente montar
    fetch("http://localhost:3001/profiles")
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => {
        console.error("Erro ao carregar perfis:", error)
        setMessageError("Erro ao carregar lista de perfis")
      })
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessageError("")

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          profileId,
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao criar usuário")
      }

      const data = await response.json()
      setCreatedUserId(data.id)

      // Limpar o formulário após sucesso
      setFirstName("")
      setLastName("")
      setEmail("")
      setProfileId("")
      setShowSuccessModal(true)
    } catch (error) {
      console.error("Erro:", error)
      setMessageError("Erro ao criar usuário. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
    router.push("/")
  }

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(createdUserId)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (error) {
      console.error("Erro ao copiar ID:", error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className={cn("input input-bordered w-full", messageError && "input-error")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            disabled={isLoading}
          />

          <input
            type="text"
            placeholder="Sobrenome"
            className={cn("input input-bordered w-full", messageError && "input-error")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            disabled={isLoading}
          />

          <input
            type="email"
            placeholder="Email"
            className={cn("input input-bordered w-full", messageError && "input-error")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />

          <select
            className={cn("select select-bordered w-full", messageError && "select-error")}
            value={profileId}
            onChange={(e) => setProfileId(e.target.value)}
            required
            disabled={isLoading}
          >
            <option value="">Selecione um perfil</option>
            {profiles.map((profile) => (
              <option key={profile.id} value={profile.id}>
                {profile.name}
              </option>
            ))}
          </select>
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
          {isLoading ? "Criando..." : "Criar Usuário"}
        </button>
      </form>

      {/* Modal de Sucesso */}
      <dialog id="success_modal" className={cn("modal", showSuccessModal && "modal-open")}>
        <div className="modal-box flex flex-col items-center justify-center">
          <CheckCircleIcon className="w-32 h-32 text-success" />
          <p className="py-4 text-lg font-bold">Usuário criado com sucesso!</p>
          <div className="flex items-center gap-2">
            <span className="text-sm">ID do usuário: {createdUserId}</span>
            <button
              onClick={handleCopyId}
              className="btn btn-circle btn-sm"
              title="Copiar ID"
            >
              <ClipboardIcon className="w-4 h-4" />
            </button>
          </div>
          {copySuccess && (
            <span className="text-success text-sm mt-2">ID copiado com sucesso!</span>
          )}
          <div className="modal-action">
            <button className="btn btn-success w-full" onClick={handleCloseModal}>
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

export default UserCreateFields