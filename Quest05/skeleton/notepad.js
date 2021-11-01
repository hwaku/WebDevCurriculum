class Notepad {
    static pTarget;

    constructor() {
        const menuTab = document.querySelector('.tab');
        menuTab.addEventListener('click', () => {
            const menuListView = document.querySelector('.menu-list');
            menuListView.style.display = 'block';
        });
        this.menuListControl();

        this.createTextArea();
        this.saveName();

        this.$editor = document.querySelector("#editor")
        this.makeOpenList();
        this.open();
        this.differentNameSaveFile();

        let openTab = document.querySelector('.menu-tab');
        openTab.addEventListener('click', this.tabChange);

        let openList = document.querySelector('.open-list');
        openList.addEventListener('dblclick', this.openFile);
    }

    createTextArea() { // 새파일 생성
        const newFile = document.querySelector('.new-File');
        newFile.addEventListener('click', () => {
            this.$editor.value = "";
            this.$editor.style.display = "block";
            const saveFile = document.querySelector('.save-File');
            saveFile.style.display = 'block';
            const differentNameSaveFile = document.querySelector('.differentName-SaveFile');
            differentNameSaveFile.style.display = 'block';
        });
    }

    saveName() { // 저장
        const saveFile = document.querySelector('.save-File');
        saveFile.addEventListener('click', () => {
            const input = prompt('저장할 파일 이름을 입력해주세요.');
            if (input === null) {
                return;
            } else if (input === "") {
                alert("파일 이름을 입력하세요.")
                return;
            }
            if (localStorage.length === 0) {
                Notepad.createTab(input);
                const value = document.querySelector('.textarea');
                localStorage.setItem(input, value.value);
                value.value = "";

                const textarea = document.querySelector('.textarea');
                textarea.style.display = 'none';
                const saveFile = document.querySelector('.save-File');
                saveFile.style.display = 'none';
                const differentNameSaveFile = document.querySelector('.differentName-SaveFile');
                differentNameSaveFile.style.display = 'none';

                const listFrame = document.querySelector('.open-list');
                let keyList = document.createElement('li');
                keyList.setAttribute('class', 'key-List')
                listFrame.appendChild(keyList);
                keyList.textContent = input;
            } else {
                for (let i = 0; i < localStorage.length; i++) {
                    if (input !== localStorage.key(i)) {
                        Notepad.createTab(input);
                        const value = document.querySelector('.textarea');
                        localStorage.setItem(input, value.value);
                        value.value = "";

                        const textarea = document.querySelector('.textarea');
                        textarea.style.display = 'none';
                        const saveFile = document.querySelector('.save-File');
                        saveFile.style.display = 'none';
                        const differentNameSaveFile = document.querySelector('.differentName-SaveFile');
                        differentNameSaveFile.style.display = 'none';

                        const listFrame = document.querySelector('.open-list');
                        let keyList = document.createElement('li');
                        keyList.setAttribute('class', 'key-List')
                        listFrame.appendChild(keyList);
                        keyList.textContent = input;
                        break;
                    } else {
                        alert('중복된 파일 이름입니다.');
                    }
                }
            }

        });
    }

    static createTab(inputName) { // 저장 후 탭에 생성
        const createList = document.createElement('li');
        createList.setAttribute('class', 'newTab')
        createList.innerHTML = `<p class="tabText">${inputName}</p>` + '<i class="fas fa-times"></i>';
        const mainTab = document.querySelector('.menu-tab');
        mainTab.appendChild(createList);
        Notepad.closeButton(mainTab);
    }

    static closeButton(mainTab) { // 탭 닫기
        mainTab.addEventListener('click', (e) => {
            if (e.target.tagName === "I") {
                e.target.parentElement.style.display = 'none';
                const textarea = document.querySelector('.textarea');
                textarea.style.display = 'none';
            }
        });
    }

    menuListControl() {
        const tab = document.querySelector('.tab');
        const menuList = document.querySelector('.menu-list');
        const body = document.querySelector('body');
        body.addEventListener('click', (e) => {
            if (e.target !== menuList && e.target !== tab) {
                menuList.style.display = 'none';
            }
        });
    }

    tabChange(e) {

        if (Notepad.pTarget && e.target.tagName === "P") {
            Notepad.indicator();
        }

        const targetKey = e.target;
        if (e.target.classList.contains('newTab') || e.target.tagName === "P") {
            const targetValue = localStorage.getItem(targetKey.textContent);
            const textarea = document.querySelector('.textarea');
            textarea.value = targetValue;
            textarea.style.display = 'block';
        }
        if (e.target.tagName === "P") {
            Notepad.pTarget = targetKey;
        }
    }

    makeOpenList() {
        const listFrame = document.querySelector('.open-list');

        for (let i = 0; i < localStorage.length; i++) {
            let keyList = document.createElement('li');
            keyList.setAttribute('class', 'key-List');
            listFrame.appendChild(keyList);
            keyList.textContent = localStorage.key(i);

            const createList = document.createElement('li');
            createList.setAttribute('class', 'newTab');
            createList.style.display = 'none';
            createList.innerHTML = `<p class="tabText">${localStorage.key(i)}</p>` + '<i class="fas fa-times"></i>';
            const mainTab = document.querySelector('.menu-tab');
            mainTab.appendChild(createList);
            Notepad.closeButton(mainTab);
        }

    }

    open() {
        const openFileClick = document.querySelector('.open-File');
        openFileClick.addEventListener('click', () => {
            const list = document.querySelector('.list-center');
            list.style.display = 'flex';
            const differentName = document.querySelector('.differentName-SaveFile');
            differentName.style.display = 'block';
        })

        const closeBtn = document.querySelector('#file-list-icon');
        closeBtn.addEventListener('click', () => {
            const list = document.querySelector('.list-center');
            list.style.display = 'none';
        });
    }

    openFile(e) {
        const targetKey = e.target.textContent;

        if (e.target.tagName === "LI") {
            const targetValue = localStorage.getItem(targetKey);
            const textarea = document.querySelector('.textarea');
            textarea.value = targetValue;
            textarea.style.display = 'block';
            const list = document.querySelector('.list-center');
            list.style.display = 'none';

            Notepad.createTab(targetKey);
        }

        const listTab = document.querySelector('.list-tab i');
        listTab.addEventListener('click', (e) => {
            if (e.target.tagName === "I") {
                e.target.parentElement.parentElement.style.display = 'none';
            }
        });
    }

    static indicator() {
        const textarea = document.querySelector('.textarea');

        if (localStorage.getItem(Notepad.pTarget.textContent) !== textarea.value) {
            if (confirm('작업중인 내용이 저장되지 않았습니다. 저장하시겠습니까?')) {
                localStorage.setItem(Notepad.pTarget.textContent, textarea.value);
            }
        }
    }

    differentNameSaveFile() {
        const differentName = document.querySelector('.differentName-SaveFile');
        differentName.addEventListener('click', () => {
            this.saveName();
        });

    }
}