function result(marks){
 let point = 0;
 for(mark of marks){
    if(mark >=60){
       continue;
    }else if(mark<58){
        console.log("راسب");
        return;
    }
    point += (60 - mark);
    if(point>2){
        console.log("راسب")
        return
    }
 }
 if(point===0){
    console.log("ناجح بدون مساعدة")
 }else if(point===1){
    console.log("ناجح مع مساعدة علامة")
 }else if(point===2){
    console.log("ناجح بمساعدة علامتين")
 }else{
    console.log("راسب")
 }
}
result([60,60,60,60])
result([60,60,60,59])
result([60,60,60,58])
result([60,60,59,59])
result([60,59,59,59])

function older(year1,month1, day1 ,year2 ,month2, day2){
    totalDay1 = year1*360 + month1*30 +day1;
    totalDay2 = year2*360+ month2*30 +day2;
     
    if(totalDay1<totalDay2){
        console.log("الاول هو الاكبر عمرا")
    }else if(totalDay2<totalDay1){
        console.log("الثاني هو الاكبر عمرا")
    }else{
        console.log("متساويان في العمر")
    }
}

older(10, 5, 1990, 20, 5, 1990);  
older(15, 3, 1985, 15, 3, 1985);  
older(1, 1, 2000, 30, 12, 1999);


