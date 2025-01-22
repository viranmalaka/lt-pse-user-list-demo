'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, UserPlus } from 'lucide-react';
import { UserAgeDistributionDashboardWidget } from '@/components/dashboard-widgets/UserAgeDistribution';
import { useUserData } from '@/hooks/use-user-data';
import { UserRevenueTypes } from '@/components/dashboard-widgets/UserRevenueTypes';
import { UserTableWithReactWindow } from '@/components/user-management/UserTable/ReactWindow/UserTableWithReactWindow';

export default function Dashboard() {
  useUserData();

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <UserAgeDistributionDashboardWidget />
        <UserRevenueTypes />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Users</h2>
        <div className="space-x-2">
          <Button asChild variant="outline">
            <Link href="/users">
              <Users className="mr-2 h-4 w-4" />
              See All Users
            </Link>
          </Button>
          <Button asChild>
            <Link href="/users/new">
              <UserPlus className="mr-2 h-4 w-4" />
              Add New User
            </Link>
          </Button>
        </div>
      </div>
      <UserTableWithReactWindow />
    </div>
  );
}
