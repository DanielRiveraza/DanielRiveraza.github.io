lass MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Daniel Rivera Zavala`;
  }
}
customElements.define("mi-footer", MiFooter);
