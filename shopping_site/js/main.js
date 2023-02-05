import limited_sale_products from "./data.js"

const product_line = document.querySelector('.sale_product_line')

for(let i=0; i<limited_sale_products.length; i++) {
let product_list = document.createElement('li')
let li_div = document.createElement('div')
let li_img = document.createElement('img')

li_img.setAttribute('src',limited_sale_products[i].src)
// 이미지 태그 생성한 곳에 src속성 추가

if(limited_sale_products[i].src == "./images/한정세일1.jpg") {
  product_list.setAttribute('onclick',"location.href = './detail_page.html'")
}


li_div.appendChild(li_img)
product_list.appendChild(li_div)

let product_grade_number = document.createElement('p')
product_grade_number.setAttribute('class','grade_number')
let product_grade_number_input = document.createTextNode( '('+ limited_sale_products[i].grade_number + ')')

product_grade_number.appendChild(product_grade_number_input)
product_list.appendChild(product_grade_number)

let product_grade = document.createElement('p')
product_grade.setAttribute('class','grade')
let star = document.createElement('i')
star.setAttribute('class','fa-solid fa-star')
product_grade.appendChild(star)
let product_grade_input = document.createTextNode(limited_sale_products[i].grade)




product_grade.appendChild(product_grade_input)
product_list.appendChild(product_grade)

let product_name = document.createElement('p')
product_name.setAttribute('class','product_name')
let product_name_input = document.createTextNode(limited_sale_products[i].name)
product_name.appendChild(product_name_input)
product_list.appendChild(product_name)

let before_discount_price = document.createElement('p')
before_discount_price.setAttribute('class','price_sale')
let before_discount_price_input = document.createTextNode(limited_sale_products[i].before_decount_price + '원')
before_discount_price.appendChild(before_discount_price_input)
product_list.appendChild(before_discount_price)

let dc_rate = document.createElement('p')
dc_rate.setAttribute('class','discount_rate')
let dc_rate_input = document.createTextNode(limited_sale_products[i].discount_rate + '%')
dc_rate.appendChild(dc_rate_input)
product_list.appendChild(dc_rate)

let after_dc_price = document.createElement('p')
after_dc_price.setAttribute('class','discounted_price')
let after_dc_price_input = document.createTextNode(limited_sale_products[i].discounted_price + '원')
after_dc_price.appendChild(after_dc_price_input)
product_list.appendChild(after_dc_price)

product_line.appendChild(product_list)


}











document.querySelector('.how_arrange_price').addEventListener('click',function(){

  document.querySelector('.how_arrange_price').classList.add('how_arrange_click_css')

  document.querySelector('.how_arrange_dc').classList.remove('how_arrange_click_css')

  document.querySelector('.how_arrange_grade').classList.remove('how_arrange_click_css')
})

document.querySelector('.how_arrange_dc').addEventListener('click',function(){

  document.querySelector('.how_arrange_dc').classList.add('how_arrange_click_css')

  document.querySelector('.how_arrange_price').classList.remove('how_arrange_click_css')

  document.querySelector('.how_arrange_grade').classList.remove('how_arrange_click_css')
})

document.querySelector('.how_arrange_grade').addEventListener('click',function(){

  document.querySelector('.how_arrange_grade').classList.add('how_arrange_click_css')

  document.querySelector('.how_arrange_price').classList.remove('how_arrange_click_css')

  document.querySelector('.how_arrange_dc').classList.remove('how_arrange_click_css')
})











document.querySelector('.how_arrange_grade').addEventListener('click', function() {
  
  product_line.innerHTML = ''

  limited_sale_products.sort(function(a,b) {
    return b.grade - a.grade
  })


 
  for(let i=0; i<limited_sale_products.length; i++) {
let product_list = document.createElement('li')
let li_div = document.createElement('div')
let li_img = document.createElement('img')

li_img.setAttribute('src',limited_sale_products[i].src)
// 이미지 태그 생성한 곳에 src속성 추가

if(limited_sale_products[i].src == "./images/한정세일1.jpg") {
  product_list.setAttribute('onclick',"location.href = './detail_page.html'")
}

li_div.appendChild(li_img)
// div에 img태그 자식으로 넣기
product_list.appendChild(li_div)

let product_grade_number = document.createElement('p')
product_grade_number.setAttribute('class','grade_number')
let product_grade_number_input = document.createTextNode( '('+ limited_sale_products[i].grade_number + ')')

product_grade_number.appendChild(product_grade_number_input)
product_list.appendChild(product_grade_number)

let product_grade = document.createElement('p')
product_grade.setAttribute('class','grade')
let star = document.createElement('i')
star.setAttribute('class','fa-solid fa-star')
product_grade.appendChild(star)
let product_grade_input = document.createTextNode(limited_sale_products[i].grade)




product_grade.appendChild(product_grade_input)
product_list.appendChild(product_grade)

let product_name = document.createElement('p')
product_name.setAttribute('class','product_name')
let product_name_input = document.createTextNode(limited_sale_products[i].name)
product_name.appendChild(product_name_input)
product_list.appendChild(product_name)

let before_discount_price = document.createElement('p')
before_discount_price.setAttribute('class','price_sale')
let before_discount_price_input = document.createTextNode(limited_sale_products[i].before_decount_price + '원')
before_discount_price.appendChild(before_discount_price_input)
product_list.appendChild(before_discount_price)

let dc_rate = document.createElement('p')
dc_rate.setAttribute('class','discount_rate')
let dc_rate_input = document.createTextNode(limited_sale_products[i].discount_rate + '%')
dc_rate.appendChild(dc_rate_input)
product_list.appendChild(dc_rate)

let after_dc_price = document.createElement('p')
after_dc_price.setAttribute('class','discounted_price')
let after_dc_price_input = document.createTextNode(limited_sale_products[i].discounted_price + '원')
after_dc_price.appendChild(after_dc_price_input)
product_list.appendChild(after_dc_price)

product_line.appendChild(product_list)

}

    
})
















document.querySelector('.how_arrange_dc').addEventListener('click', function() {
  
  product_line.innerHTML = ''

  limited_sale_products.sort(function(a,b) {
    return b.discount_rate - a.discount_rate
  })


 
  for(let i=0; i<limited_sale_products.length; i++) {
let product_list = document.createElement('li')
let li_div = document.createElement('div')
let li_img = document.createElement('img')

li_img.setAttribute('src',limited_sale_products[i].src)
// 이미지 태그 생성한 곳에 src속성 추가

if(limited_sale_products[i].src == "./images/한정세일1.jpg") {
  product_list.setAttribute('onclick',"location.href = './detail_page.html'")
}

li_div.appendChild(li_img)
// div에 img태그 자식으로 넣기
product_list.appendChild(li_div)

let product_grade_number = document.createElement('p')
product_grade_number.setAttribute('class','grade_number')
let product_grade_number_input = document.createTextNode( '('+ limited_sale_products[i].grade_number + ')')

product_grade_number.appendChild(product_grade_number_input)
product_list.appendChild(product_grade_number)

let product_grade = document.createElement('p')
product_grade.setAttribute('class','grade')
let star = document.createElement('i')
star.setAttribute('class','fa-solid fa-star')
product_grade.appendChild(star)
let product_grade_input = document.createTextNode(limited_sale_products[i].grade)




product_grade.appendChild(product_grade_input)
product_list.appendChild(product_grade)

let product_name = document.createElement('p')
product_name.setAttribute('class','product_name')
let product_name_input = document.createTextNode(limited_sale_products[i].name)
product_name.appendChild(product_name_input)
product_list.appendChild(product_name)

let before_discount_price = document.createElement('p')
before_discount_price.setAttribute('class','price_sale')
let before_discount_price_input = document.createTextNode(limited_sale_products[i].before_decount_price + '원')
before_discount_price.appendChild(before_discount_price_input)
product_list.appendChild(before_discount_price)

let dc_rate = document.createElement('p')
dc_rate.setAttribute('class','discount_rate')
let dc_rate_input = document.createTextNode(limited_sale_products[i].discount_rate + '%')
dc_rate.appendChild(dc_rate_input)
product_list.appendChild(dc_rate)

let after_dc_price = document.createElement('p')
after_dc_price.setAttribute('class','discounted_price')
let after_dc_price_input = document.createTextNode(limited_sale_products[i].discounted_price + '원')
after_dc_price.appendChild(after_dc_price_input)
product_list.appendChild(after_dc_price)

product_line.appendChild(product_list)

}

    
})



















document.querySelector('.how_arrange_price').addEventListener('click', function() {
  
  product_line.innerHTML = ''

  limited_sale_products.sort(function(a,b) {
    return a.discounted_price - b.discounted_price
  })


 
  for(let i=0; i<limited_sale_products.length; i++) {
let product_list = document.createElement('li')
let li_div = document.createElement('div')
let li_img = document.createElement('img')

li_img.setAttribute('src',limited_sale_products[i].src)
// 이미지 태그 생성한 곳에 src속성 추가

if(limited_sale_products[i].src == "./images/한정세일1.jpg") {
  product_list.setAttribute('onclick',"location.href = './detail_page.html'")
}

li_div.appendChild(li_img)
// div에 img태그 자식으로 넣기
product_list.appendChild(li_div)

let product_grade_number = document.createElement('p')
product_grade_number.setAttribute('class','grade_number')
let product_grade_number_input = document.createTextNode( '('+ limited_sale_products[i].grade_number + ')')

product_grade_number.appendChild(product_grade_number_input)
product_list.appendChild(product_grade_number)

let product_grade = document.createElement('p')
product_grade.setAttribute('class','grade')
let star = document.createElement('i')
star.setAttribute('class','fa-solid fa-star')
product_grade.appendChild(star)
let product_grade_input = document.createTextNode(limited_sale_products[i].grade)




product_grade.appendChild(product_grade_input)
product_list.appendChild(product_grade)

let product_name = document.createElement('p')
product_name.setAttribute('class','product_name')
let product_name_input = document.createTextNode(limited_sale_products[i].name)
product_name.appendChild(product_name_input)
product_list.appendChild(product_name)

let before_discount_price = document.createElement('p')
before_discount_price.setAttribute('class','price_sale')
let before_discount_price_input = document.createTextNode(limited_sale_products[i].before_decount_price + '원')
before_discount_price.appendChild(before_discount_price_input)
product_list.appendChild(before_discount_price)

let dc_rate = document.createElement('p')
dc_rate.setAttribute('class','discount_rate')
let dc_rate_input = document.createTextNode(limited_sale_products[i].discount_rate + '%')
dc_rate.appendChild(dc_rate_input)
product_list.appendChild(dc_rate)

let after_dc_price = document.createElement('p')
after_dc_price.setAttribute('class','discounted_price')
let after_dc_price_input = document.createTextNode(limited_sale_products[i].discounted_price + '원')
after_dc_price.appendChild(after_dc_price_input)
product_list.appendChild(after_dc_price)

product_line.appendChild(product_list)

}

    
})