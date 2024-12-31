const projects = [
  {
    id: "project1",
    title: "화사愛화공",
    duration: "2024.11.06 ~ 2024.12.05 (5명)",
    description: "예술 작품을 사랑하는 누구나 쉽게 참여할 수 있는 투명한 거래와 경매 시스템을 제공하기 위한 플랫폼입니다.",
    features: [
      "네이버 Clova API 챗봇",
      "경매 작품 신고 접수(팝업창)",
      "특정 경매 작품 좋아요 기능",
      "웹소켓을 활용한 경매 실시간 입찰",
      "ajax를 활용한 리스트 조회 / 페이지네이션",
    ],
    technologies: ["HTML5, CSS3", "JavaScript, Jquery", "Java, Lombok", "Spring Boot", "Mybatis", "Oracle"],
    images: [
      { src: "img/chatbot.PNG", caption: "챗봇 API" },
      { src: "img/upcommingList.png", caption: "예정 경매 리스트" },
      { src: "img/upcomming.png", caption: "예정 경매 상세 페이지" },
      { src: "img/report.PNG", caption: "신고 팝업창" },
      { src: "img/currentList.PNG", caption: "현재 경매 리스트" },
      { src: "img/current.PNG", caption: "현재 경매 상세 리스트" },
    ],
  },
  {
    id: "project2",
    title: "Repet",
    duration: "2023.09.01 ~ 2023.10.01 (3명)",
    description: "유기견 입양을 쉽게 돕기 위한 플랫폼으로, 유기견 정보와 입양 절차를 연결하는 서비스입니다.",
    features: [
      "유기견 데이터 API 통합",
      "사용자 친화적인 검색 기능",
      "입양 신청서 작성 및 관리",
    ],
    technologies: ["HTML5, CSS3", "JavaScript, Jquery", "Java, Lombok", "Spring Boot", "Mybatis", "Oracle"],
    images: [
      { src: "img/end.PNG", caption: "경매 종료 리스트" },
      { src: "img/end.PNG", caption: "경매 종료 리스트" },
      { src: "img/end.PNG", caption: "경매 종료 리스트" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const detailBtns = document.querySelectorAll(".details-btn");

  const imageModal = document.getElementById("image-modal");
  const closeImageModalBtn = document.getElementById("close-image-modal");
  const largeImage = document.getElementById("large-image");

  const modalTitle = document.querySelector(".modal-title");
  const modalDuration = document.querySelector(".modal-duration");
  const modalDescription = document.querySelector(".project-modal-content > p");
  const featureList = document.querySelector(".feature-list-function");
  const technologyList = document.querySelector(".feature-list-tech");
  const galleryGrid = document.querySelector(".gallery-grid");

  detailBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      const projectId = btn.getAttribute("data-id");
      const project = projects.find((p) => p.id === projectId);

      if (project) {
        modalTitle.textContent = project.title;
        modalDuration.textContent = project.duration;
        modalDescription.textContent = project.description;

        // 담당 기능 업데이트
        featureList.innerHTML = "";
        project.features.forEach((feature) => {
          const li = document.createElement("li");
          li.textContent = feature;
          featureList.appendChild(li);
        });

        // 기술 스택 업데이트
        technologyList.innerHTML = "";
        project.technologies.forEach((tech) => {
          const li = document.createElement("li");
          li.textContent = tech;
          technologyList.appendChild(li);
        });

        // 이미지 갤러리 업데이트
        galleryGrid.innerHTML = "";
        project.images.forEach((image) => {
          const div = document.createElement("div");
          div.className = "gallery-item";
          div.innerHTML = `
            <img src="${image.src}" class="gallery-img" alt="Gallery Image">
            <p class="gallery-caption">${image.caption}</p>
          `;
          galleryGrid.appendChild(div);
        });

        modal.style.display = "flex";
        document.body.classList.add("modal-open");

        // 이미지 클릭 이벤트 추가
        const galleryImages = document.querySelectorAll(".gallery-img");
        galleryImages.forEach((img) => {
          img.addEventListener("click", () => {
            largeImage.src = img.src;
            imageModal.style.display = "flex";
            closeModalBtn.style.display = "none"; // 프로젝트 모달 닫기 버튼 숨김
          });
        });
      }
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  closeImageModalBtn.addEventListener("click", () => {
    imageModal.style.display = "none";
    closeModalBtn.style.display = "block"; // 프로젝트 모달 닫기 버튼 다시 표시
  });

  window.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      imageModal.style.display = "none";
      closeModalBtn.style.display = "flex";
    } else if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});



