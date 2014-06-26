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

	//Test Data
	tournaments.push({
		tournamentDate: "2014-06-03",
		tournamentLocation: "Test",
		tournamentName: "Test",
		tournamentStream: "Test",
		tournamentTO: "Test"
	});

	function testData(testArray) {
		var tournament = testArray[0];

		//Create tournament row
		var tournamentEl = '<tr class="tournament" ';

		//Add Data Attributes
		//tournamentEl += 'data-id="' + tournament.tournament + '" ';
		tournamentEl += 'data-date="' + tournament.tournamentDate + '" ';
		tournamentEl += 'data-name="' + tournament.tournamentName + '" ';
		tournamentEl += 'data-stream="' + tournament.tournamentStream + '" ';
		tournamentEl += 'data-location="' + tournament.tournamentLocation + '" ';
		tournamentEl += 'data-to="' + tournament.tournamentTO + '" ';

		//End Opening Element
		tournamentEl += '>';

		//Tournament Date Cell
		tournamentEl += '<td class="tournamentDate text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += '<time datetime="' + tournament.tournamentDate + '">';
		tournamentEl += tournament.tournamentDate;
		tournamentEl += '</time>';
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="date" '
		tournamentEl += 'value="' + tournament.tournamentDate + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';
		
		//Tournament Name Cell
		tournamentEl += '<td class="tournamentName text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentName;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentName + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Stream Cell
		tournamentEl += '<td class="tournamentStream text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentStream;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text "'
		tournamentEl += 'value="' + tournament.tournamentStream + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Location Cell
		tournamentEl += '<td class="tournamentLocation text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentLocation;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentLocation + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament TO Cell
		tournamentEl += '<td class="tournamentTO text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentTO;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentTO + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Edit Cell
		tournamentEl += '<td class="tournamentEdit">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<span class="tournamentDelete"><i class="fa fa-times-circle"></i></span>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<span class="tournamentAccept"><i class="fa fa-check"></i></span>';
		tournamentEl += '<span class="tournamentCancel"><i class="fa fa-times"></i></span>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Close Tournament Row String
		tournamentEl += '</tr>';
		
		//Create jQuery Tournament Object
		var $tournament = $(tournamentEl);

		//Append to Table
		$tournament.appendTo('#tournamentsTable tbody');
	}

	testData(tournaments);
	//End of Test Data

	//Event Handlers
	
	//On 'Submit' Click
	$('#tournamentSubmit').click(function(event) {
		event.preventDefault();

		//Create tournament object
		var tournament = $('#tournamentForm').serializeObject();

		//Push tournament object to tournaments array
		tournaments.push(tournament);

		//Create tournament row
		var tournamentEl = '<tr class="tournament" ';

		//Add Data Attributes
		//tournamentEl += 'data-id="' + tournament.tournament + '" ';
		tournamentEl += 'data-date="' + tournament.tournamentDate + '" ';
		tournamentEl += 'data-name="' + tournament.tournamentName + '" ';
		tournamentEl += 'data-stream="' + tournament.tournamentStream + '" ';
		tournamentEl += 'data-location="' + tournament.tournamentLocation + '" ';
		tournamentEl += 'data-to="' + tournament.tournamentTO + '" ';

		//End Opening Element
		tournamentEl += '>';

		//Tournament Date Cell
		tournamentEl += '<td class="tournamentDate text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += '<time datetime="' + tournament.tournamentDate + '">';
		tournamentEl += tournament.tournamentDate;
		tournamentEl += '</time>';
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="date" '
		tournamentEl += 'value="' + tournament.tournamentDate + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';
		
		//Tournament Name Cell
		tournamentEl += '<td class="tournamentName text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentName;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentName + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Stream Cell
		tournamentEl += '<td class="tournamentStream text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentStream;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text "'
		tournamentEl += 'value="' + tournament.tournamentStream + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Location Cell
		tournamentEl += '<td class="tournamentLocation text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentLocation;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentLocation + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament TO Cell
		tournamentEl += '<td class="tournamentTO text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.tournamentTO;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.tournamentTO + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Edit Cell
		tournamentEl += '<td class="tournamentEdit">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<span class="tournamentDelete"><i class="fa fa-times-circle"></i></span>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<span class="tournamentAccept"><i class="fa fa-check"></i></span>';
		tournamentEl += '<span class="tournamentCancel"><i class="fa fa-times"></i></span>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Close Tournament Row String
		tournamentEl += '</tr>';
		
		//Create jQuery Tournament Object
		var $tournament = $(tournamentEl);

		//Append to Table
		$tournament.appendTo('#tournamentsTable tbody');

		/**
		 * Hides labels, shows inputs
		 */
		function startEdit() {
			$tournament.find('.showTournament').hide();
			$tournament.find('.editTournament').show();
		}

		/**
		 * Hides inputs, shows labels
		 */
		function endEdit() {
			$tournament.find('.editTournament').hide();
			$tournament.find('.showTournament').show();
		}

		/**
		 * Sets labels text
		 */
		function setLabels(tournament) {
			$tournament.find('.tournamentDate label').text(tournament.tournamentDate);
			$tournament.find('.tournamentName label').text(tournament.tournamentName);
			$tournament.find('.tournamentStream label').text(tournament.tournamentStream);
			$tournament.find('.tournamentLocation label').text(tournament.tournamentLocation);
			$tournament.find('.tournamentTO label').text(tournament.tournamentTO);
		}

		/**
		 * Sets input boxes values
		 */
		function setInputs(tournament) {
			$tournament.find('.tournamentDate input').val(tournament.tournamentDate);
			$tournament.find('.tournamentName input').val(tournament.tournamentName);
			$tournament.find('.tournamentStream input').val(tournament.tournamentStream);
			$tournament.find('.tournamentLocation input').val(tournament.tournamentLocation);
			$tournament.find('.tournamentTO input').val(tournament.tournamentTO);
		}

		//Event Handlers
		
		//Listens for .showTournament click
		$tournament.on('click', '.tournamentLabel', function(event) {
			event.preventDefault();
			startEdit();
		});

		//Event Listener for .tournamentAccept click
		$tournament.on('click', '.tournamentEdit .tournamentAccept', function(event) {
			event.preventDefault();

			//Create empty tournament object to send to server
			var updatedTournament = {};

			//Set values for updated fields
			updatedTournament.tournamentDate = $tournament.find('.tournamentDate .tournamentField').val();
			updatedTournament.tournamentName = $tournament.find('.tournamentName .tournamentField').val();
			updatedTournament.tournamentStream = $tournament.find('.tournamentStream .tournamentField').val();
			updatedTournament.tournamentLocation = $tournament.find('.tournamentLocation .tournamentField').val();
			updatedTournament.tournamentTO = $tournament.find('.tournamentTO .tournamentField').val();

			//Iterate over all values in the tournamentList
			for (var i = tournaments.length - 1; i >= 0; i--) {
				//If name data is the same as the tournamentList name
				if ($tournament.data('name') == tournaments[i].name) {
					//Update tournament object at index i
					tournaments[i].tournamentDate = updatedTournament.tournamentDate;
					tournaments[i].tournamentName = updatedTournament.tournamentName;
					tournaments[i].tournamentStream = updatedTournament.tournamentStream;
					tournaments[i].tournamentLocation = updatedTournament.tournamentLocation;
					tournaments[i].tournamentTO = updatedTournament.tournamentTO;

					//Break iterator
					break;
				}
			};

			//Change data attributes for row
			$tournament.attr('data-date', updatedTournament.tournamentDate);
			$tournament.attr('data-name', updatedTournament.tournamentName);
			$tournament.attr('data-stream', updatedTournament.tournamentStream);
			$tournament.attr('data-location', updatedTournament.tournamentLocation);
			$tournament.attr('data-to', updatedTournament.tournamentTO);

			//Change labels
			setLabels(updatedTournament);
			
			//End tournament Editing
			endEdit();

			//Make Ajax Call to Server to Update tournament Data
			//updtournament(newtournament);
		});

		//Event Listener for .tournamentCancel click
		$tournament.on('click', '.tournamentEdit .tournamentCancel', function(event) {
			event.preventDefault();

			var defaultTournament = {};

			//Set values for updated fields
			defaultTournament.tournamentDate = $tournament.find('.tournamentDate .tournamentField').val();
			defaultTournament.tournamentName = $tournament.find('.tournamentName .tournamentField').val();
			defaultTournament.tournamentStream = $tournament.find('.tournamentStream .tournamentField').val();
			defaultTournament.tournamentLocation = $tournament.find('.tournamentLocation .tournamentField').val();
			defaultTournament.tournamentTO = $tournament.find('.tournamentTO .tournamentField').val();

			//End tournament Editing
			endEdit();

			//Set Inputs Back to Original Values
			setInputs(defaultTournament);
		});

		//Event Listener for .tournamentDel click
		$tournament.on('click', '.tournamentEdit .tournamentDelete', function(event) {
			event.preventDefault();

			//Create dialogue confirmation for removing tournament
			if (confirm("Do you want to remove " + $tournament.data('name') + " from the event?")) { 
				//Remove Row from Table
				$tournament.remove();

				//Iterate over all values in the tournamentList
				for (var i = tournamentList.length - 1; i >= 0; i--) {
					//If name data is the same as the tournamentList name
					if ($tournament.data('name') == tournaments[i].tournamentName) {
						//Remove from the tournamentList
						tournaments.splice(i, 1);
						//Break iterator
						break;
					}
				};

  			//Make Ajax call to delete tournament from the Database
				//deltournament('tournamentID');
			}
		});
	});
});