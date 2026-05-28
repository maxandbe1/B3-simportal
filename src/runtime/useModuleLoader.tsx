import React, { useEffect, useState } from "react";
import type { ModuleKey } from "./moduleRegistry";
import { getModuleEntry } from "./moduleRegistry";

type State =
  | { status: "idle"; Component: React.ComponentType | null }
  | { status: "loading"; Component: React.ComponentType | null }
  | { status: "ready"; Component: React.ComponentType }
  | { status: "error"; Component: React.ComponentType | null; error: unknown };

export const useModuleLoader = (key: ModuleKey) => {
  const [state, setState] = useState<State>({ status: "idle", Component: null });

  useEffect(() => {
    let cancelled = false;
    const entry = getModuleEntry(key);

    setState((prev) => ({ ...prev, status: "loading" }));

    entry
      .loader()
      .then((mod) => {
        if (cancelled) return;
        setState({ status: "ready", Component: mod.default });
      })
      .catch((err) => {
        if (cancelled) return;
        setState({ status: "error", Component: null, error: err });
      });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return state;
};
