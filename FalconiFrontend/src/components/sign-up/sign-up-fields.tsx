"use client"

import { useState } from "react"
import { cn } from "../../lib/utils"
import UserCreateFields from "./user-create-fields"

enum TypeCreate {
  User = "Usuário",
  Profile = "Perfil"
}

const SignUpFields = () => {
  const [typeCreate, setTypeCreate] = useState(TypeCreate.User)

  return (
    <div className="flex flex-col gap-4">
      <div role="tablist" className="tabs tabs-lift">
        <a
          role="tab"
          onClick={() => setTypeCreate(TypeCreate.User)}
          className={cn("tab", typeCreate === TypeCreate.User ? "tab-active text-primary font-bold" : "!text-secondary")}
        >
          {TypeCreate.User}
        </a>
        <a
          role="tab"
          onClick={() => setTypeCreate(TypeCreate.Profile)}
          className={cn("tab", typeCreate === TypeCreate.Profile ? "tab-active text-primary font-bold" : "!text-secondary")}
        >
          {TypeCreate.Profile}
        </a>
      </div>
      {typeCreate === TypeCreate.User && <UserCreateFields />}
      {/* {typeCreate === TypeCreate.Profile && <ProfileCreateFields />} */}
    </div>
  )
}

export default SignUpFields