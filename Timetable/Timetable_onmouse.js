//마우스 올릴시 색 변함
var COLOR_SET = ["#42BAFF","#00DC6D","#F1BE5B","#FFA6E9","#FFAB6E",
                "#FFFD66","#A4A4A4","#E191FF","#85E4FF","#FF7F32"];
var COLOR_NUM = 0;
var COLOR_CLEAR = "#FFFFFF";
var Lecture_cart = [];
var nodelete;

function changeColor(){
    $('#Timetable tr').mouseover(function(){
        $(this).addClass('changeColor');
    }).mouseout(function() {
        $(this).removeClass('changeColor');
    });
}

//테스트

function Timetable_Mouseover(){
    $('#Timetable tr').mouseover(function(){
        var tr=$(this);
        var td=tr.children();

        var time=td.eq(10).text(); // 시간
        var split_time=time.split(','); // 콤마구분
        var lecture_name=td.eq(5).text(); // 과목명
        var lecture_num=td.eq(4).text();
        var count=0;
        var dayCart=new Array();
        var timeCart=new Array();
        var day2;
        var color2=new Array();
        var nodelete=0;
        for(var i=0;i<split_time.length;i++)
        {
            // 날짜계산
            var inttime2=parseInt(split_time[i]);
            var lecturetime2=parseInt(split_time[i])%100;

            if(inttime2<100){
                day2=0;
            }
            else if(inttime2>=100 && inttime2<200){
                day2=1;
            }
            else if(inttime2>=200 && inttime2<300){
                day2=2;
            }
            else if(inttime2>=300 && inttime2<400){
                day2=3;
            }
            else if(inttime2>=400 && inttime2<500){
                day2=4;
            }
            dayCart[i]=day2;
            timeCart[i]=lecturetime2;
 //           console.log(dayCart[i]);
            color2[i] = $('#timetable_time_col_'+dayCart[i]+'_timediv_'+timeCart[i]).css('background-color');
            count++;
        }
        for(var i=0;i<count;i++){
            if(color2[i]=='rgb(255, 255, 255)'){
                $('#timetable_time_col_'+dayCart[i]+'_timediv_'+(timeCart[i])).css('background-color', 'gray');
                //$('#timetable_time_col_'+dayCart[i]+'_timediv_'+(timeCart[i])).css('border-color', 'red');
            /*$('#timetable_time_col_'+dayCart[0]+'_timediv_'+(timeCart[0])).css('background-color', 'gray');
            $('#timetable_time_col_'+dayCart[1]+'_timediv_'+(timeCart[1])).css('background-color', 'gray');
            $('#timetable_time_col_'+dayCart[2]+'_timediv_'+(timeCart[2])).css('background-color', 'gray');*/
            }
        }
    }).mouseout(function() {
        var tr=$(this);
        var td=tr.children();

        var time=td.eq(10).text(); // 시간
        var split_time=time.split(','); // 콤마구분
        var lecture_name=td.eq(5).text(); // 과목명
        var lecture_num=td.eq(4).text();
        var count=0;
        var dayCart=new Array();
        var timeCart=new Array();
        var day2;
        var color2=new Array();
        var nodelete=0;
        for(var i=0;i<split_time.length;i++)
        {
            // 날짜계산
            var inttime2=parseInt(split_time[i]);
            var lecturetime2=parseInt(split_time[i])%100;

            if(inttime2<100){
                day2=0;
            }
            else if(inttime2>=100 && inttime2<200){
                day2=1;
            }
            else if(inttime2>=200 && inttime2<300){
                day2=2;
            }
            else if(inttime2>=300 && inttime2<400){
                day2=3;
            }
            else if(inttime2>=400 && inttime2<500){
                day2=4;
            }
            dayCart[i]=day2;
            timeCart[i]=lecturetime2;
            color2[i] = $('#timetable_time_col_'+dayCart[i]+'_timediv_'+timeCart[i]).css('background-color');
            count++;
        }

        for(var i=0;i<count;i++){
            if(color2[i]=='rgb(128, 128, 128)'){
                $('#timetable_time_col_'+dayCart[i]+'_timediv_'+(timeCart[i])).css('background-color', "");
                //$('#timetable_time_col_'+dayCart[i]+'_timediv_'+(timeCart[i])).css('border-color', "");
            }
        }
           
    });
}

function clickTr(){
    $("#Timetable tr").click(function(){
        var tr=$(this);
        var td=tr.children();

        var clear=0;
        var time=td.eq(10).text(); // 시간
        var split_time=time.split(','); // 콤마구분
        var lecture_name=td.eq(5).text(); // 과목명
        var lecture_num=td.eq(4).text();
        var color = new Array();
        var DayCart=new Array();
        var TimeCart=new Array();
        var LectureCart = new Array();
        var noinput=0;
        var time_alert=0;
        var time_alert_before=[0,0,0,0,0,0]
        var count=0;

        for(var i=0;i<split_time.length;i++)
        {

            // 날짜계산
            var inttime=parseInt(split_time[i]);
            if(inttime<100){
                day=0;
            }
            else if(inttime>=100 && inttime<200){
                day=1;
            }
            else if(inttime>=200 && inttime<300){
                day=2;
            }
            else if(inttime>=300 && inttime<400){
                day=3;
            }
            else if(inttime>=400 && inttime<500){
                day=4;
            }
            // 시간계산
            var lecturetime=parseInt(split_time[i])%100;
            //시간표 중복확인
            color[i] = $('#timetable_time_col_'+day+'_timediv_'+(lecturetime)).css('background-color');
            DayCart[i]=day;
            TimeCart[i]=lecturetime;
            LectureCart[i]=lecture_name;
            /*if(color != 'rgb(255, 255, 255)')
            {

                    for(var j=0;j<Lecture_cart.length;j++){
                        if(Lecture_cart[j]==lecture_name)
                        {
                            clear=1;
                        }
                    }
            }*/
        /*    for(var j=0;j<split_time.length;j++)
            {
                if(color[j]!='rgb(255, 255, 255)' || color[j]!='rgb(128, 128, 128)'){
                    for(var k=0;k<Lecture_cart.length;k++)
                    {
                        if(Lecture_cart[k]==lecture_name)
                        {
                            clear=1;
                        }
                    }
                }
            }
            //손보기, 배열에 day랑 lecturetime 넣고, 특정 조건 만족할때만 들어가고 뺄 수 있도록 한번에
            if(clear==0){
                $('#timetable_time_col_'+day+'_timediv_'+(lecturetime)).css('background-color', COLOR_SET[COLOR_NUM]);
                document.getElementById('timetable_time_col_'+day+'_timediv_'+(lecturetime)).style.fontSize="10px";
                document.getElementById('timetable_time_col_'+day+'_timediv_'+(lecturetime)).style.textAlign="center";
                document.getElementById('timetable_time_col_'+day+'_timediv_'+(lecturetime)).innerHTML=lecture_name;
            }
            else{
                $('#timetable_time_col_'+day+'_timediv_'+(lecturetime)).css('background-color',COLOR_CLEAR);       
                document.getElementById('timetable_time_col_'+day+'_timediv_'+(lecturetime)).innerHTML="";
            }
            clear=0;
            Lecture_cart[i]=lecture_name;*/
        }
        for(var j=0;j<split_time.length;j++)
        {
            if(color[j]!='rgb(128, 128, 128)'){
                noinput=1;
            }
        }
        if(noinput==0){
            for(var j=0;j<split_time.length;j++)
            {
                $('#timetable_time_col_'+DayCart[j]+'_timediv_'+(TimeCart[j])).css('background-color', COLOR_SET[COLOR_NUM]);
                document.getElementById('timetable_time_col_'+DayCart[j]+'_timediv_'+(TimeCart[j])).style.fontSize="10px";
                document.getElementById('timetable_time_col_'+DayCart[j]+'_timediv_'+(TimeCart[j])).style.textAlign="center";
                document.getElementById('timetable_time_col_'+DayCart[j]+'_timediv_'+(TimeCart[j])).innerHTML=lecture_name;
            }
        }
        else{
            for(var j=0;j<split_time.length;j++)
            {
                if(color[j] != 'rgb(128, 128, 128)'){ //mouseover된 색이 아닌 다른 색이 존재한다면 중복
                    time_alert_before[j]=1;
                    count++;
                }
            }

            if(count==split_time.length){
                for(var j=0;j<split_time.length;j++){
                    $('#timetable_time_col_'+DayCart[j]+'_timediv_'+(TimeCart[j])).css('background-color',COLOR_CLEAR);       
                    document.getElementById('timetable_time_col_'+DayCart[j]+'_timediv_'+(TimeCart[j])).innerHTML="";
                }
            }
            else{
                alert("시간표가 중복됩니다!");
            }
        }
        COLOR_NUM++;
        if(COLOR_NUM==9) {COLOR_NUM=0;}
    });
}

