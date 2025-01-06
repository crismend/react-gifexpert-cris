// EqRywIaAut7DkhB0ni7cus5fXAMiNjNh

export const getGif = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=cLkFSDY4uoeqCAP4uD5mHEOzxzga8KAk&q=${category}&limit=10`
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  // console.log(gifs)
  return gifs;
}