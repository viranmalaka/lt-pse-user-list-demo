import { Filters } from "@/components/Filters/Filters";
import { UserTable } from "@/components/UserTable/UserTable";

export default function Home() {
  return (
    <div className="space-y-4">
      <Filters />
      <div className="overflow-x-auto">
        <UserTable />
      </div>
    </div>
  );
}
