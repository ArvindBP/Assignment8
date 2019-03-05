function compute(data)
{
	c = {};
	c.title = data.title;
	c.overview  = data.overview;
	c.vote_average = data.vote_average;
	c.poster_path  = "https://image.tmdb.org/t/p/w300" + data.poster_path;
}