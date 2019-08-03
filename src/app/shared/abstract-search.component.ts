export abstract class AbstractSearchComponent {
  private timeout;

  constructor() {}

  protected abstract search(filter?: string): void;

  handleSearch(filter?: string) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.search(filter), 500);
  }
}
