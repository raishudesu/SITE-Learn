import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./sidebar-nav";
import { sidebarNavItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Settings",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 p-3">
      <div className="w-full max-w-screen-md ">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight text-[#16BC25]">
            Settings
          </h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex w-full lg:max-w-screen-sm">{children}</div>
        </div>
      </div>
    </section>
  );
}
