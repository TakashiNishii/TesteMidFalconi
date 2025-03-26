import { cn, TypesEntities } from "../../lib/utils"

interface TypesTabProps {
  typeSelected: TypesEntities
  setTypeSelected: (type: TypesEntities) => void
}

const TypesTab = ({ typeSelected, setTypeSelected }: TypesTabProps) => {
  return (
    <div role="tablist" className="tabs tabs-lift">
      <a
        role="tab"
        className={cn("tab", typeSelected === TypesEntities.User ? "tab-active text-primary font-bold" : "!text-secondary")}
        onClick={() => setTypeSelected(TypesEntities.User)}
      >
        {TypesEntities.User}
      </a>
      <a
        role="tab"
        className={cn("tab", typeSelected === TypesEntities.Profile ? "tab-active text-primary font-bold" : "!text-secondary")}
        onClick={() => setTypeSelected(TypesEntities.Profile)}
      >
        {TypesEntities.Profile}
      </a>
    </div>
  )
}

export default TypesTab
