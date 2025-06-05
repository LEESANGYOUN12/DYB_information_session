document.addEventListener('DOMContentLoaded', function() {

})

/* 레이어 오픈 */
function layerOpen(id) {
	// 현재 열려있는 모든 레이어 확인
	if (document.querySelectorAll('.layer.active').length === 0) {
		const scrollPosition = window.scrollY;
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';
		document.body.style.top = `-${scrollPosition}px`;
		document.body.dataset.scrollY = scrollPosition;
	}
	// 레이어 오픈
	const layer = document.getElementById(id);
	layer.classList.add('active');
}
/* 레이어 클로즈 */
function layerClose() {
	// layer 닫기 (e.target 대신 e 사용)
	const layer = event.target.closest('.layer');
	layer.classList.remove('active');
	// 남아있는 활성화된 레이어 확인
	const remainingLayers = document.querySelectorAll('.layer.active');
	// 마지막 레이어를 닫을 때만 body 스타일 초기화
	if (remainingLayers.length === 0) {
		// body 스타일 초기화
		document.body.removeAttribute('style');
		const scrollY = document.body.dataset.scrollY;
		if (scrollY) {
			window.scrollTo(0, parseInt(scrollY));
		}
	}
}












