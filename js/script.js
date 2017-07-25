document.addEventListener("DOMContentLoaded",
	function (event) {
		function calculateTax(event) {
			console.log(event);
			// this.textContent = "Results Calculated";
			var a = document.getElementById("Electricity").value;
			var b = document.getElementById("Petrol").value;
			var c = document.getElementById("Diesel").value;
			var totalCarbon = (a*0.32+b*2.6391+c*2.3035).toFixed(2);
			var message = "You have emitted " + totalCarbon + " Kg's of carbon";
			if (totalCarbon >= 18.00) {
				(function () {
					window.alert("You are over emitting!!\nControl your emission levels");
				})();
			}
			document.querySelector("#results").textContent=message;
		}

		document.querySelector("#submit").addEventListener("click", calculateTax);
	}
	);


	// 93.3 kg of CO2 per 293.3 units of electricity
	// 1 Unit Electricity = 0.32 kg of CO2
	// 1L Diesel = 2.6391 kg of CO2
	// 1L Petrol = 2.3035 kg of CO2