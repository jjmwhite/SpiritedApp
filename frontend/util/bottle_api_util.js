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

export const updateBottle = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/bottles/${id}`,
    data: formData,
    contentType: false,
    processData: false
  })
}

export const removeBottle = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bottles/${id}`
  })
}