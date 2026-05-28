import { EventBus } from "./event-bus.js";
import { loadModule } from "./module-loader.js";

export const PortalRuntime = {
  name: "🐝 Bee SIM Portal Runtime",
  modules: {},

  async registerModule(name, path) {
    this.modules[name] = await loadModule(path);
    EventBus.emit("moduleLoaded", name);
  }
};
