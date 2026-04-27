// 페이지 로드 시 이름 입력받기
const userName = prompt("사용자 이름을 입력해주세요:");
const titleElement = document.querySelector('h1');
const displayElement = document.getElementById('display');

if (userName) {
    titleElement.innerText = `${userName}님의 키보드 입력 테스트`;
}

// 실시간 키보드 이벤트 리스너 등록
document.addEventListener('keydown', (event) => {
    // 화면에 누른 키 표시
    displayElement.innerText = `현재 누른 키: ${event.key}`;
    
    // 콘솔에 상세 정보 출력
    console.log(`Key: ${event.key} | Code: ${event.code}`);

    // 스타일 효과 추가 (선택 사항)
    displayElement.style.color = '#e91e63';
    setTimeout(() => {
        displayElement.style.color = '#333';
    }, 100);
});