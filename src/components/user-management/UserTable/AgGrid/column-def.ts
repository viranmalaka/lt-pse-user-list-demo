import { ColDef } from 'ag-grid-community';
import { User } from '@/types/user';
import { LastWeekPurchasesCellRenderer, RevenueTypeCellRenderer, UserActionsCellRenderer } from './CellRenderers';

export const columnDef = [
  {
    field: 'id',
    headerName: 'Name',
    cellRenderer: ({ data }: { data: User }) => `${data.firstName} ${data.lastName}`,
    flex: 3,
    cellClass: 'py-1',
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 5,
    cellClass: 'py-1',
  },
  {
    field: 'age',
    headerName: 'Age',
    valueFormatter: (params: { value: number }) => `${params.value} years`,
    flex: 2,
    cellClass: 'py-1',
  },
  { field: 'revenueType', headerName: 'Revenue', cellRenderer: RevenueTypeCellRenderer, flex: 2 },
  {
    field: 'lastWeekPurchases',
    headerName: 'Last Week Purchases',
    cellRenderer: LastWeekPurchasesCellRenderer,
    flex: 4,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    cellRenderer: UserActionsCellRenderer,
    flex: 3,
    cellClass: 'py-2.5',
  },
] as ColDef<User>[];
