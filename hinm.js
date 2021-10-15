/*The MIT License (MIT)

Copyright (c) 2015 bpyamasinn.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/

//windowオブジェクトを使用してページが読み込まれたらコードが実行されるよう記述
window.onload=function(){
    var time=300;
    var counter;
    var min =document.getElementById("min");
    var sec=document.getElementById("sec");
    var start=document.getElementById("start");
    var stop=document.getElementById("stop");
    var reset=document.getElementById("reset");
//「startボタンがクリックされた時」のひな形
    start.onclick=function(){
        //startボタンがクリックされた時に、toggle関数が実行されるように
        toggle();
        alert("Start up!");
        counter=setInterval(count,1000)//setInterval( 関数名, 秒数(ミリ秒) );
    }

    //stopボタンがクリックされた時に、toggle関数が実行されるように
    stop.onclick=function(){
        toggle();
        clearInterval(counter);//stopボタンがクリックされた時に、カウントを止める

    }

    reset.onclick=function(){
        time=300;//カウントダウンされている変数timeの値を 180に戻す
        //秒の表示を初期値に戻す
        sec.innerHTML=time%60;
        //分の表示を初期値に戻す
        min.innerHTML=Math.floor(time/60);
    }
/*「STARTボタンを押すことができてSTOPボタンを押すことができない状態」と
「STOPボタンを押すことができてSTARTボタンを押すことができない状態」との切り替え */
    function toggle(){
        if(start.disabled){
            start.disabled=false; //「もし"変数startがクリックできるならば」
            stop.disabled=true;
           //startボタンがクリックできない時にtoggle関数が実行されたら、stopボタンをクリックできなくなるように
        }else{//startがクリックできる時
           start.disabled=true;//startボタンをクリックできない
           stop.disabled=false;//stopボタンをクリックできる
        }
    }

/*count関数は 1秒おきに1回実行され、1度実行される度に1秒がカウントされて 
0秒になったらタイマーを止めてアラートを表示するという想定です。*/
    function count(){
        if(time===0){//「もし変数timeの値が0なら」
            sec.innerHTML=0;
            min.innerHTML=0;
            toggle();//残り時間が0秒になった時に、count関数上でtoggle関数が実行されるように
            alert("3...2...1...Time out!");
            //タイマーのカウントが止まるよう設定
            //clearInterval ( インターバル間隔での処理の実行を止める ) 
            //一定間隔で処理を実行 setInterval ( インターバル間隔での処理の実行をセットする ) 
            clearInterval(counter);
        }else{
        time-=1;
        /*あるHTML要素のオブジェクトの値をJavaScriptから変更する場合、
         innerHTML という属性を使用し、「要素.innerHTML = 値;」
         というような形で表現します。秒数を表現するために、変数timeを使用します。
         秒数は変数timeを60で割った余りなので、値は time % 60 となります*/
         sec.innerHTML=time%60;
         //Mathオブジェクトのfloor機能は、小数点以下を切り捨てを行うための機能
         min.innerHTML=Math.floor(time/60);
         
        }
    }
}
