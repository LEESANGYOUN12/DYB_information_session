document.addEventListener('DOMContentLoaded', function() {
	/* 모바일 height 100vh css = height:calc(var(--vh, 1vh) * 100); */
	/* 100vh */
	setScreenSize()
	window.addEventListener('resize', setScreenSize)

	function setScreenSize() {
		clearTimeout(window.resizedFinish)
		window.resizedFinish = setTimeout(function () {
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
			console.log('100vh size check')
		}, 250)
	}

	/* 텍스에어리어 높이 자동 변경 - 기본값 114px 최대값 400px */
	const textareaAutoHeight = document.querySelectorAll('.textareaAutoHeight');
	const textareaAdjustHeight = function (element) {
		element.style.height = '120px';// 기본 높이 "120px"로 리셋
		element.style.height = Math.min(element.scrollHeight, 400) + 'px';// 최대 높이 "400px"를 넘어갈 경우 스크롤 처리
		if (element.scrollHeight > 400) {
			element.style.overflowY = 'auto';
		} else {
			element.style.overflowY = 'hidden';
		}
	};
	textareaAutoHeight.forEach(textarea => {
		textareaAdjustHeight(textarea);
		textarea.addEventListener('input', function () {
			textareaAdjustHeight(this);
		});
	});

	/* 탭 메뉴 */
	const tabs = document.querySelectorAll('.tab');
	tabs.forEach(tab => {
		const tabItems = tab.querySelectorAll('.btnTab a');
		const tabContents = tab.querySelectorAll('.tabArea > section');
		tabItems.forEach((el, index) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				// 현재 탭 컨테이너 내의 모든 활성 상태 제거
				tabItems.forEach(content => {
					content.classList.remove('active');
				});
				tabContents.forEach(content => {
					content.classList.remove('active');
				});
				// 클릭된 탭과 관련 콘텐츠 활성화
				el.classList.add('active');
				tabContents[index].classList.add('active');
			});
		});
	});
	/*
	<div className="tab">
		<div className="btnTab">
			<ul>
				<li><a className="active">버튼04</a></li>
				<li><a>버튼05</a></li>
				<li><a>버튼06</a></li>
			</ul>
		</div>
		<div className="tabArea">
			<section className="active">section04</section>
			<section>section05</section>
			<section>section06</section>
		</div>
	</div>
	 */
});


function show(id){
	document.querySelectorAll('.applicationFormWrap').forEach( applicationFormWrap =>
		applicationFormWrap.classList.remove('active')
	)
	document.getElementById(id).classList.add('active');
}



