// https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
/* CSS */ 

/* Javascript */
var Cell_Width = 70; //cell
var Cell_Height = 40; 
//cell의 너비와 높이

var First_Width = 70;
var First_Height = 40;
//요일부분 너비와 높이

var borderline = 10;
// 경계선으로부터의 위치

var Time=["9시","10시","11시","12시","13시","14시","15시","16시","17시","18시","19시","20시","21시","22시"];
var Day=["월요일","화요일","수요일","목요일","금요일"]

/* fillRect(x, y, width, height) (en-US)
색칠된 직사각형을 그립니다.
strokeRect(x, y, width, height) (en-US)
직사각형 윤곽선을 그립니다.
clearRect(x, y, width, height) (en-US)
특정 부분을 지우는 직사각형이며, 이 지워진 부분은 완전히 투명해집니다. */

function draw_timetable()
{
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();

    ctx.fillStyle='white';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 전체 캔버스 초기화
    //width=500, height=700 in "index.html"

    // 선색깔
    ctx.lineWidth = 1;
    ctx.strokeStyle='black'; 

    // 글씨색과 글씨체
    ctx.fillStyle='black';
    ctx.font="13px Noto Serif KR";
 

    ctx.strokeRect(borderline, borderline, First_Width, First_Height);

    //시간 (9시,10시,11시,...)
    for(var i=0; i<14; i++) {
        //x축은 borderline부터 시작. 가운데정렬 center 안됨 수치로 글씨위치 조절
        //y축은 반복해서 높이 증가시켜야.
        x=borderline;
        y=borderline+ (i * Cell_Height) + First_Height
        ctx.strokeRect(x, y, Cell_Width, Cell_Height); // 직사각형 윤곽선
        ctx.fillText(Time[i], 28, y+19); //글씨 채우고 위치는 수치조절로 하기
    }

    //월화수목금
    //x축은 시간이 있으므로 한칸 띄워줘야함.
    for(var j=0; j<5; j++) {
        x= borderline + j*Cell_Width + First_Width;
        ctx.strokeRect(x , borderline, Cell_Width, First_Height);
        ctx.fillText(Day[j], x+15 , borderline+20);
        for(var i=0; i<14; i++) {
            y = borderline+i*Cell_Height+First_Height;
            ctx.strokeRect(x, y, Cell_Width, Cell_Height);
        }
    }
}
