export function getCurrentDate() {
  return new Date().getFullYear();
}

export function splitForUrl(name: string) {
  return name.toLowerCase().split(" ").join("-");
}
