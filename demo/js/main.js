
$(document).ready(function() {
	// Autocomplete
	var availableTags = [ "ActionScript", "AppleScript", "Asp", "BASIC", "C",
			"C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran",
			"Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP",
			"Python", "Ruby", "Scala", "Scheme" ];
	$("#searchBoxAliasVoie").autocomplete( {
		source : availableTags
	});

	// Datatable
    $('#rh').dataTable( {
        "ajax": "data/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ],
        "sDom": 'T<"clear">lfrtip',
        "oTableTools": {
            "aButtons": [
                "copy",
                "print",
                {
                    "sExtends":    "collection",
                    "sButtonText": "Save",
                    "aButtons":    [ "csv", "xls", "pdf" ]
                }
            ]
        }
    } );
    
    // Dragend
    $("#gallery").dragend({
        borderBetweenPages: 5,
        afterInitialize: function() {
          $("#phone").css("visibility", "visible");
        },
        onDrag: function( activeElement, event, overscroll ) {
          var deltaX = parseInt( event.distanceX / 2 );

          if ( overscroll ) {
            deltaX = deltaX / 5;
          }

          $(activeElement).prev().find("img").css("margin-left", deltaX + 160 );
          $(activeElement).find("img").css("margin-left", deltaX);
          $(activeElement).next().find("img").css("margin-left", deltaX - 160 );
        },
        onDragEnd: function( activeElement ) {
          $(activeElement).prev().find("img").animate({
            "margin-left": 160
          }, 300);
          $(activeElement).find("img").animate({
            "margin-left": 0
          }, 300);
          $(activeElement).next().find("img").animate({
            "margin-left": - 160
          }, 300);
        }
      });

      $(document).on("dragstart", function(event) {
        if (event.target.nodeName.toUpperCase() == "IMG") {
          return false;
        }
      });
      
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-219062-10']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

} );