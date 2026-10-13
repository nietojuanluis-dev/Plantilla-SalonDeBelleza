"use client";

import { motion } from "framer-motion";
import { Star, Clock, Sparkles, Scissors, Flower2 } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { estilistas } from "@/lib/data";

const especialidadIcons: Record<string, typeof Sparkles> = {
  "Peluquería": Scissors,
  "Coloración": Sparkles,
  "Manicura": Flower2,
  "Pedicura": Flower2,
  "Nail Art": Flower2,
  "Tratamientos Faciales": Flower2,
  "Masajes": Flower2,
  "Maquillaje": Sparkles,
  "Barbería": Scissors,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.3 } },
};

export default function EstilistasPage() {
  return (
    <DashboardLayout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/40">
            {estilistas.length} estilistas en el equipo
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs text-white/40">Disponible</span>
            <span className="ml-2 h-2 w-2 rounded-full bg-white/20"></span>
            <span className="text-xs text-white/40">No disponible</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {estilistas.map((estilista) => (
            <motion.div
              key={estilista.id}
              variants={item}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg transition-all hover:border-[oklch(0.65_0.15_330)]/20 hover:bg-white/[0.05]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={estilista.foto}
                  alt={estilista.nombre}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_260)] via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      estilista.disponible
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${estilista.disponible ? "bg-emerald-400" : "bg-white/30"}`}></span>
                    {estilista.disponible ? "Disponible" : "No disponible"}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4">
                  <div className="flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1">
                    <Star className="h-3.5 w-3.5 text-[oklch(0.7_0.18_80)] fill-[oklch(0.7_0.18_80)]" />
                    <span className="text-xs font-semibold text-white">{estilista.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{estilista.nombre}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{estilista.bio}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {estilista.especialidades.map((esp) => {
                    const Icon = especialidadIcons[esp] || Sparkles;
                    return (
                      <span
                        key={esp}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60"
                      >
                        <Icon className="h-3 w-3 text-[oklch(0.65_0.15_330)]" />
                        {esp}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-white/40">
                  <Clock className="h-3.5 w-3.5" />
                  {estilista.horario}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
