
function kulikanitham(){

    var num1 = parseFloat(document.getElementById('len-ft').value) || 0;
    var num2 = parseFloat(document.getElementById('len-inch').value) || 0;
    var num3 = parseFloat(document.getElementById('wid-ft').value) || 0;
    var num4 = parseFloat(document.getElementById('wid-inch').value) || 0;
    if (isNaN(num1) || isNaN(num2)  || isNaN(num3)  || isNaN(num4)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
        return;
     }
    // Add the numbers
    var kuli = (((num1*12) + num2) * ((num3*12)+num4)) / 1156;
    // Display the result
    document.getElementById('kuliss').innerHTML =  parseInt(kuli);



    var kuli_karupam=parseInt(kuli)%8;
    const karupam=['கழுதைகற்பம்','கருடகற்பம்','புறாக்கற்பம்','சிம்மகர்பம்','நாய்கற்பம்','பசுகற்பம்','காக்கைகற்பம்','யானைகற்பம்'];
    document.getElementById('karupam').innerHTML = karupam[kuli_karupam];

      
      
    var varavu=(parseInt(kuli)*8)%12;
    if (varavu==0) {
        document.getElementById('varavu').innerHTML = 'The sum is: 12';
      }
    else{
        document.getElementById('varavu').innerHTML = 'The sum is: ' + parseInt(varavu);
      }
     
     
    var kuli_selavu=(parseInt(kuli)*9)%10;
    const selavu=['உயர்நிலை','நாசம்','தீயால்பயம்','நன்மை','புத்திரவிருத்தி','விரயம்','ஆரோக்கியம்','வருமை','திருமகள் அருள்','புத்திரதோசம்',];
    document.getElementById('selavu').innerHTML = selavu[kuli_selavu];
      
    var kuli_yoni=(parseInt(kuli)*3)%8;
    const yoni=['முயல்','கருடன்','பூனை','சிங்கம்','நாய்','பாம்பு','எலி','யானை'];
    document.getElementById('yoni').innerHTML = yoni[kuli_yoni];
        
    var nakstram=(parseInt(kuli)*8)%27;
    const nakshra=['ரேவதி','அசுவினி','பரணி','கிருத்திகை','ரோகிணி','மிருகசீரிடம்','திருவாதிரை','புனர்பூசம்','பூசம்','ஆயில்யம்',
                    'மகம்','பூரம்','உத்திரம்','ஹஸ்தம்','சித்திரை','சுவாதி','விசாகம்','அனுஷம்','கேட்டை',
                    'மூலம்','பூராடம்','உத்திராடம்','திருவோணம்','அவிட்டம்','சதயம்','பூரட்டாதி','உத்திரட்டாதி']
    document.getElementById('nakstram').innerHTML = nakshra[nakstram];
           
    var kuli_varam=(parseInt(kuli)*9)%7;
    const varam=['சனி','ஞாயிறு','திங்கள்','செவ்வாய்','புதன்','வியாழன்','வெள்ளி'];
    document.getElementById('varam').innerHTML = varam[kuli_varam]
    
    var kuli_amsam=(parseInt(kuli)*4)%9;
    const amsam=['கேது அம்சம்','தடகர அம்சம்','சோமகரன அம்சம்','சக்தி அம்சம்','புஷ்கர அம்சம்','குரு அம்சம்','சுக்கிர அம்சம்','ராகு அம்சம்'];
    document.getElementById('amsam').innerHTML = amsam[kuli_amsam]
       
    var kuli_thiti=(parseInt(kuli)*9)%15;
    const thiti=['அமாவாசை/பௌர்ணமி','பிரதமை','துவிதியை','திருதியை','சதுர்த்தி','பஞ்சமி','சஷ்டி',
                'சப்தமி','அஷ்டமி','நவமி','தசமி','ஏகாதசி','துவாதசி','திரயோதசி','சதுர்த்தசி']
    document.getElementById('k_thiti').innerHTML = thiti[kuli_thiti];
    
        
    var kuli_vamsam=(parseInt(kuli))%4;
    const vamsam=['மற்றவைய வருணம்','பிரம்ம	வருணம்','க்ஷத்ரிய வருணம்','வைஷ்ய வருணம்']
    document.getElementById('vamsam').innerHTML = vamsam[kuli_vamsam];
        
    var kuli_rasi=(parseInt(kuli)*4)%12;
    const rasi=['மீனம்','மேஷம்','ரிஷபம்','மிதுனம்','கடகம்','சிம்மம்','கன்னி','துலாம்','விருச்சிகம்','தனுசு','மகரம்','கும்பம்']
    document.getElementById('rasi').innerHTML = rasi[kuli_rasi];
        
    var vayadu=(parseInt(kuli)*27)%100;
    if (vayadu>=45) {
        document.getElementById('age').innerHTML = parseInt(vayadu)*2;
    }
    else{
        document.getElementById('age').innerHTML = parseInt(vayadu);
    }
  }




function opentab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function nalgai(){
  date1=document.getElementById('date1').value
  a_date=date1.split("-")
  time1=document.getElementById('time1').value
  a_time=time1.split(":")

  date2=document.getElementById('date2').value
  b_date=date2.split("-")
  time2=document.getElementById('time2').value
  b_time=time2.split(":")

  var endTime = new Date(parseInt(a_date[0]),parseInt(a_date[1]),parseInt(a_date[2]),parseInt(a_time[0]),parseInt(a_time[1])) / 1000;
  var elapsed = new Date(parseInt(b_date[0]),parseInt(b_date[1]),parseInt(b_date[2]),parseInt(b_time[0]),parseInt(b_time[1])) / 1000;
  var totalTime =  (elapsed-endTime)/60;
  var total_hours= parseInt(totalTime/60);
  var total_Min= parseInt(totalTime%60);
  var naali= parseInt(totalTime/24);
  var vinadi= parseInt((parseInt(totalTime%24)*60)/24);
  document.getElementById('totl').innerHTML =  "total time(HH-MM):  "+parseInt(total_hours)+"-"+parseInt(total_Min)
  document.getElementById('totlh').innerHTML =  "மொத்த நேரம்(நாழிகை-வினாடி):  "+parseInt(naali)+"-"+parseInt(vinadi)

}


function numer(){
  var total=0;
  var name=document.getElementById('name').value
  for(i=0; i<name.length; i++){
    if(name[i]=='a'||name[i]=='A'||name[i]=='j'||name[i]=='J'||name[i]=='I'||name[i]=='i'||name[i]=='y'||name[i]=='Y'||name[i]=='Q'||name[i]=='q'){
      total=total+1
    }
    else if(name[i]=='B'||name[i]=='b'||name[i]=='K'||name[i]=='k'||name[i]=='R'||name[i]=='r'){
      total=total+2
    }
    else if(name[i]=='S'||name[i]=='s'||name[i]=='G'||name[i]=='g'||name[i]=='C'||name[i]=='c'||name[i]=='L'||name[i]=='l'){
     total=total+3
   }
   else if(name[i]=='D'||name[i]=='d'||name[i]=='M'||name[i]=='m'||name[i]=='T'||name[i]=='t'){
     total=total+4
   }
   else if(name[i]=='H'||name[i]=='h'||name[i]=='E'||name[i]=='e'||name[i]=='X'||name[i]=='x'||name[i]=='N'||name[i]=='n'){
     total=total+5
   }
   else if(name[i]=='U'||name[i]=='u'||name[i]=='V'||name[i]=='v'||name[i]=='W'||name[i]=='w'){
     total=total+6
   }
   else if(name[i]=='O'||name[i]=='o'||name[i]=='Z'||name[i]=='z'){
     total=total+7
   }
   else if(name[i]=='F'||name[i]=='f'||name[i]=='P'||name[i]=='p'){
     total=total+8
   }

  }
    document.getElementById('total').innerHTML =  "Your Numerology Number is:"+parseInt(total)
}










function kadigaraprasanam(){
  const udhayam=['mesham','rishabam','midhunam','kadagam','simam','kani','thulam','viruchigam','dhanush','magaram','kumbam','meenam']
  
  time=document.getElementById('time').value

  var d = new Date();
  var h=d.getHours();
  m=d.getMinutes();

  if(time==""){
  hour=h%12;  
  minutes=parseInt(m/5);
}
else{
  for(i=0;i<12;i++){
    document.getElementById(udhayam[i]).innerHTML=" ";
  }
  a=time.split(":")
  hour=parseInt(a[0])%12;
  minutes=parseInt(parseInt(a[1])/5);
}
 
  document.getElementById(udhayam[hour]).innerHTML = "உ";
  if(hour!=minutes){
  document.getElementById(udhayam[minutes]).innerHTML = "ஆ";
  } 
  else{
    document.getElementById(udhayam[minutes]).innerHTML = "உ"+"<br>"+"ஆ";
  } 
  }
function thiyagium(){
  adi_andam=document.getElementById('aadi_andam').value
  nali=adi_andam.split('-')
  if(nali[0]!=""){
  if(nali.length==2){
  vinadi=(parseInt(nali[0])*60)+parseInt(nali[1])
  }
  else{
    vinadi=(parseInt(nali[0])*60)
  }
}
else{
  vinadi=0
}
  nakshatra=document.getElementById('naksatram').value
  const nakshra=['அசுவினி','பரணி','கிருத்திகை','ரோகிணி','மிருகசீரிடம்','திருவாதிரை','புனர்பூசம்','பூசம்','ஆயில்யம்',
    'மகம்','பூரம்','உத்திரம்','ஹஸ்தம்','சித்திரை','சுவாதி','விசாகம்','அனுஷம்','கேட்டை',
    'மூலம்','பூராடம்','உத்திராடம்','திருவோணம்','அவிட்டம்','சதயம்','பூரட்டாதி','உத்திரட்டாதி','ரேவதி']
    for(i=0;i<nakshra.length;i++){
      if(nakshra[i]==nakshatra){
        thiyagium_time=['5-6','2-5','1-2','2-3','7-30','7-20','1-2','1-3','8-15',
          '1-2','1-3','3-10','11-30','14-15','7-30','7-30','1-6','7-30',
          '1-3','2-5','1-3','1-6','1-6','3-10','4-15','2-5','1-2']
        visha_kalam=thiyagium_time[i].split('-')
        time=(vinadi/parseInt(visha_kalam[1]))*parseInt(visha_kalam[0])
        t_naligai=parseInt(time/60)
        t_vinadi=parseInt(time)%60
        document.getElementById('thiyagium_start').innerHTML =  "தியாஜ்ஜியம் ஆரம்ப காலம்: "+t_naligai+"-"+t_vinadi
        document.getElementById('thiyagium_end').innerHTML =  "தியாஜ்ஜியம் முடிவு காலம்: "+(t_naligai+4)+"-"+t_vinadi
      break
      }

      }
}





function thiti_thiyagium(){
  adi_andam=document.getElementById('tt-aadi_andam').value
  nali=adi_andam.split('-')
  if(nali[0]!=""){
  if(nali.length==2){
  vinadi=(parseInt(nali[0])*60)+parseInt(nali[1])
  }
  else{
    vinadi=(parseInt(nali[0])*60)
  }
}
else{
  vinadi=0
} 
      thithi=document.getElementById('thiti').value
      const thiti=['பிரதமை','துவிதியை','திருதியை','சதுர்த்தி','பஞ்சமி','சஷ்டி',
        'சப்தமி','அஷ்டமி','நவமி','தசமி','ஏகாதசி','துவாதசி','திரயோதசி','சதுர்த்தசி','பௌர்ணமி','அமாவாசை']
        for(i=0;i<thiti.length;i++){
          if(thiti[i]==thithi){
            thiyagium_time=['2-5','1-5','11-12','1-12','9-10','9-10','31-60','1-3',
              '1-2','11-20','1-60','1-4','13-30','7-60','29-60','1-10']
            visha_kalam=thiyagium_time[i].split('-')
            time=(vinadi/parseInt(visha_kalam[1]))*parseInt(visha_kalam[0])
            t_naligai=parseInt(time/60)
            t_vinadi=parseInt(time)%60
            document.getElementById('tt_thiyagium_start').innerHTML =  "தியாஜ்ஜியம் ஆரம்ப காலம்: "+t_naligai+"-"+t_vinadi
            document.getElementById('tt_thiyagium_end').innerHTML =  "தியாஜ்ஜியம் முடிவு காலம்: "+(t_naligai+4)+"-"+t_vinadi
          break
          }
    
          }
}
function karma_naKshatra(){
    const nakshra=['அசுவினி','பரணி','கிருத்திகை','ரோகிணி','மிருகசீரிடம்','திருவாதிரை','புனர்பூசம்','பூசம்','ஆயில்யம்',
      'மகம்','பூரம்','உத்திரம்','ஹஸ்தம்','சித்திரை','சுவாதி','விசாகம்','அனுஷம்','கேட்டை',
      'மூலம்','பூராடம்','உத்திராடம்','திருவோணம்','அவிட்டம்','சதயம்','பூரட்டாதி','உத்திரட்டாதி','ரேவதி']
      
      const rasi=['மேஷம்','ரிஷபம்','மிதுனம்','கடகம்','சிம்மம்','கன்னி','துலாம்','விருச்சிகம்','தனுசு','மகரம்','கும்பம்','மீனம்']
   
      rasi1=document.getElementById('rasi1').value
      rasi2=document.getElementById('rasi2').value


      for (i = 0; i < rasi.length; i++) {
        if(rasi1==rasi[i]){
          rahu_rasi_pos=i*30*60;
          break;
        }
      }
      for (i = 0; i < rasi.length; i++) {
        if(rasi2==rasi[i]){
          chandra_rasi_pos=i*30*60;
          break;
        }
      }
    rahu=document.getElementById('ktext1').value
    rahuspudam=rahu.split("-")
    chandran=document.getElementById('ktext2').value
    chandraspudam=chandran.split("-")

    karmanakshatra= (chandra_rasi_pos+(parseInt(chandraspudam[0])*60+parseInt(chandraspudam[1])))-(rahu_rasi_pos+(parseInt(rahuspudam[0])*60+parseInt(rahuspudam[1])))
    if(karmanakshatra>0){
      a= parseInt(((rahu_rasi_pos+(parseInt(rahuspudam[0])*60+parseInt(rahuspudam[1])))+(karmanakshatra/2))/800);
      padam= Math.ceil((((rahu_rasi_pos+(parseInt(rahuspudam[0])*60+parseInt(rahuspudam[1])))+(karmanakshatra/2))%800)/200);
    }
    else{
      a=parseInt(((rahu_rasi_pos+(parseInt(rahuspudam[0])*60+parseInt(rahuspudam[1])))+(21600+karmanakshatra)/2)/800);
     padam= Math.ceil((((rahu_rasi_pos+(parseInt(rahuspudam[0])*60+parseInt(rahuspudam[1])))+(karmanakshatra/2))%800)/200);
    }
    document.getElementById('Karmanak').innerHTML = nakshra[a]+"-"+padam;
  }


/*
  for(i=0;i<13;i++){
    a=document.getElementById(udhayam[i]).value;
    b=document.getElementById(udhayam[i]).value;
    if(a!=" "){
      document.getElementById(udhayam[i]).value=" ";
    }
    if(b!=" "){
      document.getElementById(udhayam[i]).value=" ";
    }
  }*/
