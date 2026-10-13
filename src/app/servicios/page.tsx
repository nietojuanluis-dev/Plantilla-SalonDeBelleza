"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Clock, DollarSign, Flame, ChevronRight } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { servicios, categorias } from "@/lib/data";

const catIcons: Record<string, typeof Scissors> = {
  "Peluquería": Scissors,
  "Coloración": Flame,
  "Manicura y Pedicura": Flame,
  "Tratamientos Faciales": Flame,
  "Masajes": Flame,
};

function formatCOP(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ServiciosPage() {
  const [catActiva, setCatActiva] = useState<string>("todas");

  const serviciosFiltrados =
    catActiva === "todas"
      ? servicios
      : servicios.filter((s) => s.categoria === catActiva);

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" as const, bounce: 0.3 }}
        className="space-y-6"
      >
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCatActiva("todas")}
            className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all border ${
              catActiva === "todas"
                ? "border-[oklch(0.65_0.15_330)] bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]"
                : "border-white/5 bg-white/[0.02] text-white/50 hover:bg-white/[0.04]"
            }`}
          >
            Todas
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCatActiva(cat)}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all border ${
                catActiva === cat
                  ? "border-[oklch(0.65_0.15_330)] bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]"
                  : "border-white/5 bg-white/[0.02] text-white/50 hover:bg-white/[0.04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {serviciosFiltrados.map((s) => {
              const Icon = catIcons[s.categoria] || Scissors;
              return (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring" as const, bounce: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-lg transition-all hover:border-[oklch(0.65_0.15_330)]/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    {s.popular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.65_0.15_330)]/10 px-2.5 py-1 text-[11px] font-medium text-[oklch(0.65_0.15_330)]">
                        <Flame className="h-3 w-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">{s.nombre}</h3>
                  <p className="mt-1 text-sm text-white/50">{s.descripcion}</p>

                  <div className="mt-5 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-white/30" />
                      <span className="text-sm text-white/60">{s.duracion} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-white/30" />
                      <span className="text-sm font-semibold text-[oklch(0.65_0.15_330)]">{formatCOP(s.precio)}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="rounded-full bg-white/[0.02] px-3 py-1 text-xs text-white/40 border border-white/5">
                      {s.categoria}
                    </span>
                    <button className="flex items-center gap-1 text-xs font-medium text-[oklch(0.65_0.15_330)] transition-opacity hover:opacity-80">
                      Reservar
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
