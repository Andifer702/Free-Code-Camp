var quote = ['In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. -Maya Angelou', 'And we are put on this earth a little space that we might learn to bear the beams of love.  -William Blake', 'I have to remind myself to breathe -- almost to remind my heart to beat! -Emily Brontë', 'Love does not consist of gazing at each other, but in looking outward together in the same direction. -Antoine de Saint-Exupery', 'Thus you may understand that love alone is the true seed of every merit in you, and of all acts for which you must atone. -Dante Alighieri']

function genQuote(){
  return quote[Math.floor(Math.random()*(quote.length))];
}


    $("#quoteButton").click(function(){
        $('#getQuote').html(genQuote);
    });

$('#tweet').click(function(){
  window.open('https://twitter.com/intent/tweet?text=' + $('#genQuote'))});
