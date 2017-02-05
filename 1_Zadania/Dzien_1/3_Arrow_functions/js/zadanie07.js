const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {
    this.websites.forEach( (websiteName) => {
        let url = 'https://' + websiteName + ".com";
        this.links.push(url);
    } );
}


let app = new App();
app.generateLinks();
console.log(app.links)
