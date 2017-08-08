var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'article-one|tour',
        heading:'article one',
        date:'august 8 2017',
         content:`    <p>
               Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.[1] The best known example application is for remote login to computer systems by users. 
                </p>
               <p>
                Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.[1] The best known example application is for remote login to computer systems by users.
               </p>`},
    'article-two':{
     title:'article-one|tour',
      heading:'article two',
      date:'august 8 2017',
      content:`    <p>
               Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.[1] The best known example application is for remote login to computer systems by users. 
                </p>
               <p>
                Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.[1] The best known example application is for remote login to computer systems by users.
               </p>`},
    'article-three':{title:'article-one|tour',
    heading:'article three',
    date:'august 8 2017',
    content:`    <p>
               Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.[1] The best known example application is for remote login to computer systems by users. 
                </p>
               <p>
                Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.[1] The best known example application is for remote login to computer systems by users.
               </p>`},
};

function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;


var htmlTemplate=`

<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>article one</h3>
        
        <div>
            ${date}
        </div>
        <div>
          ${content}  
        </div>
    </div>
    </body>
</html>
`;
  return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/;articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
