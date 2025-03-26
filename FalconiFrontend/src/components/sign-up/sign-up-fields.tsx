"use client"

import { useState } from "react"
import { TypesEntities } from "../../lib/utils"
import UserCreateFields from "./user-create-fields"
import ProfileCreateFields from "./profile-create-fields"
import TypesTab from "../common/types-tab"


const SignUpFields = () => {
  const [typeCreate, setTypeCreate] = useState(TypesEntities.User)

  return (
    <div className="flex flex-col gap-4 w-full">
      <TypesTab setTypeSelected={setTypeCreate} typeSelected={typeCreate} />
      {typeCreate === TypesEntities.User && <UserCreateFields />}
      {typeCreate === TypesEntities.Profile && <ProfileCreateFields />}
    </div>
  )
}

export default SignUpFields