"use client"

import { useFilter } from "@/contexts/filter-context"
import { TypesEntities } from "../../../lib/utils"
import UserHeader from "./users/user-header"
import ProfileHeader from "./profiles/profile-header"
import UserBody from "./users/user-body"
import ProfileBody from "./profiles/profile-body"

const ListTable = () => {
  const { typeEntity } = useFilter()

  return (
    <div className="overflow-x-auto  p-4 border-2 border-gray-300 rounded-lg w-[98dvw] self-center">
      <table className="table table-zebra table-xs">
        <thead>
          {
            typeEntity === TypesEntities.User && <UserHeader />
          }
          {
            typeEntity === TypesEntities.Profile && <ProfileHeader />
          }
        </thead>
        <tbody>
          {
            typeEntity === TypesEntities.User && <UserBody />
          }

          {
            typeEntity === TypesEntities.Profile && <ProfileBody />
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListTable