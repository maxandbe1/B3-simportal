export const MemoryEngine = {
  entries: [],

  addEntry(text) {
    this.entries.push({
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now()
    });
  },

  removeEntry(id) {
    this.entries = this.entries.filter(e => e.id !== id);
  }
};
