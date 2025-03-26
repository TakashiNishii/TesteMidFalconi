"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { TypesEntities } from "@/lib/utils"

interface FilterContextData {
  typeEntity: TypesEntities
  searchId: string
  profileId: string
  setTypeEntity: (type: TypesEntities) => void
  setSearchId: (id: string) => void
  setProfileId: (id: string) => void
  clearFilters: () => void
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [typeEntity, setTypeEntity] = useState<TypesEntities>(TypesEntities.User)
  const [searchId, setSearchId] = useState("")
  const [profileId, setProfileId] = useState("")

  const clearFilters = () => {
    setTypeEntity(TypesEntities.User)
    setSearchId("")
    setProfileId("")
  }

  return (
    <FilterContext.Provider
      value={{
        typeEntity,
        searchId,
        profileId,
        setTypeEntity,
        setSearchId,
        setProfileId,
        clearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider")
  }

  return context
} 