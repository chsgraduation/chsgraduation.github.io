/*
 * Executed first. Initializes Skel, jCountdown, and the footer onClick listener.
 */
$(document).ready(function() {
	initSkel();
	initCountdown();
	initFooterListener();
});

/*
 * Initializes Skel. Sets up configuration values and each breakpoint.
 */
function initSkel() {
	skel.init({
		reset: 'normalize',
		containers: '95%',
		grid: { gutters: '1em' },
		breakpoints: {
			global: {
				href: 'css/styles.css'
			},
			large: {
				media: '(min-width: 941px)',
				href: 'css/styles-large.css'
			},
			medium: {
				media: '(min-width: 561px) and (max-width: 940px)',
				href: 'css/styles-medium.css'
			},
			small: {
				media: '(max-width: 560px)',
				href: 'css/styles-small.css'
			},
			xsmall: {
				media: '(max-width: 380px)',
				href: 'css/styles-xsmall.css'
			}
		}
	});
}

/*
 * Initializes the countdown timer.
 * Gives it the date to countdown to, removes the default time text (as we use a custom template),
 * enables leading zeros, and provides the template to create the timer.
 * By default, jCountdown uses the client's time to work out the countdown.
 */
function initCountdown() {
	$("#countdown").countdown({
		date: new Date(2015, 6-1, 11, 18, 45, 0, 0),
		dayText: '',
		daySingularText: '',
		hourText: '',
		hourSingularText: '',
		minText: '',
		minSingularText: '',
		secText: '',
		secSingularText: '',
		leadingZero: true,
		template:
		'<div class="countdown-container">' +
			'<div class="row">' +
				'<div class="6u 12u(small)">' +
					'<div class="unit">' +
						'<div class="box">%d</div>' +
						'<div class="scale">Days</div>' +
					'</div>' +
					'<div class="unit">' +
						'<div class="box">%h</div>' +
						'<div class="scale">Hours</div>' +
					'</div>' +
				'</div>' +
				'<div class="6u 12u(small)">' +
					'<div class="unit">' +
						'<div class="box">%i</div>' +
						'<div class="scale">Minutes</div>' +
					'</div>' +
					'<div class="unit">' +
						'<div class="box">%s</div>' +
						'<div class="scale">Seconds</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>'
	});
}

/*
 * Toggles between showing 'Made by Adam Peled' and my email address when the footer is clicked.
 */
function initFooterListener() {
	$("#email-toggle").click(function() {
		// If "Made by..." is visible, hide it first then fade the email in.
		// Otherwise, vice versa.
		var first = $("#made-by").is(":visible") ? $("#made-by") : $("#email");
		var second = $("#made-by").is(":visible") ? $("#email") : $("#made-by");
		
		// Disable toggling if currently fading
		if(first.css("opacity") !== "1") return;
		
		// Actually fade the elements now
		first.fadeToggle(200, function() {
			second.fadeToggle(200);
		});
	});
}