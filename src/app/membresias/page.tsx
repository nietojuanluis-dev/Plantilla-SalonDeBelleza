"use client";

import { motion } from "framer-motion";
import { Crown, Users, Check, Zap } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { membresias } from "@/lib/data";

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

export default function MembresiasPage() {
  return (
    <DashboardLayout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.65_0.15_330)]/10 text-[oklch(0.65_0.15_330)]">
              <Crown className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Planes de Membresía</h2>
              <p className="text-sm text-white/50">Elige el plan perfecto para tu rutina de belleza.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-2">
            <Users className="h-4 w-4 text-white/40" />
            <span className="text-sm text-white/60">253 suscriptores activos</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {membresias.map((membresia, i) => {
            const destacado = i === 1;
            return (
              <motion.div
                key={membresia.id}
                variants={item}
                className={`relative flex flex-col overflow-hidden rounded-2xl border backdrop-blur-md shadow-lg transition-all hover:-translate-y-1 ${
                  destacado
                    ? "border-[oklch(0.65_0.15_330)]/30 bg-[oklch(0.65_0.15_330)]/5"
                    : "border-white/10 bg-white/[0.03] hover:border-[oklch(0.65_0.15_330)]/20"
                }`}
              >
                {destacado && (
                  <div className="absolute top-0 right-0 rounded-bl-2xl bg-[oklch(0.65_0.15_330)] px-3 py-1 text-[11px] font-bold text-black">
                    MÁS POPULAR
                  </div>
                )}

                <div className="p-6 pb-0">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${membresia.color}20`,
                      color: membresia.color,
                    }}
                  >
                    <Crown className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white">{membresia.nombre}</h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {formatCOP(membresia.precioMensual)}
                    </span>
                    <span className="text-sm text-white/40">/mes</span>
                  </div>
                  <p className="mt-1 text-xs text-white/30">
                    {formatCOP(membresia.precioAnual)} si pagas anual
                  </p>
                </div>

                <div className="flex-1 p-6">
                  <ul className="space-y-3">
                    {membresia.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                          <Check className="h-3 w-3 text-emerald-400" />
                        </div>
                        <span className="text-sm text-white/70">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/5 p-6 pt-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-white/30" />
                    <span className="text-xs text-white/30">{membresia.suscriptores} clientes suscritos</span>
                  </div>
                  <button
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                      destacado
                        ? "bg-[oklch(0.65_0.15_330)] text-black hover:opacity-90"
                        : "border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <Zap className="h-4 w-4" />
                    Suscribirse
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
