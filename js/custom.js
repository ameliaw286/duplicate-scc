// Format SatSchedule
class scheduleEvent {
    constructor(title, start, end, track, desc) {
        this.title = title;
        this.startTime = start;
        this.desc = desc;
        
        if (track == undefined){
          this.end = null
          this.track = end;
        }
        else{
          this.endTime = end;
          this.track = track;
        }
        
    }

}

var monday = [];
var tuesday = [];

// track = {main, ws} where ws is workshop
monday.push(new scheduleEvent("Introduction", "09:30", "10:00", "main", " "));
monday.push(new scheduleEvent("Programming workshop 1: Python", "10:00", "12:30", "main", "Introduction of the basics of Python programming"));
monday.push(new scheduleEvent("Sharing session with external organisation", "12:30", "13:00", "main", " "));
monday.push(new scheduleEvent("Lunch", "13:00", "14:30", "main", " "));
monday.push(new scheduleEvent("Programming workshop 2: Prompt Engineering Principles", "14:30", "17:00", "main", "Explore prompt engineering principles, a low-tech approach to AI"));
monday.push(new scheduleEvent("Fireside chat with NUS Computing Students", "17:00", "17:30", "main", "Current WiT members will share their journey that led them to pursue Computing and their experience on being a woman in Computing"));

tuesday.push(new scheduleEvent("Programming workshop 3: Langchain Framework with Python", "09:30", "11:30", "main", "Practical session emphasising the Langchain Framework"));
tuesday.push(new scheduleEvent("Lunch", "11:30", "13:00", "main", " "));
tuesday.push(new scheduleEvent("Programming workshop 4: Simple Chatbot using OpenAI API in IDLE", "13:00", "16:30", "main", "Craft a Python-based chatbot, which will be showcased towards the end, with prizes for Most Useful/Most Out-of-box"));
tuesday.push(new scheduleEvent("Talk from external speakers", "16:30", "17:00", "main", " "));
tuesday.push(new scheduleEvent("Closing Address", "17:00", "17:30", "main", " "));

monday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
tuesday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th></th><th>Activity</th><th></th><th>Description</th></tr>';
monday.forEach(function(ev, index){
  if (index == 0  || monday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    /* if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    } */

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != monday.length-1 && ev.startTime == monday[index+1].startTime){
        str += '<th>';
        str+=monday[index+1].startTime
        if(monday[index+1].endTime){
        str +=  '<br />|<br />' + monday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + monday[index+1].title+ '</td>';
    }
  else {
  str +='<th></th>';
  str += '<td>' + ev.desc + '</td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("mondayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Activity</th><th></th><th>Description</th></tr>';
tuesday.forEach(function(ev, index){
  if (index == 0  || (tuesday[index-1].startTime != ev.startTime || tuesday[index-1].track == ev.track) ){     
    str += '<tr>';
    /*if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    } */
    
    

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
    if (index != tuesday.length-1 && ev.startTime == tuesday[index+1].startTime && ev.track != tuesday[index+1].track){
        str += '<th>';
        str+=tuesday[index+1].startTime
        if(tuesday[index+1].endTime){
        str +=  '<br />|<br />' + tuesday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + tuesday[index+1].title+ '</td>';
    
  }
  else{
  str +='<th></th>';
  str += '<td>' + ev.desc + '</td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("tuesdayContainer").innerHTML = str;