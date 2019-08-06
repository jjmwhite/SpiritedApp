export const fetchBottleRatings = (bottleId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/bottles/${bottleId}/ratings`,
    data: { bottleId }
  })
}

export const fetchUserRatings = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/ratings`,
    data: { userId }
  })
}

export const createRating = (rating) => {
  return $.ajax({
    method: 'POST',
    url: `/api/bottles/${rating.bottleId}/ratings`,
    data: { rating }
  })
}

export const updateRating = (rating) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/bottles/${rating.bottleId}/ratings/${rating.id}`,
    data: { rating }
  })
}

export const removeRating = (ratingId, bottleId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bottles/${bottleId}/ratings/${ratingId}`,
  })
}