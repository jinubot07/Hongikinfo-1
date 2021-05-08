// https://helptoeic.tistory.com/31

function ViewScholarship(){
    var Dep=document.getElementById('Dep');
    var Grade=document.getElementById('Grade');
    var Semester=document.getElementById('Semester');

    var options= Dep.options;
    DepIndex = Dep.selectedIndex;
    Depvalue = options[DepIndex].value; //Console.log(Depvalue);

    var Gradeoptions=Grade.options;
    GradeIndex = Grade.selectedIndex;
    Gradevalue = Gradeoptions[GradeIndex].value; 

    var Semesteroptions=Semester.options;
    SemesterIndex = Semester.selectedIndex;
    Semestervalue = Semesteroptions[SemesterIndex].value;

    if(Depvalue=="컴공" && Gradevalue=="one" && Semestervalue=="one"){
        document.getElementById('output').innerHTML="아직 학과 진입 안함!";
    }
    else if(Depvalue=="컴공" && Gradevalue=="one" && Semestervalue=="two"){
        document.getElementById('output').innerHTML="아직 학과 진입 안함!";
    }  
    else if(Depvalue=="컴공" && Gradevalue=="two" && Semestervalue=="one"){
        document.getElementById('output').innerHTML="2학년 1학기 : 수치해석(MSC), 확률및통계(MSC), 논리회로, 객체지향프로그래밍, 인터넷프로그래밍 중 4개";
    }
    else if(Depvalue=="컴공" && Gradevalue=="two" && Semestervalue=="two"){
        document.getElementById('output').innerHTML="2학년 2학기 : 자료구조, 이산수학, 데이터통신, 어셈블리언어, 통계학, 멀티미디어 응용수학 중 4개";
    }
    else if(Depvalue=="컴공" && Gradevalue=="three" && Semestervalue=="one"){
        document.getElementById('output').innerHTML="3학년 1학기 : 알고리즘 분석, 컴퓨터 구조, 컴퓨터네트워크, 프로그래밍언어론, HCI원도우즈프로그래밍 중 4개";
    }  
    else if(Depvalue=="컴공" && Gradevalue=="three" && Semestervalue=="two"){
        document.getElementById('output').innerHTML="3학년 2학기 : 운영체제, 컴퓨터그래픽스, 오토마타, 기초데이터베이스, 네트워크프로그래밍, 디지털시스템설계 중 4개";
    }  
    else if(Depvalue=="컴공" && Gradevalue=="four" && Semestervalue=="one"){
        document.getElementById('output').innerHTML="4학년 1학기 : AIML/프로젝트(1)(2), 소프트웨어공학, 비디오이미지프로세싱, 응용데이터베이스, 네트워크보안, 인공지능, 시스템프로그래밍, 슈퍼컴퓨팅 중 4개";
    }  
    else if(Depvalue=="컴공" && Gradevalue=="four" && Semestervalue=="two"){
        document.getElementById('output').innerHTML="4학년 2학기 : AIML/프로젝트(1)(2), 컴파일러, 정보검색, 기계학습임베디드시스템 및 실험, 무선이동네트워크 중 4개";
    }
    
    // 화학공학과
    if(Depvalue=="화공"){
        document.getElementById('output').innerHTML="전공 학점 12학점 이상. 12학점 이상 취득시 가산점 부여<br> 실험 또는 창의적 설계(4학년) : 평점 + (0.1 * 1과목당)<br>화학공학 소속 전공 12학점 이상 : 평점 + (0.03 * 초과 1학점당)"
    }
}
