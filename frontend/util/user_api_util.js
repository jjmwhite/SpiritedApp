export const fetchUserProfile = (id) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/bottles`,
    data: { id }
  })
}