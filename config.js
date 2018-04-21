/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'PAPKI',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://calendar.google.com/calendar/ical/something1group.calendar.google.com/private-1475fd2f82c869bcb8b5f29fe6d3e709/basic.ics'
					},
					{
						symbol: 'terminal',
						url: 'https://calendar.google.com/calendar/ical/something2group.calendar.google.com/public/basic.ics'
					},
				]
			}
		},
		{
        		module: 'iFrame',
        		position: 'bottom_bar', // This can be any of the regions.
        		config: {
            			// See 'Configuration options' for more information.
                		url: "http://st.atb.no/New/minskjerm/FST.aspx?visMode=2&cTit=&c1=1&s1=16010404&sv1=&cn1=Solsiden%20-%20mot%20DV&c2=1&s2=16011404&sv2=&cn2=Solsiden%20-%20mot%20Gl%F8s&c3=1&s3=16011403&sv3=&cn3=Gyldel%F8ves%20-%20mot%20Gl%F8s&template=2&cmhb=000000&cmhc=000000&cshb=000000&cshc=FFFFFF&arb=000000&rows=&period=&",
				height: "530px",
           			}
		},
		{
			module: 'MMM-YrNow',
			position: 'top_right',
			config: {
				locationId: 'secret',
				showWeatherForecast: true
				}
		},
		{
			module: 'MMM-Sonos',
			header: "Playing on SONOS",
			position: "top_left", // This can be any of the regions, best results in center regions
			classes: "default everyone",
			config: {			// See 'Configuration options' for more information.
			}
		},
		{
		module: 'MMM-homeassistant-sensors',
		position: 'top_right',
		config: {
			url: 'https://homeassistanturl.org/api/states?api_password=secret',
			prettyName: false,
			stripName: false,
			values: [{
					sensor: "sensor.temperature_158d0001f53fa9",
					icons: [{
							"default": "hotel"
						}
					]
				}, {
					sensor: "sensor.temperature_158d0002227de2",
					icons: [{
							"default": "washing-machine"
						}
					]
				}, {
					sensor: "sensor.netatmo_opphaldsrom_temperature",
					icons: [{
							"default": "sofa"
							}
						]
				}, {
					sensor: "sensor.netatmo_opphaldsrom_co2",
					icons: [{
							"default": "cloud"
							}
					]
				}, {
					sensor: "sensor.electricity_price_kirkegata_46",
					icons: [{
							"default": "flash"
							}
					]
				}
				]
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
