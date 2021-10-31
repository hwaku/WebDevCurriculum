class Notepad {
    static tab = document.querySelector('.tab');
    static textarea = document.querySelector('.textarea');
    static menuList = document.querySelector('.menu-list');
    static newFile = document.querySelector('.new-File');
    static openFile = document.querySelector('.open-File');
    static saveFile = document.querySelector('.save-File');
    static differentNameSaveFile = document.querySelector('.differentName-SaveFile');

    constructor() {
        Notepad.tab.addEventListener('click', (e) =>{
            this.menuLook();
        });

        Notepad.menuList.addEventListener('click', (e) =>{
           switch (e.target.className){
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
    }

    // 메뉴 열기
    menuLook(){
        Notepad.menuList.style.display = 'block';
    }

    // 새파일
    newFile(){
    this.textReset();
    this.textLook();
    this.saveLook();

    }

    textReset(){
        Notepad.textarea.Value = '';
    }

    textLook(){
        Notepad.textarea.style.display = 'block';
    }

    // 저장 메뉴 보기
    saveLook(){
        Notepad.saveFile.style.display = 'block';
    }

    // 다른이름 저장 보기
    // difNameSaveLook(){
    //     Notepad.differentNameSaveFile.style.display = 'block';
    // }

    // 저장
    saveFile(){

    }

    // 열기

    openFile(){

    }

    // 다른이름으로 저장
    differentNameSaveFile(){

    }

}

