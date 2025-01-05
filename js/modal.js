const projects = [
  {
    id: "project1",
    title: "화사愛화공",
    duration: "2024.11.06 ~ 2024.12.05 (5인)",
    description: "예술 작품을 사랑하는 누구나 쉽게 참여할 수 있는 투명한 거래와 경매 시스템을 제공하기 위한 플랫폼입니다.",
    goals: [
      "즉시 판매와 실시간 경매를 통합한 효율적인 거래 시스템 제공",
      "투명하고 공정한 경매 시스템 구현",
      "다양한 작품 감상 시스템 구현",
    ],
    challenges: [
      {
        title: "웹소켓 통신 구현 이슈",
        details: "JavaScript 연결 경로와 서버 엔드포인트 경로가 일치하지 않아 웹소켓 통신이 반복적으로 실패하는 문제가 발생했습니다.",
        solution: "클라이언트와 서버 간의 경로를 정확히 일치하도록 수정하고, 양방향 통신을 재구성하여 웹소켓 연결에 성공했습니다.",
      },
      {
        title: "좋아요 클릭 후 색상 활성화 이슈",
        details: "좋아요 활성화 시 데이터베이스에 INSERT/UPDATE는 정상적으로 동작했으나, 좋아요 상태가 1일 때 UI의 색상이 활성화되지 않는 문제가 있었습니다.",
        solution: "타임리프의 삼항 연산자(th:classappend)를 활용하여 좋아요 상태가 1일 경우 색상이 활성화되도록 조건을 설정하였습니다. 이를 통해 UI와 데이터 상태 간의 불일치를 해결하였습니다.",
      },
    ],
    features: [
      "네이버 Clova API 챗봇",
      "경매 작품 신고 접수(팝업창)",
      "특정 경매 작품 좋아요",
      "웹소켓을 활용한 경매 실시간 입찰",
      "ajax를 활용한 리스트 조회 / 페이지네이션",
    ],
    technologies: [
      { category: "Language", value: "Java / JavaScript" },
      { category: "Framework", value: "Spring Boot / MyBatis" },
      { category: "Database", value: "Oracle" },
      { category: "Cloud", value: "OCI" },
      { category: "Server/WAS", value: "Apache Tomcat 10 / AWS Lightsail/EC2" },
      { category: "Tools", value: "Eclipse / GitHub / DBeaver / ERDCloud / Figma / STS / MobaXterm" },
      { category: "API", value: "네이버 CLOVA chatbot" },
    ],
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
    duration: "2024.10.21 ~ 2024.11.01 (5인)",
    description: "유기견 입양을 쉽게 돕기 위한 플랫폼으로, 유기견 정보와 입양 절차를 연결하는 서비스입니다.",
    goals: [
      "입양 정보를 중심으로 한 사용자 맞춤형 입양 시스템 제공",
      "동물병원 정보와 위치 기반 검색 서비스를 통한 사용자 편의성 강화",
      "자유롭게 소통하고 정보를 공유할 수 있는 커뮤니티 공간 제공",
    ],
    challenges: [
      {
        title: "페이지네이션 비동기 구현 이슈",
        details: "마이페이지 내부에서 페이지를 넘길 때 깜빡임 없이 비동기적으로 동작하도록 구현하려 했으나, 게시물 수에 비례하여 페이지가 생성되지 않는 문제가 발생했습니다.",
        solution: "페이지네이션 전용 클래스를 설계하여 게시물 수에 따라 동적으로 페이지를 생성하도록 구현했습니다. 또한, 한 페이지에 표시할 게시물 수와 노출할 페이지 수를 설정할 수 있는 로직을 추가하여 유연한 페이지네이션을 구현했습니다.",
      },
      {
        title: "Git/GitHub 병합 이슈",
        details: `팀원들이 모두 Git/GitHub 병합 작업에 익숙하지 않아, 초기에 병합 전략을 세우지 못했습니다. 
        이로 인해 각자가 개별 프로젝트를 진행한 후 나중에 병합하기로 결정했지만, 병합 과정에서 대규모 충돌이 발생했습니다.
        이 충돌을 해결하기 위해 하나하나 수작업으로 수정 작업을 진행해야 했습니다.`,
        solution: `이번 경험을 통해 Git 브랜치 관리와 병합 전략의 중요성을 깨달았습니다. 
        앞으로는 작업 초기부터 브랜치를 나누어 관리하고, 주기적인 
        병합 작업을 통해 충돌을 최소화하는 Git 협업 방식을 적극적으로 활용하기로 하였습니다.
        이를 통해 다음 프로젝트 팀의 효율성과 작업 안정성을 높일 수 있었습니다.`,
      },
    ],
    features: [
      "마이페이지",
      "회원정보 비밀번호 / 닉네임 / 프로필 사진 수정",
      "회원이 작성한 게시글 및 댓글 데이터 불러오기",
      "회원이 좋아요 누른 데이터 불러오기",
      "비밀번호 유효성 검사 후 회원탈퇴 진행",
      "관리자 페이지 게시물 삭제",
    ],
    technologies: [
      { category: "Language", value: "Java / JavaScript" },
      { category: "Framework", value: "Spring Boot / MyBatis" },
      { category: "Database", value: "Oracle" },
      { category: "Cloud", value: "OCI" },
      { category: "Server/WAS", value: "Apache Tomcat 10 / AWS Lightsail/EC2" },
      { category: "Tools", value: "Eclipse / GitHub / DBeaver / ERDCloud / Figma / STS / MobaXterm" },
    ],
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
  const goalsList = document.querySelector(".feature-list-goals"); // 개발 목적 리스트
  const challengesList = document.querySelector(".feature-list-challenges"); // 어려웠던 점 리스트

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
  
        // 개발 목적 업데이트
        goalsList.innerHTML = "";
        project.goals.forEach((goal) => {
          const li = document.createElement("li");
          li.textContent = goal;
          goalsList.appendChild(li);
        });
  
        // 어려웠던 점 업데이트
        challengesList.innerHTML = "";
        project.challenges.forEach((challenge) => {
          const titleSpan = document.createElement("span");
          titleSpan.textContent = challenge.title;
          titleSpan.style.fontSize = "18px";
          titleSpan.style.backgroundColor = "#EFEFF1";
          titleSpan.style.display = "block";
          titleSpan.style.padding = "5px";
          titleSpan.style.marginBottom = "5px";
  
          // 문제점 추가 (강조 스타일 추가)
          const detailsLi = document.createElement("li");
          detailsLi.innerHTML = `<strong style="font-weight: bold;">[문제점]</strong> ${challenge.details}`;

          // 해결 및 배운 점 추가 (강조 스타일 추가)
          const solutionLi = document.createElement("li");
          solutionLi.innerHTML = `<strong style="font-weight: bold;">[해결 및 배운 점]</strong> ${challenge.solution}`;
            
          challengesList.appendChild(titleSpan);
          challengesList.appendChild(detailsLi);
          challengesList.appendChild(solutionLi);
        });

        
  
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
          li.innerHTML = `
            <span class="tech-category">${tech.category}</span> 
            <span class="highlight">${tech.value}</span>
          `;
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
  
          // 기본 이미지로 변경
          modalImage.src = "img/final-main.PNG";
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
    closeModalBtn.style.display = "flex"; // 프로젝트 모달 닫기 버튼 다시 표시
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

  



