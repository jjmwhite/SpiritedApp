export const fetchUserProfile = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/bottles`,
    data: { id }
  })
}