export function getCards() {
  return fetch('/api/card').then(res => res.json())
}

export function destroyCard(id) {
  return fetch(`/api/card/${id}`, { method: 'DELETE' })
}
