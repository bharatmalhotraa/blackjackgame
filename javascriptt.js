function drawing(){
    const dealtotal=0
    buildDeck()
    shuffleDeck()
    startgame()
    const total = 0
    const aceplayer=0
    const acedealer=0
    card=document.getElementById('deckinit')
    card.setAttribute('id','hide')
    butarea=document.getElementById('result')
    hit=document.createElement('button')
    hit.innerText='HIT'
    hit.setAttribute('id','but')
    hit.setAttribute('onclick','hitt()')
    butarea.append(hit)
    stand=document.createElement('button')
    stand.innerText='STAND'
    stand.setAttribute('id','butt')
    stand.setAttribute('onclick','standd()')
    butarea.append(stand)
    drawingbut=document.getElementById('draw')
    drawingbut.setAttribute('class','hide')

}


function buildDeck() {
    let values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    let types = ["of_clubs", "of_diamonds", "of_hearts", "of_spades"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "_" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}
function startgame(){
    playertotal=imagedisplay('players')
    dealertotal=imagedisplay('dealers')
    area1=document.getElementById('restextd')
    console.log(dealertotal)
    if (dealertotal==11){
        area1.innerText=area1.innerText + ' ' + '11/1'
        ace=1
        b+=1
    }
    else{
        area1.innerText=area1.innerText + ' ' + dealertotal
    }
    area2=document.getElementById('restexty')
    if (playertotal==11){
        area2.innerText=area2.innerText + ' ' + "11/1"
        ace=1
        i+=1
    }
    else{
        area2.innerText=area2.innerText + ' ' + playertotal
    }
    area3=document.getElementById('dealers_card')
    image1=document.createElement('img')
    image1.setAttribute('src','download.png')
    image1.setAttribute('class','slide')
    image1.setAttribute('height','730px')
    image1.setAttribute('width','500px')
    area3.appendChild(image1)
    total=playertotal
    dealtotal=dealertotal
}
function imagedisplay(side){
    card=deck.pop()
    image=document.createElement('img')
    source="./card_image/" + card + ".png";
    image.setAttribute('src',source)
    image.setAttribute('class','slidein')
    let name=side+'_card'
    area=document.getElementById(name)
    area.appendChild(image)
    return getValue(card) 
}
function hitt(){
    if (total>21){
        while(i>0){

        while(minwithoutace>21){
            minwithoutace=total-10
            i-=1
        }
        break
    }
    total=minwithoutace
    }
    hitcardvalue=imagedisplay('players')
    total=total+hitcardvalue
    area2.innerText="YOUR HAND: "+total
    if (total>21){
        while(i>0){

        while(minwithoutace>21){
            minwithoutace=total-10
            i-=1
        }
        break
    }
    total=minwithoutace
    }
    console.log(total)
    if (total>21){

        imageloose=document.getElementById('loose')
        imageloose.style.display='block'
        buton=document.getElementById('but')
        buton.disabled=true
        but2=document.getElementById('butt')
        but2.disabled=true
    }
    
}

function standd(){
    buton=document.getElementById('but')
    buton.disabled=true
    but2=document.getElementById('butt')
    but2.disabled=true
    image1.remove()
    standcardvalue=imagedisplay('dealers')
    dealtotal+=standcardvalue
    area1.innerText="Dealer: "+dealtotal
    if (dealtotal>=17){
        
        if (dealtotal<total){
            imagewin=document.getElementById('win')
            imagewin.style.display='block'
        }
        else if (dealtotal>21){
            imagewin=document.getElementById('win')
            imagewin.style.display='block'
        }
        else{
            imageloose=document.getElementById('loose')
            imageloose.style.display='block'
        }
    }
    else{
        standd()
    }
}
function getValue(card) {
    let data = card.split("_"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "ace") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}
