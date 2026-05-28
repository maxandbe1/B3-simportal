import React from "react";
import { useModuleLoader } from "../runtime/useModuleLoader";
import type { ModuleKey } from "../runtime/moduleRegistry";
import { Card } from "../components/primitives/Card";

type Props = {
  current: ModuleKey;
};

export const ViewportDynamic: React.FC<Props> = ({ current }) => {
  const state = useModuleLoader(current);

  if (state.status === "loading" || state.status === "idle") {
    return (
      <main className="portal-viewport">
        <Card variant="default">
          <span>Loading {current}…</span>
        </Card>
      </main>
    );
  }

  if (state.status === "error") {
    return (
      <main className="portal-viewport">
        <Card variant="default">
          <span>Failed to load module: {String((state as any).error)}</span>
        </Card>
      </main>
    );
  }

  const Component = state.Component;

  return (
    <main className="portal-viewport">
      <Component />
    </main>
  );
};
