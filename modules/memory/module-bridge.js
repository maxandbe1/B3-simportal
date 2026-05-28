import { MemoryEngine } from "../../engines/memory-engine.js";

export default {
  addEntry: MemoryEngine.addEntry.bind(MemoryEngine),
  removeEntry: MemoryEngine.removeEntry.bind(MemoryEngine),
  entries: MemoryEngine.entries
};
