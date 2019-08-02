export const fetchDistilleries = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/distilleries'
  })
}

export const fetchDistillery = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/distilleries/${id}`,
    data: { id }
  })
}