"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCircle,
  Phone,
  Mail,
  Clock,
  Crown,
  Search,
  ChevronDown,
  Scissors,
  Calendar,
  History,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { clientes } from "@/lib/data";

export default function ClientesPage() {
  const [busqueda, setBusqueda] = useState("");
  const [expandido, setExpandido] = useState<string | null>(null);

  const clientesFiltrados = clientes.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.telefono.includes(busqueda) ||
    c.email.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.3 }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Buscar cliente por nombre, teléfono o email..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="h-11 w-full sm:w-96 rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-[oklch(0.65_0.15_330)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.65_0.15_330)]"
            />
          </div>
          <p className="text-sm text-white/40">{clientesFiltrados.length} clientes</p>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {clientesFiltrados.map((cliente) => (
              <motion.div
                key={cliente.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", bounce: 0.3 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg"
              >
                <button
                  onClick={() =>
                    setExpandido(expandido === cliente.id ? null : cliente.id)
                  }
                  className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]">
                    <UserCircle className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-white">{cliente.nombre}</p>
                    <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {cliente.telefono}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {cliente.email}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-6 text-right">
                    <div>
                      <p className="text-xs text-white/30">Visitas</p>
                      <p className="text-sm font-semibold text-white">{cliente.totalVisitas}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/30">Última visita</p>
                      <p className="text-sm font-semibold text-white">{cliente.ultimaVisita}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {cliente.membresiaActiva ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.65_0.15_330)]/10 px-2.5 py-1 text-xs font-medium text-[oklch(0.65_0.15_330)]">
                          <Crown className="h-3 w-3" />
                          {cliente.membresiaActiva}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-white/30">
                          Sin membresía
                        </span>
                      )}
                    </div>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white/30 transition-transform ${
                      expandido === cliente.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandido === cliente.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-5">
                        <div className="mb-4 flex items-center gap-2">
                          <History className="h-4 w-4 text-white/30" />
                          <span className="text-sm font-semibold text-white">Historial de Servicios</span>
                        </div>

                        <div className="space-y-2">
                          {cliente.historialServicios.map((h, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]">
                                <Scissors className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-white">{h.servicio}</p>
                                <p className="text-xs text-white/40">{h.estilista}</p>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-white/30">
                                <Calendar className="h-3 w-3" />
                                {h.fecha}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
