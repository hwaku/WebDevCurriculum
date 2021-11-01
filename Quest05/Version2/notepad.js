class Notepad {
    static pTarget;
    static tab = document.querySelector('.tab');
    static textarea = document.querySelector('.textarea');
    static menuList = document.querySelector('.menu-list');
    static menu = document.querySelector('.menu');
    static body = document.querySelector('body');
    static listContain = document.querySelector('.list-contain');
    static openFile = document.querySelector('.open-File');
    static saveFile = document.querySelector('.save-File');
    static differentNameSaveFile = document.querySelector('.differentName-SaveFile');

    constructor() {
        Notepad.tab.addEventListener('click', (e) => {
            switch (e.target.className) {
                case 'menu':
                    this.menuLook();
                    break;
                case 'newTab':
                    this.tabChange(e);
            }
        });

        Notepad.menuList.addEventListener('click', (e) => {
            switch (e.target.className) {
                case 'new-File':
                    this.newFile();
                    break;
                case 'open-File':
                    this.openFile();
                    break;
                case 'save-File':
                    this.saveFile();
                    break;
                case 'differentName-SaveFile':
                    this.differentNameSaveFile();
                    break;
            }
        });

        Notepad.body.addEventListener('click', (e) => {
            this.menuControl(e);
        })
    }

    // 새파일
    newFile() {
        this.textReset();
        this.textLook();
        this.saveLook();
    }

    textReset() {
        Notepad.textarea.Value = '';
    }

    textLook() {
        this.block(Notepad.textarea);
    }

    saveLook() {
        this.block(Notepad.saveFile);
    }

    // 다른이름 저장 보기
    // difNameSaveLook(){
    //     Notepad.differentNameSaveFile.style.display = 'block';
    // }

    // 저장
    saveFile() {
        const name = this.saveName();

        this.emptyCheck(name);
    }

    saveName() {
        return prompt('저장할 파일 이름을 입력해주세요.');
    }

    emptyCheck(name) {
        if (name === null) {

        } else if (name === "") {
            alert("파일 이름을 입력하세요.")

        } else {
            this.duplicateCheck(name);
        }
    }

    duplicateCheck(name) {
        if (localStorage.length === 0) {
            this.save(name);
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                if (name !== localStorage.key(i)) {
                    this.save(name);
                    break;
                } else {
                    alert('중복된 파일 이름입니다.');
                }
            }
        }
    }

    save(name) {
        const openList = document.querySelector('.open-list');
        this.createTab(name);
        this.localstorageSave(name);
        this.valueReset();
        this.none(Notepad.textarea);
        this.none(Notepad.saveFile);
        this.none(Notepad.differentNameSaveFile);
        this.createOpenList(openList, name);
    }

    localstorageSave(name) {
        localStorage.setItem(name, Notepad.textarea.value);
    }

    valueReset() {
        Notepad.textarea.value = '';
    }

    createOpenList(openList, name) {
        const li = this.createLI()
        this.setAttribute(li, 'class', 'File-list');
        this.appendChild(openList, li);
        this.naming(li, name)
    }

    createLI() {
        return document.createElement('li');
    }

    setAttribute(tag, name, value) {
        tag.setAttribute(name, value);
    }

    appendChild(parent, child) {
        parent.appendChild(child);
    }

    naming(li, name) {
        li.textContent = name;
    }

    // 열기

    openFile() {
        this.flex(Notepad.listContain);
        this.block(Notepad.differentNameSaveFile);

    }

    // 다른이름으로 저장
    differentNameSaveFile() {

    }

    menuLook() {
        this.block(Notepad.menuList);
    }

    createTab(name) {
        const li = this.createLI();
        this.setAttribute(li, 'class', 'newTab');
        this.createTabName(li, name);
        this.appendChild(Notepad.tab, li);
        this.closeButton();
    }

    createTabName(tag, name) {
        tag.innerHTML = `<p class="tabText">${name}</p>` + '<i class="fas fa-times"></i>';
    }

    closeButton() {
        Notepad.tab.addEventListener('click', (e) => {
            if (e.target.tagName === 'I') {
                this.none(e.target.parentElement);
                this.none(Notepad.textarea);
                Notepad.pTarget = '';
            }
        });
    }

    menuControl(e) {
        if (e.target !== Notepad.menuList && e.target !== Notepad.menu) {
            this.none(Notepad.menuList);
        }
    }

    tabChange(e) {
        this.pTargetCheck(e);
        this.targetCompare();
        this.targetSave(e, e.target);
    }

    pTargetCheck(e) {
        if (Notepad.pTarget && e.target.tagName === 'P') {
            // 인디케이터 넣으셈
        }
    }

    targetCompare(e) {
        if (e.target.classList.contains('newTab') || e.target.tagName === "P") {
            const value = this.targetValue(e);
            this.pasteTargetValue(value);
        }
    }

    targetValue(e) {
        return localStorage.getItem(e.target.textContent);
    }

    pasteTargetValue(value) {
        Notepad.textarea = value;
    }

    targetSave(e, targetKey) {
        if (e.target.tagName === 'P') {
            Notepad.pTarget = targetKey;
        }
    }

    block(value) {
        value.style.display = 'block';
    }

    none(value) {
        value.style.display = 'none';
    }

    flex(value){
        value.style.display = 'none';
    }
}

