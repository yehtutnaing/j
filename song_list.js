//song list
let All_song = [
   {
     name: "နှင်းဝေတဲ့ဆောင်:",
     path: src="https://drive.google.com/uc?export=download&id=100YLLPy4qRxbOl5nmSwKOkFMe077uX6r",
     img: src="https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
     singer: " jewel"
   },
   {
     name: "မ​တွေ့ဖြစ်ကြ​ပေမဲ့'",
     path: src="https://drive.google.com/uc?export=download&id=10-ZOtJp0LnL_mPMmuW9h7Y_YwE8oBmYF",
     img: src="https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
     singer: " jewel"
   },
   {
     name: "message",
     path: src="https://drive.google.com/uc?export=download&id=101w4lFFwosRPziTixmu43MYN51iVaA24",
     img: src="https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
     singer: " jewel"
   },
   {
     name: "တို့ေတာင္ေပၚေျမ",
     path: src="https://drive.google.com/uc?export=download&id=1076J_sy2sqohG6ptFtoqH8xauVS9fn1W",
     img: src="https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
     singer: " jewel"
   },
   {
     name: "နေရဲ့နေ့လရဲ့ည",
     path: src="https://drive.google.com/uc?export=download&id=109i9gH3BbhrNyHnmFpiniSpMGwAZcWKF",
     img: src="https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
     singer: " jewel"
   },
   {
    name: " ကြိုးကြာသံ",
    path: src="https://drive.google.com/uc?export=download&id=10NowUrnXV-b-51zZdTBja5nBalOsD55d",
    img: src="https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
    singer: " jewel"
   },
   {
    name: "ခ်စ္ႀကိဳက္ကြဲမညား",
    path: src="https://drive.google.com/uc?export=download&id=10PfEbDNDkMINoVMfvvBkewRwOGHikei1",
    img: src="https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
    singer: " jewel"
   },
  
   {
    name: "မချစ်ချင်တော့ပြီ",
    path: src="https://drive.google.com/uc?export=download&id=10QFfjHM3ku7OpZ1Eek6Ut_4ocytlzjgr",
    img:src= "https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
    singer: " jewel"
   },
   
   {
    name: "မှားပြန်တယ်",
    path: src="https://drive.google.com/uc?export=download&id=10RXYdXZ_E5O_0cXF_faN22bvMMjh7Oa4",
    img:src= "https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
    singer: " jewel"
   },
   {
    name: "မိုးလေးဖွဲတုန်",
    path: src="https://drive.google.com/uc?export=download&id=10UZPU8WhnEPjuqOvNu_eg92G-beO63O0",
    img:src= "https://drive.google.com/uc?export=download&id=1XmjSFTnW_umkiZxKVr0hbcN4mHbr09Fm",
    singer: " jewel"
   },
  
  
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/