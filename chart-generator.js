<canvas height="720" id="radar-chart" width="1200"></canvas>
<p><br />
Thank you for taking our Cloud Adoption Survey. This image shows how advanced your organization is on 6 different cloud capabilities, ranked each as Foundational, Intermediate and Advanced. Our Data Solutions group will reach out to the email address you provided and schedule time to review our analysis with your team.</p>
<style type="text/css">canvas {
   background-color: rgba(0, 0, 0, .9);
}
</style>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script> <script>


/*Place your JavaScript here to run when the page is fully displayed*/
		var canvas = document.getElementById("radar-chart");

var myLine = new Chart(document.getElementById("radar-chart"), {
	
    type: 'radar',
    data: {
		labels: ["Agility", "Architecture", "Collaboration","Reliability","Velocity",
"Quality"],
      datasets: [
     {
          label:  "${q://QID6/ChoiceTextEntryValue}", 
          fill: true,
          backgroundColor: "rgba(0,0,255,0.2)",
          borderColor: "rgba(0,0,255,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0,0,255,1)",
          pointBorderColor: "#fff",
          data: ["${gr://SC_0PQJE2Dd50pzHgx/Score}","${gr://SC_06z6DPI45FVLgCV/Score}","${gr://SC_24O5TURYlOgWN81/Score}","${gr://SC_7QWTyeKZGs6k4Yd/Score}","${gr://SC_7NyuXOMx6kuEZV3/Score}","${gr://SC_eqy0a2PIIlfhV0V/Score}"]
        }
      ]
    },
    options: {
	     tooltips: {
                enabled: true,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    }
                }
            },

		legend: {
            labels: {
				fontColor: "white",
                fontSize: 23
            }
        },
		scale: {
			gridLines: { color: "grey" },
			angleLines: { color: 'grey' },
            

ticks: {
    min: 0,
    max: 3,
    stepSize: 1,
    callback: function(label, index, labels) {
        switch (label) {
            case 0:
                return '';
            case 1:
                return 'FOUNDATION';
            case 2:
                return 'INTERMEDIATE';
            case 3:
                return 'ADVANCED';
		}
    }
},
			    pointLabels: {
					fontColor: ["rgba(229, 144, 0, 1)","rgba(229, 144, 0, 1)","rgba(229, 144, 0, 1)","rgba(68,84,106,1)","rgba(68,84,106,1)","rgba(68,84,106,1)", 
								"rgba(127,127,127,1)","rgba(127,127,127,1)","rgba(191,191,191,1)","rgba(191,191,191,1)","rgba(191,191,191,1)",
								"rgba(173,185,202,1)","rgba(173,185,202,1)"],
      fontSize: 20
    },
	yAxes: [{
                ticks: {
					labelString: "1"
                }
            }]
        },
		circular: {
			display: true
		},
      title: {
		  color:(255,255,255,1),
        display: true,  
        text: 'Your Results',
		  fontSize:24,
		  fontColor: "white"
      }
    }
});
</script>
