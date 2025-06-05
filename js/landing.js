/* 바디 클래스에 따라서 url 변경 */
document.addEventListener('DOMContentLoaded', function() {
	const body = document.body;
	const logo = document.querySelector('#header h1 a');
	if (body.classList.contains('dyb')) {
		logo.href = 'https://www.choisun.co.kr/';
	} else if (body.classList.contains('creo')) {
		logo.href = 'https://www.dybcreo.com/';
	}else if (body.classList.contains('lanpus')) {
		logo.href = 'https://www.lanpus.com/';
	} else if (body.classList.contains('mata')) {
		logo.href = 'https://www.matasoohak.com/';
	}
});
/*
function h1href() {
	const body = document.body;
	let url = '';
	if (body.classList.contains('dyb')) {
		url = 'https://www.choisun.co.kr/';
	} else if (body.classList.contains('creo')) {
		url = 'https://www.dybcreo.com/';
	} else if (body.classList.contains('lanpus')) {
		url = 'https://www.lanpus.com/';
	} else if (body.classList.contains('mata')) {
		url = 'https://www.matasoohak.com/';
	}
	if (url) {
		window.open(url, '_blank');
	}
}
 */


/* 주소 복사 */
async function clip() {
	try {
		const url = location.href;
		await navigator.clipboard.writeText(url);
		layerOpen('layer');
	} catch (err) {
		// fallback - 이전 방식으로 시도
		try {
			const dummy = document.createElement("input");
			document.body.appendChild(dummy);
			dummy.value = url;
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
			layerOpen('layer', event);
		} catch (err) {
			alert('공유에 실패하였습니다.')
			//console.error('클립보드 복사 실패:', err);
		}
	}
}

/* 재원생 비재원생 확인페이지로 이동 */
document.addEventListener('DOMContentLoaded', function() {
	const navBtn = document.querySelectorAll('#header nav a');
	const container = document.querySelectorAll('#landing > section');
	navBtn.forEach((link, index) => {
		link.addEventListener('click', function(e) {
			// eventDeactive 클래스가 없을 때만 실행
			if (!this.classList.contains('eventDeactive')) {
				e.preventDefault();
				// 전체 비활성화
				navBtn.forEach(content => {
					content.classList.remove('active');
				});
				container.forEach(content => {
					content.classList.remove('active');
				});
				// 활성화
				this.classList.add('active');
				container[index].classList.add('active');
			}
		});
	});

	document.getElementById('footerBtnApply').addEventListener('click', function(e) {
		if (!this.classList.contains('eventDeactive')) {
			e.preventDefault();
			// 직접 active 클래스 추가/제거 처리
			navBtn.forEach(content => {
				content.classList.remove('active');
			});
			container.forEach(content => {
				content.classList.remove('active');
			});
			// 두 번째 항목 활성화
			navBtn[1].classList.add('active');
			container[1].classList.add('active');
		}
	});
});
