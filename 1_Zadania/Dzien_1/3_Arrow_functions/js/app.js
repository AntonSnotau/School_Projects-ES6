const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {
  this.websites.map(website => {
    const newWebsite = 'https://' + website + '.com';
    this.links.push(newWebsite);
  });
}

App.prototype.addLinksToSite = function() {
  const menu = $('.menu');
  //this.links - [ https://onet.com....];
  this.links.map(function(item) {
    const link = $('<a> </a>');
    link.attr('href', item); // dodajemy atrybut href
    link.text(item); // dodajemy tekst do srodka elementu <for fun>

    menu.append(link);
  });
}

let app = new App();
app.generateLinks();
app.addLinksToSite();


//kiedy mnie nie było
///
const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {
  this.websites.map(website => {
    const newWebsite = 'https://' + website + '.com';
    this.links.push(newWebsite);
  });
}

App.prototype.addLinksToSite = function() {
  const menu = $('.menu');
  //this.links - [ https://onet.com....];
  this.links.map(function(item) {
    const link = $('<a> </a>');
    link.attr('href', item); // dodajemy atrybut href
    link.text(item); // dodajemy tekst do srodka elementu <for fun>

    menu.append(link);
  });
}

let app = new App();
app.generateLinks();
app.addLinksToSite();
