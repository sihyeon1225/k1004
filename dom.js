window.onload = function() {
    const plants = [
        'plant1', 'plant2', 'plant3', 'plant4', 'plant5',
        'plant6', 'plant7', 'plant8', 'plant9', 'plant10',
        'plant11', 'plant12', 'plant13', 'plant14'
    ];

    // 초기 위치 설정
    const initialPositions = [
        { top: '30%', left: '20%' }, { top: '40%', left: '20%' },
        { top: '50%', left: '20%' }, { top: '60%', left: '20%' },
        { top: '70%', left: '20%' }, { top: '80%', left: '20%' },
        { top: '90%', left: '20%' }, { top: '30%', left: '73%' },
        { top: '40%', left: '73%' }, { top: '50%', left: '73%' },
        { top: '60%', left: '73%' }, { top: '70%', left: '73%' },
        { top: '80%', left: '73%' }, { top: '90%', left: '73%' },
    ];

    // 각 식물에 드래그 기능 및 초기 위치 설정
    plants.forEach((plantId, index) => {
        const plant = document.getElementById(plantId);
        const { top, left } = initialPositions[index];
        plant.style.position = 'absolute';
        plant.style.top = top;
        plant.style.left = left;
        plant.ondblclick = () => bringToFront(plant);
        dragElement(plant);
    });
};

// 선택한 요소를 가장 위로 가져오는 함수
function bringToFront(plant) {
    document.querySelectorAll('.plant').forEach(p => (p.style.zIndex = '0'));
    plant.style.zIndex = '1';
}

// 드래그 기능을 설정하는 함수
function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onpointerdown = function(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = onDrag;
        document.onpointerup = endDrag;
    };

    function onDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function endDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
