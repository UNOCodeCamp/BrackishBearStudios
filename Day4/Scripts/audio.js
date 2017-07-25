audio = new Object();

audio.startTime = Date.now();
audio.audio1 = new Audio("Assets/sfx_wpn_machinegun_loop1.wav");
audio.audio2 = new Audio("Assets/sfx_wpn_machinegun_loop2.wav");
audio.audio3 = new Audio("Assets/sfx_wpn_machinegun_loop3.wav");
audio.audio4 = new Audio("Assets/sfx_wpn_machinegun_loop4.wav");

/*
audio.playAll = function()
{
    var now = Date.now();
    var duration = now - audio.startTime
    if (duration < 200)
    {
        audio.audio1.play();
    }
    else if (duration > 200 && duration < 400 )
    {
        audio.audio2.play();
    }
    else if (duration > 400 && duration < 800 )
    {
        audio.audio3.play();
    }
     else if (duration > 800 && duration < 1200 )
    {
        audio.audio4.play();
    }
    else{
        audio.startTime = Date.now();
    }
    //audio2.play();
    //audio3.play();
    //audio4.play();
}*/



audio.playAll = function()
{
    var now = Date.now();
    var duration = now - audio.startTime
    if (duration > 200)
    {
        var randnum = ~~(Math.random() * 4)
        switch(randnum)
        {
            case 0: audio.audio1.play(); break;
            case 1: audio.audio2.play(); break;
            case 2: audio.audio3.play(); break;
            case 3: audio.audio4.play(); break;
        }
        audio.startTime = Date.now();
    }
    //audio2.play();
    //audio3.play();
    //audio4.play();
}
    


