const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (request, response) => {

    const query = request.query
    // console.log(query);

    const queryURL = `https://apnews.com/search?q=${query.topic}&s=${query.sortValue}`;

    axios.get(queryURL).then(res => {
        var $ = cheerio.load(res.data);
        var articleArray = [];
        console.log(res.data);
        $(".PagePromo").each((i, element) => {
            var article = {};

            article.title = $(element).attr("data-gtm-region");
            article.url = $(element).find(".Link").attr("href");

            unix_time = $(element).attr("data-posted-date-timestamp"); // unix timestamp in milliseconds
            date = new Date(parseInt(unix_time));
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            article.date = date.toLocaleDateString('en-US', options); 

            article.image = $(element).find("img").attr("src");
            article.description = $(element).find(".PagePromo-description").find(".PagePromoContentIcons-text").text();

            if (articleArray.length < 20) {
                articleArray.push(article);
            }
        });

        response.json(articleArray);

    }).catch(error => console.log(error));
};
