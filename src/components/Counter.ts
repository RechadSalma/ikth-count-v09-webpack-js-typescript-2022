interface counterInterface {
  increment(): void;
  decrement(): void;
  reset(): void;
  applyEventHandlerOnCounterButtons(): void;
  updateCounterNumberElement(): void;
  render(): string;
}

class Counter implements counterInterface {
  counterNumber: number;

  constructor() {
    this.counterNumber = 0;
  }

  increment = () => {
    this.counterNumber += 1;
  };

  decrement = () => {
    this.counterNumber -= 1;
  };

  reset = () => {
    this.counterNumber = 0;
  };

  applyEventHandlerOnCounterButtons() {
    const buttonGroups = document.querySelector(
      ".my-3 .btn-group"
    ) as HTMLDivElement;

    buttonGroups.addEventListener("click", (event): void => {
      const clickedButton: HTMLElement = event.target as HTMLElement;

      if (clickedButton.textContent === "Increment") {
        this.increment();
        this.updateCounterNumberElement();
      } else if (clickedButton.textContent === "Decrement") {
        this.decrement();
        this.updateCounterNumberElement();
      } else if (clickedButton.textContent === "Reset") {
        this.reset();
        this.updateCounterNumberElement();
      }
    });
  }

  updateCounterNumberElement() {
    const counterNumberElement = document.querySelector(
      ".my-3 .mb-3 code.fs-1"
    ) as HTMLElement;

    counterNumberElement.textContent = this.counterNumber.toString();
  }

  render() {
    return `
      <div class='my-3'>
        <div class='mb-3'>
          <code class="fs-1">iK counter number</code>
        </div>  

        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-danger">Increment</button>
          <button type="button" class="btn btn-warning">Decrement</button>
          <button type="button" class="btn btn-success">Reset</button>
        </div>
    `;
  }
}

export default new Counter();
