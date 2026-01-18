let msg = ['It isn’t normal to know what we want. It is a rare and difficult psychological achievement \~ Abraham Maslow', 
    'I take my fundamental cue from John Coltrane that says there must be a priority of integrity, honesty, decency, and mastery of craft \~ Cornel West', 
    'Death is not the greatest loss in life. The greatest loss is what dies inside us while we live \~ Norman Cousins'
];


const randNum = ()=>Math.floor(Math.random()*3);

const randMsg = ()=>{
    
    const i = randNum();
    console.log(i);
    console.log(`Here is your quote: ${msg[i]}`);

}


randMsg();




