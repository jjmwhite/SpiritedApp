export const fetchRegions = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/regions'
  })
}

export const fetchRegion = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/regions/${id}`,
    data: { id }
  })
}