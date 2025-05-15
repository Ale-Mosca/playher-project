import { SidebarUser } from '../components/SidebarUser';
import LogoutButton from '../components/LogoutButton';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="text-lg font-semibold">PlayHer</h1>
        <LogoutButton />
      </header>
      <div className="flex flex-1">
        <SidebarUser />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
