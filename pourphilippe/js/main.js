$(document).ready(function() {
    var table = $('#datatable').DataTable({
    	paging: false,
    	searching: true,
    	"info": false
    });
	
	$("#recherche").on( 'keyup', function() {
	console.log(this.value);
		table.search( this.value ).draw();
	});
} );