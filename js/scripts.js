//스킬 포인트 definition
var PointsAvail = 19;
//Row object
var objectRow11 = 0;
var objectRow12 = 0;
var objectRow13 = 0;
var objectRow14 = 0;
var objectRow15 = 0;
var objectRow16 = 0;
var objectRow21 = 0;
var objectRow22 = 0;
var objectRow23 = 0;
var objectRow24 = 0;
var objectRow25 = 0;
var objectRow26 = 0;
var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16 ;
var inv2 = objectRow21+objectRow22+objectRow23+objectRow24+objectRow25;


function ulti10check(){
    if(objectRow11+objectRow12+objectRow13+objectRow14+objectRow15 < 10 && objectRow16 == 1){
        PointsAvail += 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow16 = 0;
        document.getElementById("Row16").innerHTML = objectRow16;
        document.getElementById("rw1-6").style.borderColor = 'white';
        document.getElementById("rw1-6").style.borderWidth = '1px';
    }
}

function ulti10check2(){
    if(objectRow21+objectRow22+objectRow23+objectRow24+objectRow25 < 10 && objectRow26 == 1){
        PointsAvail += 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow26 = 0;
        document.getElementById("Row26").innerHTML = objectRow26;
        document.getElementById("rw2-6").style.borderColor = 'white';
        document.getElementById("rw2-6").style.borderWidth = '1px';
    }
}

function selfwhite(self){
    self.style.borderColor='white';
    self.style.borderWidth='1px';
    PointsAvail += 1;
    document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
    if(self.id=="rw1-1"){
        objectRow11 -= 1;
        document.getElementById("Row11").innerHTML = objectRow11;
    } else if(self.id=="rw1-2"){
        objectRow12 -= 1;
        document.getElementById("Row12").innerHTML = objectRow12;
    } else if(self.id=="rw1-3"){
        objectRow13 -= 1;
        document.getElementById("Row13").innerHTML = objectRow13;
    } else if(self.id=="rw1-4"){
        objectRow14 -= 1;
        document.getElementById("Row14").innerHTML = objectRow14;
    } else if(self.id=="rw1-5"){
        objectRow15 -= 1;
        document.getElementById("Row15").innerHTML = objectRow15;
    } else if(self.id=="rw1-6"){
        objectRow16 -= 1;
        document.getElementById("Row16").innerHTML = objectRow16;
    } else if(self.id=="rw2-1"){
        objectRow21 -= 1;
        document.getElementById("Row21").innerHTML = objectRow21;
    } else if(self.id=="rw2-2"){
        objectRow22 -= 1;
        document.getElementById("Row22").innerHTML = objectRow22;
    } else if(self.id=="rw2-3"){
        objectRow23 -= 1;
        document.getElementById("Row23").innerHTML = objectRow23;
    } else if(self.id=="rw2-4"){
        objectRow24 -= 1;
        document.getElementById("Row24").innerHTML = objectRow24;
    } else if(self.id=="rw2-5"){
        objectRow25 -= 1;
        document.getElementById("Row25").innerHTML = objectRow25;
    } else if(self.id=="rw2-6"){
        objectRow26 -= 1;
        document.getElementById("Row26").innerHTML = objectRow26;
    }
}

function selec(x,z){
    //alert(z.id);
    //alert(x);
    //alert(z.getElementById("rw1-2"));
    if(x==1){
        selfwhite(z);
        ulti10check();
        ulti10check2();
        //alert(objectRow21+objectRow22+objectRow23+objectRow24+objectRow25);
        return;
    }else if (x==2){
        return;
    }else{ 
        //alert(z.id);
        if(z.id=="rw1-1"){
            SelDesel(z);
        } else if(z.id=="rw1-2"){
            SelDesel2(z);
        } else if(z.id=="rw1-3"){
            SelDesel3(z);
        } else if(z.id=="rw1-4"){
            SelDesel4(z);
        } else if(z.id=="rw1-5"){
            SelDesel5(z);
        } else if(z.id=="rw1-6"){
            SelDesel6(z);
        } else if(z.id=="rw2-1"){
            SelDesel7(z);
        } else if(z.id=="rw2-2"){
            SelDesel8(z);
        } else if(z.id=="rw2-3"){
            SelDesel9(z);
        } else if(z.id=="rw2-4"){
            SelDesel10(z);
        } else if(z.id=="rw2-5"){
            SelDesel11(z);
        } else if(z.id=="rw2-6"){
            SelDesel12(z);
        }
    }
}

function actskill(x1){
    var samename = document.getElementsByName(x1.name);
    var i=1;
    //alert(samename.length);
    if(samename[0].style.borderWidth == "3px"){
        for (var i=1; i< samename.length; i++){
            if (samename[i].style.borderWidth == "3px"){
                if(samename[i].id=="rw1-1"){               
                    SelDesel(samename[i]);
                 } else if(samename[i].id=="rw1-2"){
                     SelDesel2(samename[i]);
                 } else if(samename[i].id=="rw1-3"){
                     SelDesel3(samename[i]);
                 } else if(samename[i].id=="rw1-4"){
                     SelDesel4(samename[i]);
                 } else if(samename[i].id=="rw1-5"){
                     SelDesel5(samename[i]);
                 } else if(samename[i].id=="rw1-6"){
                     SelDesel6(samename[i]);
                 } else if(samename[i].id=="rw2-1"){
                     SelDesel7(samename[i]);
                 } else if(samename[i].id=="rw2-2"){
                     SelDesel8(samename[i]);
                 } else if(samename[i].id=="rw2-3"){
                     SelDesel9(samename[i]);
                 } else if(samename[i].id=="rw2-4"){
                     SelDesel10(samename[i]);
                 } else if(samename[i].id=="rw2-5"){
                     SelDesel11(samename[i]);
                 } else if(samename[i].id=="rw2-6"){
                     SelDesel12(samename[i]);
                 }
            }
        }
        return(3);
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(3);
    }else {
            //alert("d");
        return(3); 
    }
}   
    //alert(objectRow11+objectRow12+objectRow13+objectRow14+objectRow15);


function modskill1(x1){
    var samename = document.getElementsByName(x1.name);
    var i=2;
    //alert(samename.length);
    if(samename[1].style.borderWidth == "3px") {    //자신이 칠해져있을때
        for (var i=2; i< samename.length; i++){     //자신 아래로 연결되있는 스킬에 대해
            if (samename[i].style.borderWidth == "3px"){    //연결 스킬이 칠해져있을때
                //samename[i].style.borderColor = 'white'     //비활성화하고
                //samename[i].style.borderWidth = '1px'
                //PointsAvail += 1;                           //포인트를 돌려받는다
                //document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
                //alert(samename[i].id);
                if(samename[i].id=="rw1-1"){                //그 스킬의 행 위치에 따라서
                    //objectRow11 -= 1;  
                    //document.getElementById("Row11").innerHTML = objectRow11;
                    SelDesel(samename[i]);
                } else if(samename[i].id=="rw1-2"){
                    //objectRow12 -= 1;
                    //document.getElementById("Row12").innerHTML = objectRow12;
                    SelDesel2(samename[i]);
                } else if(samename[i].id=="rw1-3"){
                    //objectRow13 -= 1;
                    //document.getElementById("Row13").innerHTML = objectRow13;
                    SelDesel3(samename[i]);
                } else if(samename[i].id=="rw1-4"){
                    //objectRow14 -= 1;
                    //document.getElementById("Row14").innerHTML = objectRow14;
                    SelDesel4(samename[i]);
                } else if(samename[i].id=="rw1-5"){
                    //objectRow15 -= 1;
                    //document.getElementById("Row15").innerHTML = objectRow15;
                    SelDesel5(samename[i]);
                } else if(samename[i].id=="rw1-6"){
                    //objectRow15 -= 1;
                    //document.getElementById("Row15").innerHTML = objectRow15;
                    SelDesel6(samename[i]);
                } else if(samename[i].id=="rw2-1"){
                    //objectRow21 -= 1;
                    //document.getElementById("Row21").innerHTML = objectRow21;
                    SelDesel7(samename[i]);
                } else if(samename[i].id=="rw2-2"){
                    //objectRow22 -= 1;
                    //document.getElementById("Row22").innerHTML = objectRow22;
                    SelDesel8(samename[i]);
                } else if(samename[i].id=="rw2-3"){
                    //objectRow23 -= 1;
                    //document.getElementById("Row23").innerHTML = objectRow23;
                    SelDesel9(samename[i]);
                } else if(samename[i].id=="rw2-4"){
                    //objectRow24 -= 1;
                    //document.getElementById("Row24").innerHTML = objectRow24;
                    SelDesel10(samename[i]);
                } else if(samename[i].id=="rw2-5"){
                    //objectRow25 -= 1;
                    //document.getElementById("Row25").innerHTML = objectRow25;
                    SelDesel11(samename[i]);
                } else if(samename[i].id=="rw2-6"){
                    //objectRow25 -= 1;
                    //document.getElementById("Row25").innerHTML = objectRow25;
                    SelDesel12(samename[i]);
                }
            } 
            //alert("a");
        }
        return(3);                  //3으로 리턴
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(2);
    } else {
        //alert("d");
        return(3); 
    }
}

function modskill2(x2){
    var samename = document.getElementsByName(x2.name);
    var i=3;
    //alert(samename.length);
    if(samename[2].style.borderWidth == "3px") {
        for (var i=3; i< samename.length; i++){
            if (samename[i].style.borderWidth == "3px"){        //mod skills after this
                if(samename[i].id=="rw1-1"){                //그 스킬의 행 위치에 따라서
                    SelDesel(samename[i]);
                 } else if(samename[i].id=="rw1-2"){
                     SelDesel2(samename[i]);
                 } else if(samename[i].id=="rw1-3"){
                     SelDesel3(samename[i]);
                 } else if(samename[i].id=="rw1-4"){
                     SelDesel4(samename[i]);
                 } else if(samename[i].id=="rw1-5"){
                     SelDesel5(samename[i]);
                 } else if(samename[i].id=="rw1-6"){
                     SelDesel6(samename[i]);
                 } else if(samename[i].id=="rw2-1"){
                     SelDesel7(samename[i]);
                 } else if(samename[i].id=="rw2-2"){
                     SelDesel8(samename[i]);
                 } else if(samename[i].id=="rw2-3"){
                     SelDesel9(samename[i]);
                 } else if(samename[i].id=="rw2-4"){
                     SelDesel10(samename[i]);
                 } else if(samename[i].id=="rw2-5"){
                     SelDesel11(samename[i]);
                 } else if(samename[i].id=="rw2-6"){
                     SelDesel12(samename[i]);
                 }
            } 
            //alert("a");
        }
        return(3);
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(2);
    } else if (samename[1].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else {
        //alert("d");
        return(3); 
    }
}
function modskill3(x2){
    var samename = document.getElementsByName(x2.name);
    var i=4;
    //alert(samename.length);
    if(samename[3].style.borderWidth == "3px") {
        for (var i=4; i< samename.length; i++){
            if (samename[i].style.borderWidth == "3px"){        //mod skills after this
                if(samename[i].id=="rw1-1"){                //그 스킬의 행 위치에 따라서
                    SelDesel(samename[i]);
                 } else if(samename[i].id=="rw1-2"){
                     SelDesel2(samename[i]);
                 } else if(samename[i].id=="rw1-3"){
                     SelDesel3(samename[i]);
                 } else if(samename[i].id=="rw1-4"){
                     SelDesel4(samename[i]);
                 } else if(samename[i].id=="rw1-5"){
                     SelDesel5(samename[i]);
                 } else if(samename[i].id=="rw1-6"){
                     SelDesel6(samename[i]);
                 } else if(samename[i].id=="rw2-1"){
                     SelDesel7(samename[i]);
                 } else if(samename[i].id=="rw2-2"){
                     SelDesel8(samename[i]);
                 } else if(samename[i].id=="rw2-3"){
                     SelDesel9(samename[i]);
                 } else if(samename[i].id=="rw2-4"){
                     SelDesel10(samename[i]);
                 } else if(samename[i].id=="rw2-5"){
                     SelDesel11(samename[i]);
                 } else if(samename[i].id=="rw2-6"){
                     SelDesel12(samename[i]);
                 }
            } 
            //alert("a");
        }
        return(3);
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(2);
    } else if (samename[1].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else if (samename[2].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else {
        //alert("d");
        return(3); 
    }
}
function modskill4(x2){
    var samename = document.getElementsByName(x2.name);
    var i=5;
    //alert(samename.length);
    if(samename[4].style.borderWidth == "3px") {
        for (var i=5; i< samename.length; i++){
            if (samename[i].style.borderWidth == "3px"){        //mod skills after this
                if(samename[i].id=="rw1-1"){                //그 스킬의 행 위치에 따라서
                    SelDesel(samename[i]);
                 } else if(samename[i].id=="rw1-2"){
                     SelDesel2(samename[i]);
                 } else if(samename[i].id=="rw1-3"){
                     SelDesel3(samename[i]);
                 } else if(samename[i].id=="rw1-4"){
                     SelDesel4(samename[i]);
                 } else if(samename[i].id=="rw1-5"){
                     SelDesel5(samename[i]);
                 } else if(samename[i].id=="rw1-6"){
                     SelDesel6(samename[i]);
                 } else if(samename[i].id=="rw2-1"){
                     SelDesel7(samename[i]);
                 } else if(samename[i].id=="rw2-2"){
                     SelDesel8(samename[i]);
                 } else if(samename[i].id=="rw2-3"){
                     SelDesel9(samename[i]);
                 } else if(samename[i].id=="rw2-4"){
                     SelDesel10(samename[i]);
                 } else if(samename[i].id=="rw2-5"){
                     SelDesel11(samename[i]);
                 } else if(samename[i].id=="rw2-6"){
                     SelDesel12(samename[i]);
                 }
            } 
            //alert("a");
        }
        return(3);
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(2);
    } else if (samename[1].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else if (samename[2].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else if (samename[3].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else {
        //alert("d");
        return(3); 
    }
}

function modskill5(x2){
    var samename = document.getElementsByName(x2.name);
    var i=6;
    //alert(samename.length);
    if(samename[5].style.borderWidth == "3px") {
        for (var i=6; i< samename.length; i++){
            if (samename[i].style.borderWidth == "3px"){        //mod skills after this
                if(samename[i].id=="rw1-1"){                //그 스킬의 행 위치에 따라서
                    SelDesel(samename[i]);
                 } else if(samename[i].id=="rw1-2"){
                     SelDesel2(samename[i]);
                 } else if(samename[i].id=="rw1-3"){
                     SelDesel3(samename[i]);
                 } else if(samename[i].id=="rw1-4"){
                     SelDesel4(samename[i]);
                 } else if(samename[i].id=="rw1-5"){
                     SelDesel5(samename[i]);
                 } else if(samename[i].id=="rw1-6"){
                     SelDesel6(samename[i]);
                 } else if(samename[i].id=="rw2-1"){
                     SelDesel7(samename[i]);
                 } else if(samename[i].id=="rw2-2"){
                     SelDesel8(samename[i]);
                 } else if(samename[i].id=="rw2-3"){
                     SelDesel9(samename[i]);
                 } else if(samename[i].id=="rw2-4"){
                     SelDesel10(samename[i]);
                 } else if(samename[i].id=="rw2-5"){
                     SelDesel11(samename[i]);
                 } else if(samename[i].id=="rw2-6"){
                     SelDesel12(samename[i]);
                 }
            } 
            //alert("a");
        }
        return(3);
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(2);
    } else if (samename[1].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else if (samename[2].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else if (samename[3].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else if (samename[4].style.borderWidth == "1px") {
        //alert("c");
        return(2);
    } else {
        //alert("d");
        return(3); 
    }
}

function modskillex(x1){
    var samename = document.getElementsByName(x1.name);
    var i=2;
    //alert(samename.length);
    if(samename[1].style.borderWidth == "3px") {
        return(3);
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(2);
    }
}
function modskillex2(x1){
    var samename = document.getElementsByName(x1.name);
    var i=2;
    //alert(samename.length);
    if(samename[2].style.borderWidth == "3px") {
        return(3);
    } else if (samename[0].style.borderWidth == "1px"){ //no point in active skill
        //alert("b");
        return(2);
    }
}

//스킬 포인트 투자 function. 스킬 활성화/비활성화
function SelDesel(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (self.style.borderColor === 'white') {    //스킬 투자 안됐을 시
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow11 += 1;
        document.getElementById("Row12").innerHTML = objectRow11;
        //alert(1);
        //alert(inv1);
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else if (self.style.borderWidth === '3px' && objectRow11 === 1 && objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16 > 0) {                                       //스킬 뺄때 다음줄 스킬이 있을 시
        var tempx = document.querySelectorAll('#rw1-2, #rw1-3, #rw1-4, #rw1-5, #rw1-6');
        for (var i=0; i< tempx.length; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
                ulti10check();
            } else {
                ulti10check();
            }
            objectRow12 = 0;
            document.getElementById("Row13").innerHTML = objectRow12;
            objectRow13 = 0;
            document.getElementById("Row13").innerHTML = objectRow13;
            objectRow14 = 0;
            document.getElementById("Row14").innerHTML = objectRow14;
            objectRow15 = 0;
            document.getElementById("Row15").innerHTML = objectRow15;
            objectRow16 = 0;
            document.getElementById("Row16").innerHTML = objectRow16;
        }
        selfwhite(self);
        ulti10check();
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
        //alert(objectRow11);
        //alert(2);
    } else if (self.style.borderWidth === '3px') {
        selfwhite(self);
        ulti10check();
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
        //alert(3);
    }
    ulti10check();
    var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
    document.getElementById("invested").innerHTML = inv1;
    //alert(objectRow11);
    //alert(4);
}

function SelDesel2(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow11 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow12 += 1;
        document.getElementById("Row12").innerHTML = objectRow12;
        //alert(objectRow12);
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else if (self.style.borderWidth === '3px' && objectRow12 === 1 && objectRow13 + objectRow14 + objectRow15 + objectRow16 > 0) {
        var tempx = document.querySelectorAll('#rw1-3, #rw1-4, #rw1-5, #rw1-6');
        for (var i=0; i< tempx.length; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;ulti10check();
            } else {
                ulti10check();
            }
            objectRow13 = 0;
            document.getElementById("Row13").innerHTML = objectRow13;
            objectRow14 = 0;
            document.getElementById("Row14").innerHTML = objectRow14;
            objectRow15 = 0;
            document.getElementById("Row15").innerHTML = objectRow15;
            objectRow16 = 0;
            document.getElementById("Row16").innerHTML = objectRow16;
        }
        selfwhite(self);
        //alert(objectRow12);
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else {
        //alert("d");
        selfwhite(self);
        ulti10check();
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    }
    var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
    document.getElementById("invested").innerHTML = inv1;
}
function SelDesel3(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow12 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow13 += 1;
        document.getElementById("Row13").innerHTML = objectRow13;
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else if (self.style.borderWidth === '3px' && objectRow13 === 1 && objectRow14 + objectRow15 + objectRow16 > 0) {        //자신이 칠해져있고, 내 줄에 나 하나 활성화, 내 아랫줄에 스킬 활성화 돼있는 경우,
        var tempx = document.querySelectorAll('#rw1-4, #rw1-5, #rw1-6');
        //alert(1);                                 
        for (var i=0; i< tempx.length; i++){            //내 아래 줄 모든 스킬에 대해
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';       //그 스킬이 칠해져있을때 비활성화
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;ulti10check();
            } else {
                ulti10check();
            }
            objectRow14 = 0;
            document.getElementById("Row14").innerHTML = objectRow14;
            objectRow15 = 0;
            document.getElementById("Row15").innerHTML = objectRow15;
            objectRow16 = 0;
            document.getElementById("Row16").innerHTML = objectRow16;
        }
        selfwhite(self);
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else {//alert(1);
        selfwhite(self);
        ulti10check();
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    }
    var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
    document.getElementById("invested").innerHTML = inv1;
}
function SelDesel4(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow13 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow14 += 1;
        document.getElementById("Row14").innerHTML = objectRow14;
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else if (self.style.borderWidth === '3px' && objectRow14 === 1 && objectRow15 + objectRow16 > 0) {
        var tempx = document.querySelectorAll('#rw1-5, #rw1-6');
        for (var i=0; i< tempx.length; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;ulti10check();
            } else {
                ulti10check();
            }
            objectRow15 = 0;
            document.getElementById("Row15").innerHTML = objectRow15;
            objectRow16 = 0;
            document.getElementById("Row16").innerHTML = objectRow16;
        }
        selfwhite(self);
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else {
        selfwhite(self);
        ulti10check();
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    }
    var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
    document.getElementById("invested").innerHTML = inv1;
}
function SelDesel5(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow14 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow15 += 1;
        document.getElementById("Row15").innerHTML = objectRow15;
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else if (self.style.borderWidth === '3px' && objectRow15 === 1 && objectRow16 > 0) {
        var tempx = document.querySelectorAll('#rw1-6');
        for (var i=0; i< tempx.length ; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
                ulti10check();
            } else {
                ulti10check();
            }
            objectRow16 = 0;
            document.getElementById("Row16").innerHTML = objectRow16;
        }
        selfwhite(self);
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else {
        selfwhite(self);
        ulti10check();
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    }
    var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
    document.getElementById("invested").innerHTML = inv1;
}
function SelDesel6(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow15 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (objectRow11+objectRow12+objectRow13+objectRow14+objectRow15 < 10) {
        tempAlert("스킬트리에 최소 10포인트 투자 필요",2000);
    } else if (objectRow16 === 0){
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow16 += 1;
        document.getElementById("Row16").innerHTML = objectRow16;
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    } else {
        selfwhite(self);
        var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
        document.getElementById("invested").innerHTML = inv1;
    }
}
//스킬 포인트 투자 function. 스킬 활성화/비활성화
//
//
//
//
//
//
//
//
//
//  스킬 트리 2
function SelDesel7(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (self.style.borderColor === 'white') {    //스킬 투자 안됐을 시
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow21 += 1;
        document.getElementById("Row22").innerHTML = objectRow21;
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else if (self.style.borderWidth === '3px' && objectRow21 === 1 && objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26 > 0) {                                          //스킬 뺄때 다음줄 스킬이 있을 시
        var tempx = document.querySelectorAll('#rw2-2, #rw2-3, #rw2-4, #rw2-5, #rw2-6');
        for (var i=0; i< tempx.length; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
            } else {
                ulti10check2();
            }
            objectRow22 = 0;
            document.getElementById("Row23").innerHTML = objectRow22;
            objectRow23 = 0;
            document.getElementById("Row23").innerHTML = objectRow23;
            objectRow24 = 0;
            document.getElementById("Row24").innerHTML = objectRow24;
            objectRow25 = 0;
            document.getElementById("Row25").innerHTML = objectRow25;
            objectRow26 = 0;
            document.getElementById("Row26").innerHTML = objectRow26;
        }
        selfwhite(self);
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else {
        selfwhite(self);
        ulti10check2();
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    }
    var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
    document.getElementById("invested2").innerHTML = inv2;
}

function SelDesel8(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow21 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow22 += 1;
        document.getElementById("Row22").innerHTML = objectRow22;
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else if (self.style.borderWidth === '3px' && objectRow22 === 1 && objectRow23 + objectRow24 + objectRow25 + objectRow26 > 0) {
        var tempx = document.querySelectorAll('#rw2-3, #rw2-4, #rw2-5, #rw2-6');
        for (var i=0; i< tempx.length; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
            } else {
                ulti10check2();
            }
            objectRow23 = 0;
            document.getElementById("Row23").innerHTML = objectRow23;
            objectRow24 = 0;
            document.getElementById("Row24").innerHTML = objectRow24;
            objectRow25 = 0;
            document.getElementById("Row25").innerHTML = objectRow25;
            objectRow26 = 0;
            document.getElementById("Row26").innerHTML = objectRow26;
        }
        selfwhite(self);
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else {
        selfwhite(self);
        ulti10check2();
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    }
    var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
    document.getElementById("invested2").innerHTML = inv2;
}
function SelDesel9(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow22 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow23 += 1;
        document.getElementById("Row23").innerHTML = objectRow23;
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else if (self.style.borderWidth === '3px' && objectRow23 === 1 && objectRow24 + objectRow25 + objectRow26 > 0) {
        var tempx = document.querySelectorAll('#rw2-4, #rw2-5, #rw2-6');
        for (var i=0; i< tempx.length; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
            } else {
                ulti10check2();
            }
            objectRow24 = 0;
            document.getElementById("Row24").innerHTML = objectRow24;
            objectRow25 = 0;
            document.getElementById("Row25").innerHTML = objectRow25;
            objectRow26 = 0;
            document.getElementById("Row26").innerHTML = objectRow26;
        }
        selfwhite(self);
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else {
        selfwhite(self);
        ulti10check2();
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    }
    var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
}
function SelDesel10(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow23 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow24 += 1;
        document.getElementById("Row24").innerHTML = objectRow24;
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else if (self.style.borderWidth === '3px' && objectRow24 === 1 && objectRow25 + objectRow26 > 0) {
        var tempx = document.querySelectorAll('#rw2-5, #rw2-6');
        for (var i=0; i< tempx.length; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
            } else {
                ulti10check2();
            }
            objectRow25 = 0;
            document.getElementById("Row25").innerHTML = objectRow25;
            objectRow26 = 0;
            document.getElementById("Row26").innerHTML = objectRow26;
        }
        selfwhite(self);
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else {
        selfwhite(self);
        ulti10check2();
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    }
    var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
    document.getElementById("invested2").innerHTML = inv2;
}
function SelDesel11(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow24 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (self.style.borderColor === 'white') {
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow25 += 1;
        document.getElementById("Row25").innerHTML = objectRow25;
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else if (self.style.borderWidth === '3px' && objectRow25 === 1 && objectRow26 > 0) {
        var tempx = document.querySelectorAll('#rw2-6');
        for (var i=0; i< tempx.length ; i++){
            if (tempx[i].style.borderWidth =="3px"){
                tempx[i].style.borderColor ='white';
                tempx[i].style.borderWidth = '1px';
                PointsAvail += 1;
                document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
            } else {
                ulti10check2();
            }
            objectRow26 = 0;
            document.getElementById("Row26").innerHTML = objectRow26;
        }
        selfwhite(self);
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else {
        selfwhite(self);
        ulti10check2();
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    }
    var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
}
function SelDesel12(self){
    if (self.style.borderColor === 'white' && PointsAvail === 0) {
        tempAlert("스킬포인트 부족",2000);
    } else if (objectRow25 === 0){
        tempAlert("윗줄에 스킬 투자 필요",2000);
    } else if (objectRow21+objectRow22+objectRow23+objectRow24+objectRow25 < 10) {
        tempAlert("스킬트리에 최소 10포인트 투자 필요",2000);
    } else if (objectRow26 === 0){
        self.style.borderColor='#F9D970';
        self.style.borderWidth='3px';
        PointsAvail -= 1;
        document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
        objectRow26 += 1;
        document.getElementById("Row26").innerHTML = objectRow26;
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    } else {
        selfwhite(self);
        var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
        document.getElementById("invested2").innerHTML = inv2;
    }
}
//스킬 포인트 리셋
function ResetAtt(imageformats){
    PointsAvail = 19;
    document.querySelectorAll("#points")[0].innerHTML = PointsAvail;
        document.querySelectorAll("#points")[1].innerHTML = PointsAvail;
    var imageformats = document.querySelectorAll('.image-container-active, .image-container, .image-container-ulti');
    for (var i=0; i < imageformats.length; i++){
        imageformats[i].style.borderColor = 'white';
        imageformats[i].style.borderWidth = '1px';
        if(imageformats[i].id=="rw1-1"){
            objectRow11 -= 1;
            document.getElementById("Row11").innerHTML = objectRow11;
        } else if(imageformats[i].id=="rw1-2"){
            objectRow12 -= 1;
            document.getElementById("Row12").innerHTML = objectRow12;
        } else if(imageformats[i].id=="rw1-3"){
            objectRow13 -= 1;
            document.getElementById("Row13").innerHTML = objectRow13;
        } else if(imageformats[i].id=="rw1-4"){
            objectRow14 -= 1;
            document.getElementById("Row14").innerHTML = objectRow14;
        } else if(imageformats[i].id=="rw1-5"){
            objectRow15 -= 1;
            document.getElementById("Row15").innerHTML = objectRow15;
        } else if(imageformats[i].id=="rw1-6"){
            objectRow15 -= 1;
            document.getElementById("Row16").innerHTML = objectRow16;
        } else if(imageformats[i].id=="rw2-1"){
            objectRow21 -= 1;
            document.getElementById("Row21").innerHTML = objectRow21;
        } else if(imageformats[i].id=="rw2-2"){
            objectRow22 -= 1;
            document.getElementById("Row22").innerHTML = objectRow22;
        } else if(imageformats[i].id=="rw2-3"){
            objectRow23 -= 1;
            document.getElementById("Row23").innerHTML = objectRow23;
        } else if(imageformats[i].id=="rw2-4"){
            objectRow24 -= 1;
            document.getElementById("Row24").innerHTML = objectRow24;
        } else if(imageformats[i].id=="rw2-5"){
            objectRow25 -= 1;
            document.getElementById("Row25").innerHTML = objectRow25;
        } else if(imageformats[i].id=="rw2-6"){
            objectRow25 -= 1;
            document.getElementById("Row26").innerHTML = objectRow26;
        }
    }
    var objectRow11 = 0;
    var objectRow12 = 0;
    var objectRow13 = 0;
    var objectRow14 = 0;
    var objectRow15 = 0;
    var objectRow16 = 0;
    var objectRow21 = 0;
    var objectRow22 = 0;
    var objectRow23 = 0;
    var objectRow24 = 0;
    var objectRow25 = 0;
    var objectRow26 = 0;
    var inv1 = objectRow11 + objectRow12 + objectRow13 + objectRow14 + objectRow15 + objectRow16;
    var inv2 = objectRow21 + objectRow22 + objectRow23 + objectRow24 + objectRow25 + objectRow26;
    document.getElementById("invested").innerHTML = inv1;
    document.getElementById("invested2").innerHTML = inv2;
}
function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","width:220px;position:fixed;top:180px; left:30px;color: rgb(196, 57, 57);background-color:black;border-radius: 6px;font:bold 15px;padding:10px;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}