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
        if (jQuery.inArray(bookmark.category, arrBookmarkCategory) ==
          -1) {
          arrBookmarkCategory.push(bookmark.category);
        }
        arrBookmarks.push(bookmark);
      });
    }
  });

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
      if ($('#keyword').val() == bookmark.category) {
        $('.searchResult').append('<li><a href="' + bookmark.url +
          '">' + bookmark.name + '</a></li>');
      }
    });
  });

});
