var quotes = [
        'Responsive is better than fast.',
        'It’s not fully shipped until it’s fast.',
        'Anything added dilutes everything else.',
        'Practicality beats purity.',
        'Approachable is better than simple.',
        'Mind your words, they are important.',
        'Speak like a human.',
        'Half measures are as bad as nothing at all.',
        'Encourage flow.',
        'Non-blocking is better than blocking.',
        'Favor focus over features.',
        'Avoid administrative distraction.',
        'Design for failure.',
        'Keep it logically awesome.'
    ];

document.getElementById('quote').textContent = quotes[
    Math.floor(Math.random() * quotes.length)
];
