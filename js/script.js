$(document).ready(function($) {
	
	//Extended Functions
	
	//serializeObject
	$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
	};

	//Variables
	
	//array for containing tournament objects
	var tournaments = [];

	//Event Handlers
	
	//On 'Submit' Click
	$('#tournamentSubmit').click(function(event) {
		event.preventDefault();

		//Create tournament object
		var tournament = $('#tournamentForm').serializeObject();

		//Push tournament object to tournaments array
		tournaments.push(tournament);

		//Create table row
		var tournamentEl = '';

		tournamentEl += '<tr class="tournament">';
		tournamentEl += '<td class="tournamentDate text-right"><time datetime="' + tournament.tournamentDate + '">' + tournament.tournamentDate + '</td>';
		tournamentEl += '<td class="tournamentName text-right">' + tournament.tournamentName + '</td>';
		tournamentEl += '<td class="tournamentStream text-right">' + tournament.tournamentStream + '</td>';
		tournamentEl += '<td class="tournamentLocation text-right">' + tournament.tournamentLocation + '</td>';
		tournamentEl += '<td class="tournamentTO text-right">' + tournament.tournamentTO + '</td>';
		tournamentEl += '</tr>';
		
		$(tournamentEl).appendTo('#tournamentsTable tbody');
	});
});