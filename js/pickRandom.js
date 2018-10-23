
$(function(){
  $('.c-rb').click(function(){
    if ($('.c-rb--Hippodrome').is(':checked'))
    {
      eventSource = dataHippodrome
      console.log(eventSource)
    }
    if ($('.c-rb--AmRep').is(':checked'))
    {
      eventSource = dataAmRep
      console.log(eventSource)
    }
  });
});

let eventNumber = 0

// Defines the elements getting changed
const titleTag = document.querySelector('.js__title')
const dateTag = document.querySelector('.js__date')
const descTag = document.querySelector('.js__desc')

$('#c-randomdata__refresh').click(function() {
	$('html').find('.js__title').each(function() {
		var eventNumber = Math.floor(Math.random() * eventSource.length)
		var that = $(this);
		that.html(eventSource[eventNumber].title);
	})
	$('html').find('.js__date').each(function() {
		var eventNumber = Math.floor(Math.random() * eventSource.length)
		var that = $(this);
		that.html(eventSource[eventNumber].date);
	})
	$('html').find('.js__desc').each(function() {
		var eventNumber = Math.floor(Math.random() * eventSource.length)
		var that = $(this);
		that.html(eventSource[eventNumber].desc);
	})
})

const dataHippodrome = [
	{
		title: "The Face of Suffrage",
		date: "Thu 18 Oct - Thu 31 Jan 2019",
		category: "Visual Arts",
	},
	{
		title: "In the Wings: New Perspective",
		date: "Thu 18 Oct - Thu 31 Jan 2019",
		category: "Ballet",
	},
	{
		title: "War Horse",
		date: "Thu 18 Oct - Sat 3 Nov",
		category: "Drama",
		desc: "An unforgettable theatrical event which will take you on an extraordinary journey.",
	},
	{
		title: "DX - Puzzlecreature",
		date: "Thu 18 Oct",
		category: "Dance",
		desc: "Three exquisite dance artists question attitudes to ageing and the body.",
	},
	{
		title: "Drama Adventures with Toni Midlane",
		date: "Fri 19 Oct - Fri 21 Dec",
		category: "Family & Pantomime",
	},
	{
		title: "The Full Monty",
		date: "Mon 5 Nov - Sat 10 Nov",
		category: "Drama",
		desc: "\.\.\.Uproariously entertaining\" The Daily Telegraph",
	},
	{
		title: "Festival of Champagne Tasting Dinner with Laurent-Perrier",
		date: "Thu 8 Nov",
		category: "Courses & Talks",
	},
	{
		title: "DX - Silk Road",
		date: "Thu 1 Nov - Fri 2 Nov",
		category: "Dance",
		desc: "Flamenco roots are blended with a unique, contemporary style in this story of East meets West.",
	},
	{
		title: "DX - The Knot",
		date: "Thu 8 Nov",
		category: "Dance",
		desc: "You’re invited to a unique wedding celebration where the bride, groom, best man and bridesmaids are all world-class dancers!",
	},
	{
		title: "Hit The Ode - November 18",
		date: "Fri 9 Nov",
		category: "Spoken Word",
		desc: "SHOUT Festival edition of this unique spoken word event!",
	},
	{
		title: "Behind The Scenes Tours",
		date: "Sat 10 Nov - Sat 9 Mar 2019",
		category: "Tours",
		desc: "Discover the world behind the curtain and the history of the Hippodrome.",
	},
	{
		title: "Birmingham Hippodrome & Ad Infinitum present - No Kids",
		date: "Sat 10 Nov",
		category: "Drama",
		desc: "Physical storytelling, gender-bending musical cabaret, and verbatim theatre marry to ask how truly open our society is to the idea of two dads.",
	},
	{
		title: "GymFusion Birmingham 2018",
		date: "Sun 11 Nov",
		desc: "Experience gymnastics as you've never seen before!",
	},
	{
		title: "Homecomings",
		date: "Sun 11 Nov",
		category: "Drama",
	},
	{
		title: "WNO - La traviata",
		date: "Wed 14 Nov - Fri 16 Nov",
		category: "Opera",
		desc: "This classic production features some of Verdi’s most evocative music",
	},
	{
		title: "WNO - War & Peace",
		date: "Sat 17 Nov",
		category: "Opera",
		desc: "As epic in scale as the novel itself.",
	},
	{
		title: "Hit The Ode - November 18",
		date: "Fri 9 Nov",
		category: "Spoken Word",
		desc: "SHOUT Festival edition of this unique spoken word event!",
	},
	{
		title: "Jinkx Monsoon & Major Scales: The Ginger Snapped",
		date: "Sat 17 Nov",
		category: "Comedy",
		desc: "The RuPaul's Drag Race favourite returns to Birmingham Hippodrome!",
	},
	{
		title: "The Nutcracker",
		date: "Fri 23 Nov - Thu 13 Dec",
		category: "Ballet",
		desc: "Be swept away to a winter wonderland with The Nutcracker this Christmas.",
	},
];

const dataAmRep = [
	{
		title: "Cirque of the Dead",
		desc: "Join us this Halloween season for Cirque of the Dead, a naughty nightmare of circus spectacle!",
		date: "OCT 19 - OCT 31",
	},
	{
		title: "Danse Macabre: A Walking Dead Burlesque",
		desc: "This… This is Lucille, and she is awesome. Who want’s the honor?",
		date: "OCT 21 8PM",
	},
	{
		title: "Boston Percussive Arts Festival: Trio Mokili feat. Makaya McCraven",
		desc: "Boston Percussive Arts Festival brings rhythm to our city and welcomes Trio Mokili and the Boston Round Robin Rhythm Session.",
		date: "OCT 24 8PM",
	},
	{
		title: "The Haunt",
		desc: "The story of Rapunzel as a Halloween musical theater cabaret and costumed dance party.",
		date: "OCT 28 7PM",
	},
	{
		title: "Rock House Comedy",
		desc: "Get ready to rock and laugh!",
		date: "NOV 1 8PM",
	},
	{
		title: "Billy Dean Thomas",
		desc: 'Also known as “The Queer B.I.G.”, Billy Dean is a musician who challenges the hip hop game with lyrics that align with #BlackLivesMatter and intersectional feminism.',
		date: "NOV 2 10PM",
	},
	{
		title: "Black Light",
		desc: "Jomama Jones performs a spiritual revival for turbulent times, drawing from Prince, Sade, Diana Ross, and Tina Turner.",
		date: "MAY 15 - 19, 2019",
	},
	{
		title: "Believe it or Naughty: A Burlesque of Lore and Legend",
		desc: "A Burlesque of Lore and Legend.",
		date: "NOV 8 & NOV 11",
	},
	{
		title: "Billy Wylder: Strike the Match",
		desc: "GStrike the Match is the dynamic record release concert experience featuring Boston’s own art-folk-rock band, Billy Wylder.",
		date: "NOV 9 8:30PM",
	},
	{
		title: "Barber Shop Chronicles",
		desc: "Newsroom and political platform, confession box and stadium—for generations, barber shops have been places where African men gather to discuss the world.",
		date: "DEC 5 - JAN 5, 2019",
	},
	{
		title: "We Live in Cairo",
		desc: "This new musical follows six revolutionary students armed with laptops and cameras, guitars and spray cans as they come of age in a contemporary Cairo.",
		date: "MAY 14 - JUN 16, 2019",
	},
	{
		title: "Sven Ratzke",
		desc: "Featuring songs by Brecht, Bowie, Weill, and Wainwright, prepare to meet pimps, lovers, angels, and devils in this intimate cabaret performance.",
		date: "APR 18, 2019 8PM",
	},
]

let eventSource = dataHippodrome;
