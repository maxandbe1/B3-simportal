export type ModuleKey = "identity" | "pattern" | "memory" | "beesim";

export type ModuleEntry = {
  key: ModuleKey;
  label: string;
  loader: () => Promise<{ default: React.ComponentType }>;
};

export const moduleRegistry: ModuleEntry[] = [
  {
    key: "beesim",
    label: "Bee SIM",
    loader: () => import("../modules/beesim/BeeSimRoot").then((m) => ({ default: m.BeeSimRoot })),
  },
  {
    key: "identity",
    label: "Identity",
    loader: () =>
      import("../modules/identity/IdentityRoot").then((m) => ({ default: m.IdentityRoot })),
  },
  {
    key: "pattern",
    label: "Pattern",
    loader: () =>
      import("../modules/pattern/PatternRoot").then((m) => ({ default: m.PatternRoot })),
  },
  {
    key: "memory",
    label: "Memory",
    loader: () =>
      import("../modules/memory/MemoryRoot").then((m) => ({ default: m.MemoryRoot })),
  },
];

export const getModuleEntry = (key: ModuleKey) =>
  moduleRegistry.find((m) => m.key === key)!;
