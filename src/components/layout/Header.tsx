"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/citas": "Agenda de Citas",
  "/estilistas": "Estilistas",
  "/servicios": "Catálogo de Servicios",
  "/paquetes": "Paquetes",
  "/membresias": "Membresías",
  "/clientes": "Base de Clientes",
};

export default function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  const breadcrumbs = pathname === "/"
    ? ["Inicio"]
    : ["Inicio", title];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-[oklch(0.12_0.02_260)]/80 backdrop-blur-xl px-8">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-white">{title}</h1>
        <nav className="mt-0.5 flex items-center gap-1 text-xs text-white/40">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              <span className={i === breadcrumbs.length - 1 ? "text-[oklch(0.65_0.15_330)]" : ""}>{crumb}</span>
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-white">Administrador</p>
          <p className="text-xs text-white/40">LuxeSalon</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-[oklch(0.65_0.15_330)] flex items-center justify-center text-black font-bold text-sm">
          AD
        </div>
      </div>
    </header>
  );
}
