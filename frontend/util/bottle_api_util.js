export const fetchBottles = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/bottles'
  })
}

export const fetchBottle = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/bottles/${id}`,
    data: { id }
  })
}

export const createBottle = (formData) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/bottles',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updateBottle = (bottle) => {
  return({
    method: 'PATCH',
    url: `/api/bottles/${bottle.id}/edit`,
    data: { bottle }
  })
}

export const removeBottle = (id) => {
  return({
    method: 'DELETE',
    url: `/api/bottles/${id}`
  })
}