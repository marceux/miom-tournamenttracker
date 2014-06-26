$(document).ready(function($) {
	
	//** Extended Functions
	
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

	//** Variables
	
	//Array - contains tournament objects
	var tournaments = [];

	//** Event Handlers
	
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
		tournamentEl += 'data-date="' + tournament.date + '" ';
		tournamentEl += 'data-name="' + tournament.name + '" ';
		tournamentEl += 'data-stream="' + tournament.stream + '" ';
		tournamentEl += 'data-locale="' + tournament.locale + '" ';
		tournamentEl += 'data-to="' + tournament.to + '" ';

		//End Opening Element
		tournamentEl += '>';

		//Tournament Date Cell
		tournamentEl += '<td class="tournamentDate text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += '<time datetime="' + tournament.date + '">';
		tournamentEl += tournament.date;
		tournamentEl += '</time>';
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="date" '
		tournamentEl += 'value="' + tournament.date + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';
		
		//Tournament Name Cell
		tournamentEl += '<td class="tournamentName text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.name;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.name + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Stream Cell
		tournamentEl += '<td class="tournamentStream text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.stream;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text "'
		tournamentEl += 'value="' + tournament.stream + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Location Cell
		tournamentEl += '<td class="tournamentLocation text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.locale;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.locale + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament TO Cell
		tournamentEl += '<td class="tournamentTo text-right">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<label class="tournamentLabel">';
		tournamentEl += tournament.to;
		tournamentEl += '</label>';
		tournamentEl += '</div>';
		tournamentEl += '<div class="editTournament" style="display: none">';
		tournamentEl += '<input class="tournamentField form-control" type="text" '
		tournamentEl += 'value="' + tournament.to + '"';
		tournamentEl += '/>';
		tournamentEl += '</div>';
		tournamentEl += '</td>';

		//Tournament Edit Cell
		tournamentEl += '<td class="tournamentCrud">';
		tournamentEl += '<div class="showTournament">';
		tournamentEl += '<span class="tournamentEdit"><i class="fa fa-pencil"></i></span>';
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
			$tournament.find('.tournamentDate label').text(tournament.date);
			$tournament.find('.tournamentName label').text(tournament.name);
			$tournament.find('.tournamentStream label').text(tournament.stream);
			$tournament.find('.tournamentLocation label').text(tournament.locale);
			$tournament.find('.tournamentTo label').text(tournament.to);
		}

		/**
		 * Sets input boxes values
		 */
		function setInputs(tournament) {
			$tournament.find('.tournamentDate input').val(tournament.date);
			$tournament.find('.tournamentName input').val(tournament.name);
			$tournament.find('.tournamentStream input').val(tournament.stream);
			$tournament.find('.tournamentLocation input').val(tournament.locale);
			$tournament.find('.tournamentTo input').val(tournament.to);
		}

		/**
		 * Gets input boxes values
		 */
		function getValues(tournament, el) {
			tournament.date = $tournament.find('.tournamentDate ' + el).val();
			tournament.name = $tournament.find('.tournamentName ' + el).val();
			tournament.stream = $tournament.find('.tournamentStream ' + el).val();
			tournament.locale = $tournament.find('.tournamentLocation ' + el).val();
			tournament.to = $tournament.find('.tournamentTo ' + el).val();
		}

		//** Event Handlers
		
		//On .tournamentLabel click
		$tournament.on('click', '.tournamentEdit', function(event) {
			event.preventDefault();
			startEdit();
		});

		//On .tournamentAccept click
		$tournament.on('click', '.tournamentAccept', function(event) {
			event.preventDefault();

			//Create empty tournament object to send to server
			var newValues = {};

			//Get values from input fields
			getValues(newValues, 'input');

			//Iterate over all values in the tournamentList
			for (var i = tournaments.length - 1; i >= 0; i--) {
				//If name data is the same as the tournamentList name
				if ($tournament.data('name') == tournaments[i].name) {
					//Update tournament object at index i
					tournaments[i].date = newValues.date;
					tournaments[i].name = newValues.name;
					tournaments[i].stream = newValues.stream;
					tournaments[i].locale = newValues.locale;
					tournaments[i].to = newValues.to;

					//Break iterator
					break;
				}
			};

			//Change data attributes for row
			$tournament.attr('data-date', newValues.date);
			$tournament.attr('data-name', newValues.name);
			$tournament.attr('data-stream', newValues.stream);
			$tournament.attr('data-location', newValues.locale);
			$tournament.attr('data-to', newValues.to);

			//Change labels
			setLabels(newValues);
			
			//End tournament Editing
			endEdit();

			//Make Ajax Call to Server to Update tournament Data
			//updtournament(newtournament);
		});

		//On .tournamentCancel click
		$tournament.on('click', '.tournamentCancel', function(event) {
			event.preventDefault();

			var defaultValues = {};

			//Set values for updated fields
			getValues(defaultValues, 'label');

			//End tournament Editing
			endEdit();

			//Set Inputs Back to Original Values
			setInputs(defaultValues);
		});

		//On .tournamentDel click
		$tournament.on('click', '.tournamentDelete', function(event) {
			event.preventDefault();

			//Create dialogue confirmation for removing tournament
			if (confirm("Do you want to remove " + $tournament.data('name') + " from the event?")) { 
				//Remove Row from Table
				$tournament.remove();

				//Iterate over all values in the tournamentList
				for (var i = tournamentList.length - 1; i >= 0; i--) {
					//If name data is the same as the tournamentList name
					if ($tournament.data('name') == tournaments[i].name) {
						//Remove from the tournamentList
						tournaments.splice(i, 1);
						//Break iterator
						break;
					}
				};
			}
		});
	});
});