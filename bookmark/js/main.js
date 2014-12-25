// Typeahead js
$(document).ready(function() {

  var arrBookmarkCategory = [];
  var arrBookmarks = [];

  // Get bookmark data
  $.ajax({
    url: "data/bookmark.json",
    async: false,
    dataType: 'json',
    success: function(data) {
      $.each(data.bookmarks, function(key, bookmark) {
        var strCategory = bookmark.category;
        var categories = strCategory.split(',');

        $.each(categories, function(key, category) {
          if (jQuery.inArray(category, arrBookmarkCategory) ==
            -1) {
            arrBookmarkCategory.push(category);
          }
        });
        arrBookmarks.push(bookmark);
      });
    }
  });

  // Add categories to IHM
  var strBookmarkCategory = arrBookmarkCategory.sort().join(", ");
  $("#tag").append(strBookmarkCategory);

  // LOG
  console.log(arrBookmarkCategory);
  // Autocomplete
  $('input.typeahead').typeahead({
    name: 'bookmark',
    local: arrBookmarkCategory,
    limit: 10
  });

  // Display results
  $('#search').click(function() {
    $('ul.searchResult').empty();
    $.each(arrBookmarks, function(key, bookmark) {
      if (bookmark.category.indexOf($('#keyword').val()) > -1) {
        $('.searchResult').append('<li><a href="' + bookmark.url +
          '">' + bookmark.name + '</a></li>');
      }
    });
  });

});
