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
  return $.ajax({
    method: 'POST',
    url: '/api/bottles',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updateBottle = (formData, id) => {
  debugger
  return({
    method: 'PATCH',
    url: `/api/bottles/${id}`,
    data: formData,
    contentType: false,
    processData: false
  })
}

export const removeBottle = (id) => {
  debugger
  return({
    method: 'DELETE',
    url: `/api/bottles/${id}`
  })
}