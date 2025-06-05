window.onload = function() {

}

/* 레이어 오픈 */
function layerOpen(id, e) {
	// 클릭 이벤트 막기
	if (e) {
		e.preventDefault();
	}
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
	// 마스크 인덱스
	// const mask = document.querySelector('#mask');
	// mask.classList.add('active');
	// const index = getComputedStyle(layer).zIndex;
	// mask.style.zIndex = parseInt(index) - 1;
}
/* 레이어 클로즈 */
function layerClose(e) {
	// 클릭 이벤트 막기
	if (e) {
		e.preventDefault();
	}
	// layer 닫기 (e.target 대신 e 사용)
	const layer = e.target.closest('.layer');
	layer.classList.remove('active');

	// 남아있는 활성화된 레이어 확인
	const remainingLayers = document.querySelectorAll('.layer.active');
	const mask = document.querySelector('#mask');
	// 마지막 레이어를 닫을 때만 body 스타일 초기화
	if (remainingLayers.length === 0) {
		// body 스타일 초기화
		document.body.removeAttribute('style');
		const scrollY = document.body.dataset.scrollY;
		if (scrollY) {
			window.scrollTo(0, parseInt(scrollY));
		}
		mask.classList.remove('active');
	}//  else {
	// 	// 남아있는 레이어 중 가장 높은 z-index 찾기
	// 	const highestLayer = Array.from(remainingLayers).reduce((prev, curr) => {
	// 			const prevZ = parseInt(getComputedStyle(prev).zIndex) || 0;
	// 			const currZ = parseInt(getComputedStyle(curr).zIndex) || 0;
	// 			return prevZ > currZ ? prev : curr;
	// 		});
	// 	// 마스크 z-index 업데이트
	// 	if (mask && highestLayer) {
	// 		const index = getComputedStyle(highestLayer).zIndex;
	// 		mask.style.zIndex = parseInt(index) - 1;
	// 	}
	// }
}



/*
function layerClose(e) {
	//a href 클릭 이벤트 막기
	if (e) {
		e.preventDefault();
	}
	// 현재 열려있는 모든 레이어 확인
	// 남아있는 활성화된 레이어 확인
	const remainingLayers = document.querySelectorAll('.layer.active');

	// 마지막 레이어를 닫을 때만 body 스타일 초기화
	if (remainingLayers.length === 0) {
		// body 스타일 초기화
		document.body.removeAttribute('style');
		const scrollY = document.body.dataset.scrollY;
		window.scrollTo(0, parseInt(scrollY));
	}

	//layer 클로즈
	const layer = e.target.closest('.layer');
	layer.classList.remove('active');

	// 마스크 인덱스
	const mask = document.querySelector('#mask');
	const index = getComputedStyle(layer).zIndex;
	mask.style.zIndex = parseInt(index) - 1;
}
*/











