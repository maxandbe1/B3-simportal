export const IdentityEngine = {
  state: { name: "", traits: [] },

  setName(name) {
    this.state.name = name;
  },

  addTrait(trait) {
    this.state.traits.push(trait);
  }
};
