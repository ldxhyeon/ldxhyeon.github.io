document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal'); // 모달 요소
  const closeModalBtn = document.getElementById('close-modal-btn'); // 닫기 버튼
  const detailBtns = document.querySelectorAll('.details-btn'); // "자세히 보기" 버튼들

  // "자세히 보기" 버튼 클릭 이벤트 처리
  detailBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault(); // a 태그 기본 동작 방지
      modal.style.display = 'flex'; // 모달 열기
      document.body.style.overflow = 'hidden'; // 배경 스크롤 비활성화
    });
  });

  // 모달 닫기 버튼 클릭 이벤트 처리
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // 모달 닫기
    document.body.style.overflow = ''; // 배경 스크롤 활성화
  });

  // 모달 외부 클릭 시 닫기
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'; // 모달 닫기
      document.body.style.overflow = ''; // 배경 스크롤 활성화
    }
  });
});
