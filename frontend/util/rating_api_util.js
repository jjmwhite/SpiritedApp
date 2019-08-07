export const fetchBottleRatings = (bottleId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/bottles/${bottleId}/ratings`,
    data: { bottleId }
  })
}

export const fetchBottleRating = (bottleId, ratingId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/bottles/${bottleId}/ratings/${ratingId}`,
    data: { ratingId }
  })
}

export const fetchUserRatings = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/ratings`,
    data: { userId }
  })
}

export const createRating = (bottleId, rating) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/bottles/${bottleId}/ratings`,
    data: { rating }
  })
}

export const updateRating = (bottleId, rating) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/bottles/${bottleId}/ratings/${rating.id}`,
    data: { rating }
  })
}

export const removeRating = (bottleId, ratingId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bottles/${bottleId}/ratings/${ratingId}`,
  })
}