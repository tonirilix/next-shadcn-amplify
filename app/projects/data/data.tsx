import {
  ArrowDown as ArrowDownToLine,
  Minus as ArrowRightToLine,
  ArrowUpCircle,
  ArrowUp as ArrowUpToLine,
  CheckCircle2,
  Circle,
  HelpCircle,
  XCircle,
} from "lucide-react"

export const labels = [
  {
    value: "bug",
    label: "Etiqueta 1",
  },
  {
    value: "feature",
    label: "Etiqueta 2",
  },
  {
    value: "documentation",
    label: "Prospecto",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Por hacer",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "En proceso",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Terminado",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Cancelado",
    icon: XCircle,
  },
]

export const priorities = [
  {
    label: "Baja",
    value: "low",
    icon: ArrowDownToLine,
  },
  {
    label: "Media",
    value: "medium",
    icon: ArrowRightToLine,
  },
  {
    label: "Alta",
    value: "high",
    icon: ArrowUpToLine,
  },
]
