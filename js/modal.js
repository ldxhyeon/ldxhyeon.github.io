const projects = [
  {
    id: "project1",
    title: "화사愛화공",
    duration: "2024.11.06 ~ 2024.12.05 (5인)",
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
    duration: " 2024.10.21 ~ 2024.11.01 (5인)",
    description: "유기견 입양을 쉽게 돕기 위한 플랫폼으로, 유기견 정보와 입양 절차를 연결하는 서비스입니다.",
    features: [
      "마이페이지",
      "회원정보 비밀번호 / 닉네임 / 프로필 사진 수정",
      "회원이 작성한 게시글 및 댓글 데이터 불러오기",
      "회원이 좋아요 누른 데이터 불러오기",
      "비밀번호 유효성 검사 후 회원탈퇴 진행",
      "관리자 페이지 게시물 삭제",
    ],
    technologies: ["HTML5, CSS3", "JavaScript", "Java, Lombok", "Spring Boot", "Mybatis", "Oracle"],
    images: [
      { src: "img/mypageUpdate.png", caption: "프로필 수정 모달창" },
      { src: "img/mypagePost.png", caption: "회원 게시글 관리 모달창" },
      { src: "img/mypageSecession.png", caption: "회원탈퇴 모달창" },
      { src: "img/adminList.png", caption: "관리자 게시글 관리 페이지" },
      { src: "img/adminDetail.png", caption: "관리자 게시글 삭제 모달창" },
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
        // 모달 내용 업데이트
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
  
        // Repet 프로젝트인지 확인하고 헤더 클래스 변경
        const header = document.querySelector(".final-header");
        const modalImage = document.querySelector(".modal-image");

        if (projectId === "project2") {
          header.classList.add("semi-header"); // Repet 스타일 추가
          modalTitle.style.color = "#232323"; 
          modalDuration.style.color = "#232323";  

          // Repet에 맞는 이미지로 변경
          modalImage.src = "img/repet-main3.png"; // Repet 프로젝트의 이미지 경로로 변경

        } else {
          header.classList.remove("semi-header"); // Repet 스타일 제거
          modalTitle.style.color = "#fff"; 
          modalDuration.style.color = "#fff"; 

          // Repet에 맞는 이미지로 변경
          modalImage.src = "img/final-main.PNG"; // Repet 프로젝트의 이미지 경로로 변경
        }
  
        // 모달 열기
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



