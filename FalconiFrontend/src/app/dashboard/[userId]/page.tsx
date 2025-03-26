import Filters from "../../../components/dashboard/filters"
import ListTable from "../../../components/dashboard/list-entities/list-table"
import MeHeader from "../../../components/dashboard/me-header"
import { FilterProvider } from "@/contexts/filter-context"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard do usuário',
}

interface PageProps {
  params: Promise<{ userId: string }>
}

export default async function DashboardUserPage({ params }: PageProps) {
  const { userId } = await params

  return (
    <FilterProvider>
      <div className="flex flex-col gap-4">
        <MeHeader userId={userId} />
        <div className="flex flex-col p-4 border-2 border-gray-300 rounded-lg w-[98dvw] self-center">
          <Filters />
        </div>
        <ListTable />
      </div>
    </FilterProvider>
  )
}