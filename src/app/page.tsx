"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  Scissors,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  getCitasHoy,
  getIngresosMes,
  getTopServicios,
  estilistas,
} from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.3 } },
};

function formatCOP(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function DashboardPage() {
  const citasHoy = getCitasHoy();
  const ingresosMes = getIngresosMes();
  const topServicios = getTopServicios();
  const estilistasActivos = estilistas.filter((e) => e.disponible).length;

  const stats = [
    {
      label: "Citas Hoy",
      value: citasHoy.length,
      icon: Calendar,
      accent: "oklch(0.65 0.15 330)",
    },
    {
      label: "Ingresos del Mes",
      value: formatCOP(ingresosMes),
      icon: DollarSign,
      accent: "oklch(0.6 0.12 180)",
    },
    {
      label: "Estilistas Activos",
      value: estilistasActivos,
      icon: Users,
      accent: "oklch(0.6 0.15 250)",
    },
    {
      label: "Servicios Trending",
      value: topServicios.length,
      icon: TrendingUp,
      accent: "oklch(0.7 0.18 80)",
    },
  ];

  return (
    <DashboardLayout>
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/50">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                  style={{ color: stat.accent }}
                >
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div variants={item} className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Citas de Hoy</h2>
              <span className="rounded-full bg-[oklch(0.65_0.15_330)]/10 px-3 py-1 text-xs font-medium text-[oklch(0.65_0.15_330)]">
                {new Date().toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" })}
              </span>
            </div>

            <div className="space-y-3">
              {citasHoy.length === 0 ? (
                <p className="text-sm text-white/40">No hay citas programadas para hoy.</p>
              ) : (
                citasHoy.map((cita) => (
                  <div
                    key={cita.id}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white truncate">{cita.cliente}</p>
                      <p className="text-xs text-white/40">{cita.servicio} · {cita.estilista}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-white">{cita.hora}</p>
                      <div className="mt-1 flex items-center gap-1">
                        {cita.estado === "confirmada" ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-[11px] text-emerald-400">Confirmada</span>
                          </>
                        ) : cita.estado === "pendiente" ? (
                          <>
                            <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
                            <span className="text-[11px] text-amber-400">Pendiente</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-3.5 w-3.5 text-red-400" />
                            <span className="text-[11px] text-red-400">Cancelada</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-lg">
            <h2 className="mb-6 text-lg font-semibold text-white">Top Servicios</h2>
            <div className="space-y-4">
              {topServicios.map((servicio, i) => (
                <div key={servicio.nombre} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-white/60">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white truncate">{servicio.nombre}</p>
                    <p className="text-xs text-white/40">{servicio.categoria}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Scissors className="h-3.5 w-3.5 text-[oklch(0.65_0.15_330)]" />
                    <span className="text-sm font-semibold text-[oklch(0.65_0.15_330)]">{servicio.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
