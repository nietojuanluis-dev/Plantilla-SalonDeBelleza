"use client";

import { motion } from "framer-motion";
import { Gift, Clock, DollarSign, Check, Scissors } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { paquetes } from "@/lib/data";

function formatCOP(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

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

export default function PaquetesPage() {
  return (
    <DashboardLayout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <div className="rounded-2xl border border-[oklch(0.65_0.15_330)]/20 bg-[oklch(0.65_0.15_330)]/5 p-6 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Paquetes Especiales</h2>
              <p className="text-sm text-white/50">
                Combina servicios y ahorra con nuestros paquetes diseñados para ti.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {paquetes.map((paquete) => {
            const ahorro = paquete.precioOriginal - paquete.precio;
            const porcentaje = Math.round((ahorro / paquete.precioOriginal) * 100);

            return (
              <motion.div
                key={paquete.id}
                variants={item}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg transition-all hover:border-[oklch(0.65_0.15_330)]/20"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{paquete.nombre}</h3>
                      <p className="mt-1 text-sm text-white/50">{paquete.descripcion}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                      Ahorra {porcentaje}%
                    </span>
                  </div>

                  <div className="mt-6 flex items-end gap-3">
                    <span className="text-3xl font-bold text-[oklch(0.65_0.15_330)]">
                      {formatCOP(paquete.precio)}
                    </span>
                    <span className="mb-1 text-sm text-white/30 line-through">
                      {formatCOP(paquete.precioOriginal)}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-white/40">
                    <Clock className="h-4 w-4" />
                    Duración total: {paquete.duracionTotal} minutos
                  </div>
                </div>

                <div className="flex-1 border-t border-white/5 bg-white/[0.01] p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/30 mb-3">Incluye:</p>
                  <ul className="space-y-2.5">
                    {paquete.serviciosIncluidos.map((srv) => (
                      <li key={srv} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.15_330)]/10">
                          <Check className="h-3.5 w-3.5 text-[oklch(0.65_0.15_330)]" />
                        </div>
                        <span className="text-sm text-white/70">{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/5 p-4">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[oklch(0.65_0.15_330)] py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90">
                    <DollarSign className="h-4 w-4" />
                    Reservar Paquete
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
