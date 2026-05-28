import { PatternEngine } from "../../engines/pattern-engine.js";

export default {
  addPattern: PatternEngine.addPattern.bind(PatternEngine),
  patterns: PatternEngine.patterns
};
