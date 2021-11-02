class desktop { // 바탕화면 생성
    constructor() {
        this.main = document.querySelector('.desktop');
        this.newScreen = document.createElement('div');
        this.newScreen.setAttribute('class', 'desktop-div');
        this.main.appendChild(this.newScreen);

        this.iconInput = window.prompt('아이콘 생성 개수를 입력하세요.');
        for (let i = 0; i < this.iconInput; i++) {
            this.newScreen.appendChild(newIcon('fas fa-ice-cream'));
        }
        this.iconFolder = window.prompt('폴더 생성 개수를 입력하세요.');
        for (let i = 0; i < this.iconFolder; i++) {
            let icon = newIcon('fas fa-folder');
            this.newScreen.appendChild(icon);
            let folder = this.newFolder();
            this.folderDoubleClick(icon, folder);
            this.closeFolder(folder);
        }
    }
    newFolder() { // 폴더 만들기
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'folder-div');
        this.newScreen.appendChild(newDiv);
        const closeButton = document.createElement('div');
        closeButton.classList.add('close-Button');
        newDiv.appendChild(closeButton);
        const closeButtonIcon = document.createElement('i');
        closeButtonIcon.classList.add('fas', 'fa-times');
        closeButton.appendChild(closeButtonIcon);
        dragFile(newDiv);
        return {newDiv, closeButtonIcon};
    }

    folderDoubleClick(icon, folder) { // 폴더 열기
        icon.addEventListener('dblclick', function () {
            console.log(folder.newDiv);
            folder.newDiv.style.display='block';
        });
    }

    closeFolder(folder) { // 폴더 닫기
        folder.closeButtonIcon.addEventListener('click', () => {
            folder.newDiv.style.display='none';
        })
    }
}


function newIcon(classValue) { // 아이콘 생성 함수
    const icon = document.createElement('i');
    icon.setAttribute("class", classValue);
    dragFile(icon);
    return icon;
}

function dragFile(icon) { // 각 요소 움직이기
    const target = icon;

    // 이미지가 찍혀도 div가 움직이도록.

    const offset = {x: 0, y: 0};
    const initialMousePos = {x: 0, y: 0};

    // mousemove
    const moveHandler = e => {
        // initialMousePos = 초기 좌표, client = 현재 좌표, offset = 이동한 좌표
        // 이동한 좌표 = 현재 좌표 - 초기 좌표
        offset.x = e.clientX - initialMousePos.x;
        offset.y = e.clientY - initialMousePos.y;
        target.style.transform = `translate3d(${offset.x}px,${offset.y}px, 0)`;

    };

    // mousedown
    target.addEventListener('mousedown', e => {
        // 초기좌표 = 이동 직전 좌표 - 이동한 좌표 > 이동 직전 좌표에서 이동한 좌표를 마이너스하여 새로운 초기 좌표 설정
        initialMousePos.x = e.clientX - offset.x;
        initialMousePos.y = e.clientY - offset.y;
        document.addEventListener('mousemove', moveHandler);
    });

    // mouseup
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveHandler)
    });

}

// context menu 생성
// function createContextMenu(event){
//     // 기본 Context Menu 차단
//     event.preventDefault();
//
//     const menuList = document.getElementById('context_menu');
//
//     // 노출 설정
//     menuList.style.display = 'block';
//
//     // 위치 설정
//     menuList.style.top = `${event.pageY}px`;
//     menuList.style.left = `${event.pageX}px`;
// }
//
// // context menu 삭제
// function removeContextMenu(event){
//     const menuList = document.getElementById('context_menu');
//
//     // 노출 초기화
//     menuList.style.display = 'none';
//     menuList.style.top = null;
//     menuList.style.left = null;
// }
// document.addEventListener('contextmenu', createContextMenu, false);
// document.addEventListener('click', removeContextMenu, false);