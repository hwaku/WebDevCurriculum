class Notepad {
    static pTarget;
    static tab = document.querySelector('.tab');
    static textarea = document.querySelector('.textarea');
    static menuList = document.querySelector('.menu-list');
    static openList = document.querySelector('.open-list');
    static menu = document.querySelector('.menu');
    static body = document.querySelector('body');
    static listContain = document.querySelector('.list-contain');
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
                    break;
            }
        });

        Notepad.menuList.addEventListener('click', (e) => {
            switch (e.target.className) {
                case 'new-File':
                    this.newFile();
                    break;
                case 'open-File':
                    this.open(e);
                    break;
                case 'save-File':
                    this.save();
                    break;
                case 'differentName-SaveFile':
                    this.differentNameSave();
                    break;
            }
        });

        Notepad.body.addEventListener('click', (e) => {
            this.menuControl(e);
        });

        this.addOpenList();
    }

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

    save() {
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
            this.saveFile(name);
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                if (name !== localStorage.key(i)) {
                    console.log(localStorage.key(i));
                    this.saveFile(name);
                    break;
                } else {
                    alert('중복된 파일 이름입니다.');
                }
            }
        }
    }

    saveFile(name) {
        this.createTab(name);
        this.localstorageSave(name);
        this.valueReset();
        this.none(Notepad.textarea);
        this.none(Notepad.saveFile);
        this.none(Notepad.differentNameSaveFile);
        this.createOpenList(name);
    }

    localstorageSave(name) {
        localStorage.setItem(name, Notepad.textarea.value);
    }

    valueReset() {
        Notepad.textarea.value = '';
    }

    createOpenList(name) {
        const li = this.createLI()
        this.setAttribute(li, 'class', 'file-list');
        this.appendChild(Notepad.openList, li);
        this.naming(li, name)
    }

    addOpenList(){
        for(let i = 0; i < localStorage.length; i++){
            const li = this.createLI();
            this.setAttribute(li, 'class', 'file-list');
            this.appendChild(Notepad.openList, li);
            li.textContent = localStorage.key(i);
        }
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

    open() {
        this.block(Notepad.listContain);
        this.block(Notepad.differentNameSaveFile);
        this.closeList();
        this.openFile();
        this.closeOpenList();
    }

    closeList() {
        const closeBtn = document.querySelector('#file-list-icon');
        closeBtn.addEventListener('click', () => {
            this.none(Notepad.listContain);
        })
    }

    openFile() {
        Notepad.listContain.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const value = this.targetValue(e);
                this.pasteTargetValue(value);
                this.block(Notepad.textarea);
                this.none(Notepad.listContain);
                this.createTab(value);
            }
        });
    }

    closeOpenList(){
        const closeBtn = document.querySelector('.top-bar i')
        closeBtn.addEventListener('click', (e) => {
            if(e.target.tagName === 'I'){
                this.none(e.target.parentElement.parentElement);
            }
        })
    }

    differentNameSave() {
        this.save();
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
            this.indicator();
        }
    }

    indicator(){
        if(localStorage.getItem(Notepad.pTarget.textContent) !== Notepad.textarea.value){
            if(confirm('작업중인 내용이 저장되지 않았습니다. 저장하시겠습니까?')){
                localStorage.setItem(Notepad.pTarget.textContent, Notepad.textarea.value);
            }
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
        Notepad.textarea.value = value;
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

    flex(value) {
        value.style.display = 'none';
    }
}

