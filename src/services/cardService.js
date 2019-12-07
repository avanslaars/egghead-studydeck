export function getCards() {
  return fetch('/api/card').then(res => res.json())
}
