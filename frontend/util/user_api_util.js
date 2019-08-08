export const fetchUserProfile = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    data: { id }
  })
}