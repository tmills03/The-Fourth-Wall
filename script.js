var bullying = $('.bullying1');
var economics = $('.economics1');
var sexism = $('.sexism1');
var handicap = $('.handicaps1');
var racism = $('.racism1');
var Random = $('.randomGenerator')
var sBullying = $('.bullying2');
var sEconomics = $('.economics2');
var sSexism = $('.sexism2');
var sHandicap = $('.handicaps2');
var sRacism = $('.racism2');

var issue = ["Bullying", "Sexism", "Racism", "Socioeconomics","Handicaps"];
Random.on("click", printRandom);
function printRandom(){
  var num = Math.floor(Math.random() *issue.length);
  $('.issues').text(`${issue[num]}`);
}
bullying.on("click", printBullying);


function printBullying(){
  sBullying.text("Bullying: to seek to harm, intimidate, or coerce someone. Examples include verbal abuse (insults), unwanted physical contact, and gossiping.");
}

economics.on("click", printEconomics);

function printEconomics(){
  sEconomics.text("Socioeconomic Status: a grouping of individuals based on education, income, and occupation. These groups are most commonly named lower, middle, and upper class. There are discrimitory acts on imposed on all classes.");
}

handicap.on("click", printHandicaps);

function printHandicaps(){
  sHandicap.text("Disability: a physical, mental, cognitive, or developmental condition that impairs, interferes with, or limits a person's ability to engage in certain tasks or actions or participate in typical daily activities and interactions. Handicap: a disadvantage that makes achievement unusually difficult.")
}

racism.on("click", printRacism);

function printRacism(){
  sRacism.text("Racism: the belief that race is the primary determinant of human traits and capacities and that racial differences produce an inherent superiority of a particular race.");
}

sexism.on("click", printSexism);

function printSexism(){
  sSexism.text("Sexism: discrimination or devaluation based on a person's sex or gender, as in restricted job opportunities, especially such discrimination directed against women.");
}

var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendStory);

function appendStory() {
  var input = $('.input').val();

  cardContainer.append(`
    <p class="input-card"> ${input}</p>
  `);
  
  $('.input').val("");
 
}
