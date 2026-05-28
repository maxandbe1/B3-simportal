export async function loadModule(path) {
  const module = await import(path);
  return module.default || module;
}
