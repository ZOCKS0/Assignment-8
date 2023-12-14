



var cartona = "";
var using , used;
var quote = ["\"Resentment is like drinking poison and waiting for your enemies to die.\"","\"Be yourself; everyone else is already taken.\"","\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"","\"So many books, so little time.\"","\"A room without books is like a body without a soul.\"","\"You only live once, but if you do it right, once is enough.\"","\"Be the change that you wish to see in the world.\"","\"If you tell the truth, you don't have to remember anything.\"","\"A friend is someone who knows all about you and still loves you.\"","\"To live is the rarest thing in the world. Most people exist, that is all.\""];
var person = ["--Nelson Mandela","--Oscar Wilde","--Albert Einstein","--Frank Zappa","--Marcus Tullius Cicero","--Mae West","--Mahatma Gandhi","--Mark Twain","--Elbert Hubbard","--Oscar Wilde"];

function display() {
    using = Math.floor(Math.random()*10);

    while(using == used){ 
        using = Math.floor(Math.random()*10);
    }

cartona = `
<p class="fs-4">${quote[using]}</p>
<p class="fs-3 fw-medium">${person[using]}</p>
`;

    document.getElementById("action").innerHTML= cartona;
    used = using;
}




