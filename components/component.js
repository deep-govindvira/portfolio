const FILE_PATH = './components';

class Component {
    constructor(name, element) {
        this.name = name;
        this.element = element;
    }
    // path
    get htmlPath() {
        return `${FILE_PATH}/${this.name}/${this.name}.html`;
    }
    get cssPath() {
        return `${FILE_PATH}/${this.name}/${this.name}.css`;
    }
    get jsPath() {
        return `${FILE_PATH}/${this.name}/${this.name}.js`;
    }
    // html
    async loadHtml() {
        // console.log(`Loading ${this.name} html`);
        fetch(this.htmlPath).then(r => r.text()).then(content => {
            this.element.innerHTML = content;
        });
    }
    removeHtml() {
        // console.log(`Removing ${this.name} html`);
        this.element.innerHTML = "";
    }
    // css
    loadCss() {
        // console.log(`Loading ${this.name} css`);
        return new Promise((resolve, reject) => {
            let head  = document.getElementsByTagName('head')[0];
            let link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.id = this.cssPath;
            link.href = this.cssPath;
            link.media = 'all';
            head.appendChild(link);
            resolve('css loaded');
        });
    }
    removeCss() {
        // console.log(`Removing ${this.name} css`);
        return new Promise((resolve, reject) => {
            let ele = document.getElementById(this.cssPath);
            if(ele) {
                ele.remove();
                resolve('css removed');
            }
        });
    }
    // js
    loadJs() {
        // console.log(`Loading ${this.name} js`);
        return new Promise((resolve, reject) => {
            let head  = document.getElementsByTagName('head')[0];
            let script  = document.createElement('script');
            script.type = 'text/javascript';
            script.id = this.jsPath;
            script.src = this.jsPath;
            head.appendChild(script);
            resolve('js loaded');
        })
    }
    removeJs() {
        // console.log(`Removing ${this.name} js`);
        return new Promise((resolve, reject) => {
            let ele = document.getElementById(this.jsPath);
            if(ele) {
                ele.remove();
                resolve('js removed');
            }
        });
    }
    // component
    async loadComponent() {
        // console.log(`Loading ${this.name} component`);
        if(this.name != 'header' && this.name != 'footer') {
            this.element.innerHTML = `<i class="fas fa-spinner"></i> &nbsp; Loading ${this.name} section ...`;
        }
        await this.loadHtml();
        await this.loadCss();
        await this.loadJs();
    }
    async removeComponent() {
        // console.log(`Removing ${this.name} component`);
        this.removeHtml();
        await this.removeCss();
        await this.removeJs();
    }
}
