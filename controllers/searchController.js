const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (request, response) => {

        const query = request.query

        const queryURL = `https://apnews.com/search?q=${query.topic}&s=${query.sortValue}`;
        
        axios.get(queryURL).then(res => {
            var $ = cheerio.load(res.data);
            var articleArray = [];
            
            $(".PagePromo").each((i, element) => {
                var article = {};

                article.title = $(element).find("PagePromo-title").find(".PagePromoContentIcons-text").text();
                article.url = $(element).find(".Link").attr("href");
                article.time = $(element).find("Timestamp-template").text();
                article.image = $(element).find("img").attr("src");
                article.description = $(element).find("PagePromo-description").find(".PagePromoContentIcons-text").text();

                if (articleArray.length < 20) {
                    articleArray.push(article);
                }
            });
            
            response.json(articleArray);

        }).catch(error => console.log(error));
    }
