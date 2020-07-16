export const getPosterUrl = (imageUri, width=200) =>
  imageUri
    ? `https://image.tmdb.org/t/p/w${width}${imageUri}`
    : 'https://placehold.co/200x300?text=No+image'
