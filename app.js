//ซ่อนและแสดงผลปุ่มscroll ต้องการให้สกอเนื้อหาความสูง 30 %
const scrollBtn = document.querySelector('.top')
const rootEl = document.documentElement
//เช็คว่ามีการสกอเนื้อหามั้ย
document.addEventListener("scroll",showBtn)
//กำหนดevent scroll to top
scrollBtn.addEventListener("click",scrollToTop)

function showBtn(){
    //คำนวนหาความสูงของหน้าต่างทั้งหมด และความสูงที่ไม่รวมสกอบาร์
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    //เราต้องการอยากได้ตัวเลข % มาใช้
    if(rootEl.scrollTop/scrollTotal>0.3){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}

function scrollToTop(){
    rootEl.scrollTo({  //เรียกใช้ฟังก์ชั่น scrollTo เผื่อที่จะย้ายหน้าเว็บไปด้านบน
        top:0, //ระบุตำแหน่งที่ต้องการ
        behavior:"smooth" //ระบุการเคลื่อไหวที่ต้องการ
    })
}
