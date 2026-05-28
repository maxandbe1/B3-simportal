import { IdentityEngine } from "../../engines/identity-engine.js";

export default {
  setName: IdentityEngine.setName.bind(IdentityEngine),
  addTrait: IdentityEngine.addTrait.bind(IdentityEngine),
  state: IdentityEngine.state
};
