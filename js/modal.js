document.addEventListener('DOMContentLoaded', () => {
  // 모달 요소들
  const modal = document.getElementById('project-modal'); // "자세히 보기" 모달
  const closeModalBtn = document.getElementById('close-modal-btn'); // "자세히 보기" 닫기 버튼
  const detailBtns = document.querySelectorAll('.details-btn'); // "자세히 보기" 버튼들

  // 이미지 보기 모달
  const imageModal = document.getElementById('image-modal'); // 큰 이미지 모달
  const largeImage = document.getElementById('large-image'); // 큰 이미지
  const closeImageModalBtn = document.getElementById('close-image-modal'); // 이미지 모달 닫기 버튼
  const galleryImages = document.querySelectorAll('.gallery-img'); // 갤러리 이미지들

  // "자세히 보기" 버튼 클릭 이벤트 처리
  detailBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault(); // a 태그 기본 동작 방지
      modal.style.display = 'flex'; // 모달 열기
      document.body.style.overflow = 'hidden'; // 배경 스크롤 비활성화
    });
  });

  // "자세히 보기" 모달 닫기 버튼 클릭 이벤트 처리
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // 모달 닫기
    document.body.style.overflow = ''; // 배경 스크롤 활성화
  });

  // "자세히 보기" 모달 외부 클릭 시 닫기
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'; // 모달 닫기
      document.body.style.overflow = ''; // 배경 스크롤 활성화
    }
  });

  // 갤러리 이미지 클릭 이벤트 처리
  galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
      largeImage.src = img.src; // 클릭한 이미지의 경로를 큰 이미지로 설정
      imageModal.style.display = 'flex'; // 이미지 모달 열기
      document.body.style.overflow = 'hidden'; // 배경 스크롤 비활성화
    });
  });

  // 이미지 모달 닫기 버튼 클릭 이벤트 처리
  closeImageModalBtn.addEventListener('click', () => {
    imageModal.style.display = 'none'; // 이미지 모달 닫기
    document.body.style.overflow = ''; // 배경 스크롤 활성화
  });

  // 이미지 모달 외부 클릭 시 닫기
  window.addEventListener('click', (event) => {
    if (event.target === imageModal) {
      imageModal.style.display = 'none'; // 이미지 모달 닫기
      document.body.style.overflow = ''; // 배경 스크롤 활성화
    }
  });
});
