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

		//Create tournament row
		var tournamentEl = '<tr class="tournament">';

		//Tournament Date Cell
		tournamentEl += '<td class="tournamentDate text-right">';
		tournamentEl += '<div class="showDate">';
		tournamentEl += '<label class="dateLabel">';
		tournamentEl += '<time datetime="' + tournament.tournamentDate + '">';
		tournamentEl += tournament.tournamentDate;
		tournamentEl += '</time>';
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editDate">';
		tournamentEl += '<input class="dateField form-control" type="date" '
		tournamentEl += 'value="' + tournament.tournamentDate + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';
		
		//Tournament Name Cell
		tournamentEl += '<td class="tournamentName text-right">';
		tournamentEl += '<div class="showName">';
		tournamentEl += '<label class="nameLabel">';
		tournamentEl += tournament.tournamentName;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editName">';
		tournamentEl += '<input class="nameField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentName + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Stream Cell
		tournamentEl += '<td class="tournamentStream text-right">';
		tournamentEl += '<div class="showStream">';
		tournamentEl += '<label class="streamLabel">';
		tournamentEl += tournament.tournamentStream;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editStream">';
		tournamentEl += '<input class="streamField form-control" type="text "'
		tournamentEl += 'value="' + tournament.tournamentStream + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Location Cell
		tournamentEl += '<td class="tournamentLocation text-right">';
		tournamentEl += '<div class="showLocation">';
		tournamentEl += '<label class="locationLabel">';
		tournamentEl += tournament.tournamentLocation;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editLocation">';
		tournamentEl += '<input class="locationField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentLocation + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament TO Cell
		tournamentEl += '<td class="tournamentTO text-right">';
		tournamentEl += '<div class="showTo">';
		tournamentEl += '<label class="toLabel">';
		tournamentEl += tournament.tournamentTO;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTo">';
		tournamentEl += '<input class="toField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentTO + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Close Tournament Row String
		tournamentEl += '</tr>';
		
		//Append Elements
		$(tournamentEl).appendTo('#tournamentsTable tbody');
	});
});