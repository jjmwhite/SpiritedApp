export const executeSearch = (search) => {
  return $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { search }
  })
}