"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  Sparkles,
  Scissors,
  Gift,
  Crown,
  UserCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/citas", label: "Citas", icon: Calendar },
  { href: "/estilistas", label: "Estilistas", icon: Sparkles },
  { href: "/servicios", label: "Servicios", icon: Scissors },
  { href: "/paquetes", label: "Paquetes", icon: Gift },
  { href: "/membresias", label: "Membresías", icon: Crown },
  { href: "/clientes", label: "Clientes", icon: UserCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/5 bg-[oklch(0.14_0.02_260)] backdrop-blur-xl">
      <div className="flex h-16 items-center border-b border-white/5 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[oklch(0.65_0.15_330)] text-black shadow-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            LuxeSalon
          </span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <ul className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-xl bg-white/10 shadow-inner"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">
                    <Icon className={cn("h-5 w-5", isActive && "text-[oklch(0.65_0.15_330)]")} />
                  </span>
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/5 p-4">
        <div className="rounded-xl bg-white/5 p-4 backdrop-blur-md border border-white/5">
          <p className="text-xs text-white/40 mb-1">Próxima cita</p>
          <p className="text-sm font-semibold text-white">María González</p>
          <p className="text-xs text-[oklch(0.65_0.15_330)] mt-0.5">09:00 - Corte de Cabello</p>
        </div>
      </div>
    </aside>
  );
}
