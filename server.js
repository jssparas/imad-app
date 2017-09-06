var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
	title: 'Article One',
	heading: 'this is article one',
	date: 'published on 4 sep',
	body: `<p>
		this is body for article one. This is the only article in this web-app. Ideally there should be two more articles, but....ok lets create article two. But that will be the last one.
		</p>`
}

function createHtmlTemplate(data)
{
	var htmlTemplate = `<html>
				<head>
					<title>
						${data.title}
					</title>
					<style>
						body{
							background-color:red
						}
					</style>
				</head>
				<body>
					<h1>
						${data.heading}
					</h1>
					${data.body}
				</body>
			    </html>`

	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
	res.send(createHtmlTemplate(article));
});

app.get('/article-two', function(req, res){
	res.sendFile(path.join(__dirname, "ui", "article-two.html"));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers

var port = 8081;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
