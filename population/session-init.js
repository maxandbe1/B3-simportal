import { PortalRuntime } from "../runtime/portal-runtime.js";
import modules from "../modules/module-index.json";

export async function initSession() {
  for (const [name, path] of Object.entries(modules)) {
    await PortalRuntime.registerModule(name, path);
  }
}
