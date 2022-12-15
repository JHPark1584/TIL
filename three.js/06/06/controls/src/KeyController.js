export class KeyController {
    constructor() {
        // 생성자
        this.keys = [];

        window.addEventListener('keydown', e => {
            console.log(e.code + ' 누름');
            this.keys[e.code] = true;
        }) // 배열에 추가

        window.addEventListener('keyup', e => {
            console.log(e.code + ' 뗌');
            delete this.keys[e.code];
        }) // 배열에 삭제
    }
}