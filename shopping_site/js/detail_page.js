
let register_image_btn = document.querySelector('.register_image')
register_image_btn.addEventListener('change',img_input_function)
let display_image = document.querySelector('.input_image')

function img_input_function() {
  
  let review_image = register_image_btn.files[0]
  
  display_image.innerHTML = ''
  let img_tag = document.createElement('img')
  display_image.src = URL.createObjectURL(review_image)
  img_tag.src = display_image.src
  
  display_image.appendChild(img_tag)

}



document.querySelector('.register_review_btn').addEventListener('click',function(){
  
    if(document.querySelector('.register_text').value){
    
    let new_comment_box = document.querySelector('.review_text1').cloneNode(true); // 기존에 있는 댓글 HTML 구조 복사
    new_comment_box.classList.add('to_add_delete_button')

    // let new_comment_box2 = document.querySelector('.review_text1')
    // new_comment_box2.classList.add('to_add_delete_button')
    // let new_comment_box = document.querySelector('.to_add_delete_button').cloneNode(true);
    
    let user_comment_text = document.querySelector('.register_text').value // 등록되는 댓글 텍스트
  new_comment_box.querySelector('.like').innerHTML = user_comment_text;
  
  new_comment_box.querySelector('.like_person').innerHTML = '이 리뷰를 0 명이 좋아합니다.'

  new_comment_box.querySelector('.aaaa').src = display_image.src
 

   
  // 오늘 날짜로 변경
  let today = new Date();
  // new_comment_box.querySelector('.review_text_right').childNodes[3].innerHTML
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  if(month < 10) {
    month = '0' + month
  }
  let day = today.getDate() 
  if(day < 10) {
    day = '0' + day
  }


  let today_date = `${year}-${month}-${day}`
  new_comment_box.querySelector('.review_text_right').childNodes[3].innerHTML = today_date

  // let review_delete_btn = document.createElement('p')
  // let delete_X_btn = document.createTextNode('X')
  // review_delete_btn.appendChild(delete_X_btn)
  // review_delete_btn.classList.add('delete_review_button')
  

  
  
  display_image.innerHTML = '<p style="line-height: 100px;text-align: center;">이미지 추가</p>'
  
  register_image_btn.value = ''
  document.querySelector('.register_text').value = ''

  
  
  
  
  // new_comment_box.insertBefore(review_delete_btn, new_comment_box.childNodes[1])
  
  // let click_delete_btn = new_comment_box.querySelectorAll('delete_review_button')
  
  // for(let i=0; i<click_delete_btn.length; i++) {
  //   click_delete_btn[i].addEventListener('click', function(){
    //     alert('zzz')
  //   })
  // }
  
  let review_delete_btn = document.createElement('p')
  let delete_X_btn = document.createTextNode('X')
  review_delete_btn.appendChild(delete_X_btn)
  review_delete_btn.classList.add('delete_review_button')
  
  new_comment_box.insertBefore(review_delete_btn, new_comment_box.childNodes[1])

  // let bbb = document.querySelector('.to_add_delete_button')
  // bbb.insertBefore(review_delete_btn, bbb.childNodes[1])
  

  
  
  document.querySelector('.recommend_order').insertBefore(new_comment_box,document.querySelector('.recommend_order').childNodes[1])
  
  new_comment_box.classList.toggle('to_add_delete_button')
  
}

// if

let delete_review_buttons = document.querySelectorAll('.delete_review_button')

for(let i=0; i<delete_review_buttons.length; i++) {
    delete_review_buttons[i].addEventListener('click', function(){
      if(this.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode)
      }
    })
  }



}) 
//click_event
