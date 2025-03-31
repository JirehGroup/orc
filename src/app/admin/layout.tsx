// @/app/admin/layout.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { LanguageToggle } from "@/components/common/LanguageToggle";

const menuItems = [
  { name: "Events", path: "/admin/events" },
  { name: "Blogs", path: "/admin/blogs" },
  { name: "News", path: "/admin/news" },
  { name: "Settings", path: "/admin/settings" },
  { name: "Gallery", path: "/admin/gallery" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation - Full Width */}
      <header className="w-full bg-background p-4 flex justify-between shadow-md">
        <div className="flex items-center">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-accent rounded-md mr-4 md:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/admin">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden flex">
        {/* Overlay for mobile only */}
        <div 
          className={`
            fixed inset-0 bg-black/50 z-40
            transition-opacity duration-300
            md:hidden
            ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar - Fixed on desktop, overlay on mobile */}
        <aside className={`
          fixed md:static top-0 left-0 h-full w-64 bg-background shadow-md
          transform transition-transform duration-300 ease-in-out
          z-50
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Admin Panel</h2>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-accent rounded-md md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-4">
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`block p-2 rounded-md transition-colors ${
                      pathname === item.path 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content - Full width on mobile, pushed by sidebar on desktop */}
        <div className="flex-1 h-full overflow-auto bg-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
