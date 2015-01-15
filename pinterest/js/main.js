$(document).ready(
  function() {
    // Fill html
    $.getJSON("data/site.json", function(data) {
      //console.log(data.sites[0].site_name);
      var imgPath = 'img/';
      $.each(data.sites, function(index, site) {
        var aHtml = '<div class="pin">' +
          '<h3>' + site.site_name + '</h3>' +
          '<a href="' + site.site_url_git + '">' +
          '<img src="' + imgPath + site.img_name + '" />' +
          '<p>' + site.site_desc + '</p></a></div>';
        $(aHtml).appendTo("#columns");
      });
    });
  }
);
