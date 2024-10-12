const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

basketStarterEl.addEventListener('click', function (event) {
	event.stopPropagation()
	if (basketEl.classList.contains('show')) {
		// hide
		hideBasket()
	} else {
		// show
    showBasket()
	}
})
basketEl.addEventListener('click', function (event) {   // 장바구니 영역 클릭시에는 계속 노출되도록 함
  event.stopPropagation()
})

window.addEventListener('click', function () {
	basketEl.classList.remove('show')
})

function showBasket() {
  basketEl.classList.add('show')
}

function hideBasket() {
  basketEl.classList.remove('show')
}