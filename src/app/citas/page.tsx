"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2, AlertCircle, XCircle, Filter, Search } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { citas, estilistas, servicios } from "@/lib/data";

const diasSemana = [
  { label: "Lun", fecha: "2026-06-01", dia: "01" },
  { label: "Mar", fecha: "2026-06-02", dia: "02" },
  { label: "Mie", fecha: "2026-06-03", dia: "03" },
  { label: "Jue", fecha: "2026-06-04", dia: "04" },
  { label: "Vie", fecha: "2026-06-05", dia: "05" },
  { label: "Sab", fecha: "2026-06-06", dia: "06" },
  { label: "Dom", fecha: "2026-06-07", dia: "07" },
];

export default function CitasPage() {
  const [diaSeleccionado, setDiaSeleccionado] = useState("2026-06-03");
  const [filtroServicio, setFiltroServicio] = useState<string>("todos");
  const [filtroEstilista, setFiltroEstilista] = useState<string>("todos");
  const [busqueda, setBusqueda] = useState("");

  const citasFiltradas = citas.filter((c) => {
    const matchDia = c.fecha === diaSeleccionado;
    const matchServicio = filtroServicio === "todos" || c.servicio === filtroServicio;
    const matchEstilista = filtroEstilista === "todos" || c.estilista === filtroEstilista;
    const matchBusqueda = c.cliente.toLowerCase().includes(busqueda.toLowerCase());
    return matchDia && matchServicio && matchEstilista && matchBusqueda;
  });

  const citasPorHora = citasFiltradas.reduce((acc, c) => {
    const hora = c.hora;
    if (!acc[hora]) acc[hora] = [];
    acc[hora].push(c);
    return acc;
  }, {} as Record<string, typeof citasFiltradas>);

  const horasOrdenadas = Object.keys(citasPorHora).sort();

  const estados = {
    confirmada: { color: "text-emerald-400", bg: "bg-emerald-400/10", icon: CheckCircle2 },
    pendiente: { color: "text-amber-400", bg: "bg-amber-400/10", icon: AlertCircle },
    cancelada: { color: "text-red-400", bg: "bg-red-400/10", icon: XCircle },
    completada: { color: "text-blue-400", bg: "bg-blue-400/10", icon: CheckCircle2 },
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.3 }}
        className="space-y-6"
      >
        {/* Selector de semana */}
        <div className="flex items-center gap-2">
          {diasSemana.map((dia) => (
            <button
              key={dia.fecha}
              onClick={() => setDiaSeleccionado(dia.fecha)}
              className={`flex flex-col items-center rounded-xl px-4 py-3 text-sm transition-all border ${
                diaSeleccionado === dia.fecha
                  ? "border-[oklch(0.65_0.15_330)] bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]"
                  : "border-white/5 bg-white/[0.02] text-white/40 hover:bg-white/[0.04] hover:text-white/60"
              }`}
            >
              <span className="text-xs font-medium">{dia.label}</span>
              <span className="text-lg font-bold">{dia.dia}</span>
            </button>
          ))}
        </div>

        {/* Filtros */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Buscar cliente..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="h-10 w-full sm:w-64 rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-[oklch(0.65_0.15_330)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.65_0.15_330)]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-white/30" />
              <select
                value={filtroServicio}
                onChange={(e) => setFiltroServicio(e.target.value)}
                className="h-10 rounded-xl border border-white/10 bg-white/[0.03] px-3 text-sm text-white focus:border-[oklch(0.65_0.15_330)] focus:outline-none"
              >
                <option value="todos" className="bg-[oklch(0.14_0.02_260)]">Todos los servicios</option>
                {servicios.map((s) => (
                  <option key={s.id} value={s.nombre} className="bg-[oklch(0.14_0.02_260)]">
                    {s.nombre}
                  </option>
                ))}
              </select>
              <select
                value={filtroEstilista}
                onChange={(e) => setFiltroEstilista(e.target.value)}
                className="h-10 rounded-xl border border-white/10 bg-white/[0.03] px-3 text-sm text-white focus:border-[oklch(0.65_0.15_330)] focus:outline-none"
              >
                <option value="todos" className="bg-[oklch(0.14_0.02_260)]">Todos los estilistas</option>
                {estilistas.map((e) => (
                  <option key={e.id} value={e.nombre} className="bg-[oklch(0.14_0.02_260)]">
                    {e.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-sm text-white/40">{citasFiltradas.length} citas</p>
        </div>

        {/* Agenda */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-lg">
          {horasOrdenadas.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-white/30">
              <Calendar className="mb-3 h-10 w-10" />
              <p className="text-sm">No hay citas para este día con los filtros seleccionados.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {horasOrdenadas.map((hora) => (
                <div key={hora} className="flex gap-4">
                  <div className="flex w-16 shrink-0 flex-col items-end pt-3">
                    <span className="text-sm font-semibold text-white">{hora}</span>
                  </div>
                  <div className="flex-1 space-y-2 border-l border-white/5 pl-4">
                    {citasPorHora[hora].map((cita) => {
                      const estado = estados[cita.estado];
                      const Icon = estado.icon;
                      return (
                        <div
                          key={cita.id}
                          className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors"
                        >
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${estado.bg} ${estado.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-white truncate">{cita.cliente}</p>
                            <p className="text-xs text-white/40">{cita.servicio} · {cita.estilista}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${estado.bg} ${estado.color}`}>
                              {cita.estado}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
