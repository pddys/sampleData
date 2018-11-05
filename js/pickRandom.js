
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
    if ($('.c-rb--Lensic').is(':checked'))
    {
      eventSource = dataLensic
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
		date: "Oct 19 - Oct 31",
	},
	{
		title: "Danse Macabre: A Walking Dead Burlesque",
		desc: "This… This is Lucille, and she is awesome. Who want’s the honor?",
		date: "Oct 21 8PM",
	},
	{
		title: "Boston Percussive Arts Festival: Trio Mokili feat. Makaya McCraven",
		desc: "Boston Percussive Arts Festival brings rhythm to our city and welcomes Trio Mokili and the Boston Round Robin Rhythm Session.",
		date: "Oct 24 8PM",
	},
	{
		title: "The Haunt",
		desc: "The story of Rapunzel as a Halloween musical theater cabaret and costumed dance party.",
		date: "Oct 28 7PM",
	},
	{
		title: "Rock House Comedy",
		desc: "Get ready to rock and laugh!",
		date: "Nov 1 8PM",
	},
	{
		title: "Billy Dean Thomas",
		desc: 'Also known as “The Queer B.I.G.”, Billy Dean is a musician who challenges the hip hop game with lyrics that align with #BlackLivesMatter and intersectional feminism.',
		date: "Nov 2 10PM",
	},
	{
		title: "Black Light",
		desc: "Jomama Jones performs a spiritual revival for turbulent times, drawing from Prince, Sade, Diana Ross, and Tina Turner.",
		date: "May 15 - 19, 2019",
	},
	{
		title: "Believe it or Naughty: A Burlesque of Lore and Legend",
		desc: "A Burlesque of Lore and Legend.",
		date: "Nov 8 & Nov 11",
	},
	{
		title: "Billy Wylder: Strike the Match",
		desc: "GStrike the Match is the dynamic record release concert experience featuring Boston’s own art-folk-rock band, Billy Wylder.",
		date: "Nov 9 8:30PM",
	},
	{
		title: "Barber Shop Chronicles",
		desc: "Newsroom and political platform, confession box and stadium—for generations, barber shops have been places where African men gather to discuss the world.",
		date: "Dec 5 - Jan 5, 2019",
	},
	{
		title: "We Live in Cairo",
		desc: "This new musical follows six revolutionary students armed with laptops and cameras, guitars and spray cans as they come of age in a contemporary Cairo.",
		date: "May 14 - Jun 16, 2019",
	},
	{
		title: "Sven Ratzke",
		desc: "Featuring songs by Brecht, Bowie, Weill, and Wainwright, prepare to meet pimps, lovers, angels, and devils in this intimate cabaret performance.",
		date: "Apr 18, 2019 8pm",
	},
]

const dataLensic = [
	{
		title: "Performance Santa Fe presents Veronica Swift",
		desc: "If you haven’t heard the name Veronica Swift, it’s time you do. Still in her early 20s, Swift is not only equally comfortable singing bebop, swing, tunes from the Great American Songbook, and beyond, she inhabits these various styles like a veteran performer of each era. Swift, who first performed at the Telluride Jazz Festival at age 10, and headlined there two years ago, moves effortlessly from soulful ballads to her skimming scat. She is generation-next in jazz.",
		date: "November 9, 2018 - 7:30 PM",
	},
	{
		title: "The Lensic and The Santa Fe Opera present The Met Live in HD: Marnie",
		desc: "A Metropolitan Opera premiere by special arrangement with Universal Pictures. It examines the cost of freedom, the limitations of forgiveness and the impossibility of escaping the past, in music that is direct and powerful.",
		date: "November 10, 2018 - 11:00 AM",
	},
	{
		title: "Lensic Presents NT Live in HD: Allelujah!",
		desc: "One of Britain’s most celebrated writers, Alan Bennett’s plays include The History Boys, The Lady in the Van and The Madness of George III, all of which were also seen on film. Allelujah! is his tenth collaboration with award-winning director Nicholas Hytner.",
		date: "November 12, 2018 - 7:00 PM",
	},
	{
		title: "Santa Fe Institute presents Community Lecture featuring Michelle Girvan",
		desc: "In recent years, machine learning methods like \"deep learning\" have proven enormously successful for tasks including image classification and voice recognition. Despite their effectiveness for big-data classification problems, these methods have had limited success predicting \"chaotic\" systems like weather, solar activity, and brain dynamics.",
		date: "November 13, 2018 - 7:30 PM",
	},
	{
		title: "Santa Fe Symphony presents Handel's Messiah",
		desc: "Feel the power and glory of Handel's Messiah! This acclaimed annual performance, under the baton of Principal Conductor Guillermo Figueroa, is our official start of the holiday season. Featuring the full Santa Fe Symphony Orchestra & Chorus, with choral direction by Carmen Flórez-Mansi, and guest soloists: soprano Hailey Clarke, mezzo-soprano Daryl Freedman, tenor John Tiranno, and bass-baritone Joseph Beutel, this frequently sold-out program is not to be missed. FREE preview talk one hour before the concert!",
		date: "November 17, 2018 - 7:00 PM",
	},
	{
		title: "Lensic Presents Wise Fool New Mexico's Circus Luminous",
		desc: "The Thanksgiving weekend tradition continues! Wise Fool New Mexico’s acrobats, aerialists, dancers, and musicians never fail to delight with daring yet graceful feats of wonder, visual splendor, and poignant humor. It’s a home-grown circus extravaganza for all ages!",
		date: "November 23, 2018 - 7:00 PM",
	},
	{
		title: "Lensic Presents NT Live in HD: The Madness of George III",
		desc: "It’s 1786 and King George III is the most powerful man in the world. But his behavior is becoming increasingly erratic as he succumbs to fits of lunacy. With the King’s mind unravelling at a dramatic pace, ambitious politicians and the scheming Prince of Wales threaten to undermine the power of the Crown and expose the fine line between a King and a man.",
		date: "November 27, 2018 - 7:00 PM",
	},
	{
		title: "National Latino Behavioral Health Association presents 2018 Mariachi Christmas",
		desc: "Mariachi Christmas is a wonderful performance filled with holiday music with Mariachi performers and singers accompanied with Folkorico dancers.",
		date: "December 1, 2018 - 7:00 PM",
	},
	{
		title: "New Mexico PBS/KNME-TV present MASTERPIECE VICTORIA Preview Screening",
		desc: "Join New Mexico PBS for an exclusive screening of the first episode of season 3 of Victoria on MASTERPIECE. Monday, December 3rd - 7:00pm. Jenna Coleman returns as the young but fearless monarch, facing a revolution in Europe that threatens to end her reign.",
		date: "December 3, 2018 - 7:00 PM",
	},
	{
		title: "Lensic Presents The TEN Tenors: Home for the Holidays",
		desc: "Australia’s rock stars of the opera celebrate the season with a selection of traditional and contemporary favorites, from “Joy to the World” and “Amazing Grace” to “Feliz Navidad” and “Winter Wonderland.”",
		date: "December 4, 2018 - 7:30 PM",
	},
	{
		title: "New Mexico Gay Men's Chorus presents Peace on Earth Holiday Concert",
		desc: "As the song says, peace begins with me. From there we can let it radiate out all over our community and into the world. Come celebrate the holidays with the New Mexico Gay Men's Chorus as we spread goodwill toward all.",
		date: "December 5, 2018 - 7:30 PM",
	},
	{
		title: "Santa Fe Symphony presents Christmas Treasures",
		desc: "Don’t miss our annual Christmas Pops concert at The Lensic, led by Principal Conductor Guillermo Figueroa, and featuring a special side-by-side performance with The Santa Fe Youth Symphony! This highly anticipated concert brings you holiday favorites the entire family will enjoy.",
		date: "December 9, 2018 - 4:00 PM",
	},
]

let eventSource = dataHippodrome;
