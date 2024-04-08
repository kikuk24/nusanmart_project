import Breadcrumbs from "@/components/Breadcrumbs";
import DasLayouts from "@/components/Layouts/DasLayouts";
import TableOne from "@/components/Table/Tableone";
import TableTwo from "@/components/Table/TableTwo";

export default function Products() {
  return (
    <DasLayouts>
      <Breadcrumbs pageName={"Products"} />
      <div className="my-6">
        <TableOne></TableOne>
      </div>
      <div className="my-6">
        <TableTwo></TableTwo>
      </div>
    </DasLayouts>
  )
}