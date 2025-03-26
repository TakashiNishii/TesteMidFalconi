"use client"

import { useFilter } from "@/contexts/filter-context"
import TypesTab from "../common/types-tab"
import { useEffect, useState } from "react"
import { Profile } from "../../lib/utils"

const Filters = () => {
  const { typeEntity, searchId, profileId, setTypeEntity, setSearchId, setProfileId } = useFilter()
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch('http://localhost:3001/profiles')
      const data = await response.json()
      setProfiles(data)
    }
    fetchProfiles()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <TypesTab setTypeSelected={setTypeEntity} typeSelected={typeEntity} />

      <h1 className="text-2xl font-bold">Listagem de {typeEntity}</h1>

      <div className="flex flex-row gap-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Pesquisar por ID"
            className="input input-bordered w-full max-w-xs"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
        </div>

        <div className="form-control">
          <select className="select select-bordered w-full max-w-xs" defaultValue={profileId} onChange={(e) => setProfileId(e.target.value)}>
            <option disabled value="">Selecione um perfil</option>
            <option value="">Todos</option>
            {profiles.map(profile => (
              <option key={profile.id} value={profile.id}>
                {profile.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters