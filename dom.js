// 각 식물을 드래그 가능하게 설정
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        // 포인터 시작 위치를 설정
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // 포인터 이동 시의 이벤트와 드래그 끝 이벤트 감지
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        // 현재 위치에서 얼마나 이동했는지 계산
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // 드래그된 요소의 새로운 위치 계산
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        // 드래그가 끝나면 이벤트 리스너 제거
        document.onpointerup = null;
        document.onpointermove = null;
    }
}



window.onload = function() {
    const plants = [
        'plant1', 'plant2', 'plant3', 'plant4', 'plant5',
        'plant6', 'plant7', 'plant8', 'plant9', 'plant10',
        'plant11', 'plant12', 'plant13', 'plant14'
    ];

    // 초기 위치 설정 (상하로 한 줄에 7개, 좌우로 2줄)
    const initialPositions = [
        { top: '30%', left: '20%' },   // plant1
        { top: '40%', left: '20%' },  // plant2
        { top: '50%', left: '20%' },  // plant3
        { top: '60%', left: '20%' },  // plant4
        { top: '70%', left: '20%' },  // plant5
        { top: '80%', left: '20%' },  // plant6
        { top: '90%', left: '20%' },  // plant7
        { top: '30%', left: '73%' },   // plant8
        { top: '40%', left: '73%' },  // plant9
        { top: '50%', left: '73%' },  // plant10
        { top: '60%', left: '73%' },  // plant11
        { top: '70%', left: '73%' },  // plant12
        { top: '80%', left: '73%' },  // plant13
        { top: '90%', left: '73%' },  // plant14
    ];

    // 식물 설정
    for (let i = 0; i < plants.length; i++) {
        const plant = document.getElementById(plants[i]);
        dragElement(plant);
        const { top, left } = initialPositions[i];
        plant.style.position = 'absolute';
        plant.style.top = top;
        plant.style.left = left;

        // 더블 클릭 시 z-index를 증가시켜 가장 위로 가져오기
        plant.ondblclick = (function(plant) {
            return function() {
                bringToFront(plant);
            };
        })(plant);
    }
};

function bringToFront(plant) {
    // 모든 식물의 z-index를 기본값으로 설정
    const plants = document.querySelectorAll('.plant');
    plants.forEach(p => {
        p.style.zIndex = '0'; // 기본 z-index 설정
    });
    // 선택된 식물의 z-index를 가장 높게 설정
    plant.style.zIndex = '1'; // 가장 높은 z-index 설정
}

// 식물 설정
for (let i = 0; i < plants.length; i++) {
    const plant = document.getElementById(plants[i]);
    dragElement(plant);
    const { top, left } = initialPositions[i];
    plant.style.position = 'absolute';
    plant.style.top = top;
    plant.style.left = left;

    // 더블 클릭 시 z-index를 증가시켜 가장 위로 가져오기
    plant.ondblclick = (function(plant) {
        return function() {
            bringToFront(plant);
        };
    })(plant);
}

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

window.onload = function() {
    const plants = [
        'plant1', 'plant2', 'plant3', 'plant4', 'plant5',
        'plant6', 'plant7', 'plant8', 'plant9', 'plant10',
        'plant11', 'plant12', 'plant13', 'plant14'
    ];

    // 초기 위치 설정 (두 줄로 7개씩 배치)
    const initialPositions = [
        { top: '30%', left: '20%' },   // plant1
        { top: '40%', left: '20%' },  // plant2
        { top: '50%', left: '20%' },  // plant3
        { top: '60%', left: '20%' },  // plant4
        { top: '70%', left: '20%' },  // plant5
        { top: '80%', left: '20%' },  // plant6
        { top: '90%', left: '20%' },  // plant7
        { top: '30%', left: '73%' },   // plant8
        { top: '40%', left: '73%' },  // plant9
        { top: '50%', left: '73%' },  // plant10
        { top: '60%', left: '73%' },  // plant11
        { top: '70%', left: '73%' },  // plant12
        { top: '80%', left: '73%' },  // plant13
        { top: '90%', left: '73%' },  // plant14
    ];

    // 식물 설정
    for (let i = 0; i < plants.length; i++) {
        const plant = document.getElementById(plants[i]);
        dragElement(plant);
        const { top, left } = initialPositions[i];
        plant.style.position = 'absolute';
        plant.style.top = top;
        plant.style.left = left;
    }
};

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}