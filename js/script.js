/* ১. আমি যদি বলি কোন একটা এলিমেন্ট কে সিলেক্ট করে নিয়ে এসে console log করে দেখাতে হবে। তুমি কি সেটা করে দেখাতে পারবে? 

২. সেখানে একদম হেডার এ একটা buy now বাটন আছে। সেই বাটনে একটা ক্লিক হ্যান্ডলার যোগ করতে হবে? সেটা কি করতে পারবে? যদি পারো তাহলে সেই বাটনে ক্লিক করলে উপরে যেখানে BE THE PENGUIN এই কথাগুলো আছে সেখানে BE THE PENGUIN এর পরিবর্তে "I AM PENGUIN" কথাটা লিখে দিতে পারবে? 

 */
// 1. answer
 const header = document.getElementsByTagName('header');
 console.log(header);

//  ? 2. answer
document.getElementById('header-btn').addEventListener('click', function(){
  const text1 = document.getElementById('header-text-1');
  text1.innerText = 'I AM PENGUIN'
  
})