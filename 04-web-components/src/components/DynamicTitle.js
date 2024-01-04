class DynamicTitle extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
  
      //component´s base <h1>Pedro</h1>
      const componentRoot = document.createElement("h1");
      componentRoot.textContent = this.getAttribute("title");
  
      //component´s style
      const style = document.createElement("style");
      style.textContent = `
        h1{
          color: red;
        }
      `;
  
      //send to shadow DOM
      shadow.appendChild(componentRoot);
      shadow.appendChild(style);
    }
  }
  
  customElements.define("dynamic-title", DynamicTitle);