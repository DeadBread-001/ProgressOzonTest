/** Класс, представляющий Прогресс-бар. */
export class ProgressBar {
  #state = {
    value: 0,
    isAnimated: false,
    isHidden: false,
  };

  /**
   * Создает Прогресс-бар.
   * @param {HTMLElement} parentNode - Родительский узел для размещения Прогресс-бара.
   * @param {string} [progressBarTitle="Progress"] - Заголовок Прогресс-бара (отображается в верхнем левом углу).
   * @param {object} [initialState] - Начальное состояние Прогресс-бара.
   */
  constructor(
      parentNode,
      progressBarTitle = "Progress",
      initialState = { value: 0, isAnimated: false, isHidden: false },
  ) {
    this.#state = { ...initialState };

    if (!parentNode || !(parentNode instanceof HTMLElement)) {
      return;
    }

    const container = createStyledDiv("container");
    container.appendChild(createStyledDiv("title", progressBarTitle));

    const progressBar = createStyledDiv("progressBar");
    const progressCircleClasses = ["progressBar__circle"];
    if (this.#state.isHidden) {
      progressCircleClasses.push("progressBar__circle-hidden");
    }

    if (this.#state.isAnimated) {
      progressCircleClasses.push("progressBar__circle-animated");
    }

    const progressCircle = createStyledDiv(progressCircleClasses);
    progressBar.appendChild(progressCircle);
    progressBar.appendChild(
        createSettingsSection(
            this.#state.value,
            this.#state.isAnimated,
            this.#state.isHidden,
        ),
    );
    container.appendChild(progressBar);

    parentNode.appendChild(container);

    this.addProgressHandler();
    if (this.#state.value) {
      this.setProgress(this.#state.value);
    }

    window.addEventListener("orientationchange", () => {
      progressBar.style.flexDirection =
          screen.orientation.type.match(/\w+/)[0] === "landscape"
              ? "row"
              : "column";
    });

    this.addClickHandler("#animate", () => this.toggleAnimation());
    this.addClickHandler("#hide", () => this.toggleVisibility());
  }

  /**
   * Устанавливает новое значение прогресса.
   * @param {number} newValue - Новое значение прогресса.
   * @return {void}
   */
  setProgress(newValue) {
    const valueInputField = document.querySelector("#value");

    valueInputField.value = newValue;
    this.#state.value = newValue;
    valueInputField.dispatchEvent(new Event("input", { bubbles: true }));
  }

  /**
   * Переключает состояние анимации прогресса (вращение).
   */
  toggleAnimation() {
    this.#state.isAnimated = !this.#state.isAnimated;
    toggleClass(".progressBar__circle", "progressBar__circle-animated");
    const animateToggle = document.querySelector("#animate");
    if (animateToggle) {
      animateToggle.checked = this.#state.isAnimated;
    }
  }

  /**
   * Переключает видимость прогресс-бара.
   */
  toggleVisibility() {
    this.#state.isHidden = !this.#state.isHidden;
    toggleClass(".progressBar__circle", "progressBar__circle-hidden");
    const hideToggle = document.querySelector("#hide");
    if (hideToggle) {
      hideToggle.checked = this.#state.isHidden;
    }
  }

  /**
   * Добавляет обработчик прогресса.
   */
  addProgressHandler() {
    const valueInputField = document.querySelector("#value");
    const progressCircle = document.querySelector(".progressBar__circle");

    let animationId;
    let targetValue = 0;
    let currentValue = 0;

    const animate = () => {
      if (currentValue !== targetValue) {
        currentValue += (targetValue - currentValue) / 10; // Smooth animation
        progressCircle.style.setProperty("--progress", `${currentValue}`);
        animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    valueInputField.addEventListener("input", (e) => {
      const newInputValue = validateInput(e.target.value);
      e.target.value = newInputValue;

      targetValue = +newInputValue;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      animationId = requestAnimationFrame(animate);
    });
  }

  /**
   * Добавляет обработчик клика по элементу.
   * @param {string} selector - Селектор элемента.
   * @param {function} handler - Функция-обработчик клика.
   */
  addClickHandler(selector, handler) {
    const clickedNode = document.querySelector(selector);
    clickedNode.addEventListener("click", handler);
  }
}

/**
 * Проверяет строку на число от 0 до 100.
 * @param {string} inputString - Строка для проверки.
 * @return {number} Число от 0 до 100 или 0, если не число.
 */
function validateInput(inputString) {
  const trimmedInput = inputString.trim();
  if (trimmedInput === "" || isNaN(trimmedInput)) {
    return 0;
  }

  const value = parseInt(trimmedInput);
  return Math.max(0, Math.min(100, value));
}

/**
 * Добавляет или удаляет класс у элемента по селектору.
 * @param {string} selector - Селектор элемента.
 * @param {string} className - Имя класса.
 */
function toggleClass(selector, className) {
  const searchingNode = document.querySelector(selector);
  searchingNode.classList.toggle(className);
}

/**
 * Создает секцию настроек.
 * @param {number} value - Начальное значение прогресса.
 * @param {boolean} isAnimated - Флаг анимации.
 * @param {boolean} isHidden - Флаг видимости.
 * @return {HTMLElement} Элемент секции настроек.
 */
function createSettingsSection(value, isAnimated, isHidden) {
  const settings = createStyledDiv(["progressBar__settings", "settings"]);
  settings.appendChild(
      createInputFieldWithLabel(
          "settings__property",
          "settings__input",
          "Value",
          value,
          "input",
          "value",
      ),
  );
  settings.appendChild(
      createInputFieldWithLabel(
          "settings__property",
          "settings__checkbox",
          "Animate",
          isAnimated,
          "checkbox",
          "animate",
      ),
  );
  settings.appendChild(
      createInputFieldWithLabel(
          "settings__property",
          "settings__checkbox",
          "Hide",
          isHidden,
          "checkbox",
          "hide",
      ),
  );
  return settings;
}

/**
 * Создает элемент ввода с текстом.
 * @param {string} className - Класс для обертки ввода.
 * @param {string} inputClassName - Класс для элемента ввода.
 * @param {string} inputText - Текст рядом с полем ввода.
 * @param {number|boolean} inputValue - Значение ввода.
 * @param {string} inputType - Тип ввода.
 * @param {string|number} id - ID ввода.
 * @return {HTMLElement} Элемент ввода с текстом.
 */
function createInputFieldWithLabel(
    className = "",
    inputClassName = "",
    inputText = "",
    inputValue = 0,
    inputType = "",
    id = String(Date.now()),
) {
  const inputContainer = createStyledDiv(className);
  const input = document.createElement("input");

  input.type = inputType;
  input.id = id;
  input.classList.add(inputClassName);

  const text = document.createElement("span");
  text.textContent = inputText;
  inputContainer.appendChild(input);

  if (inputType === "checkbox") {
    input.checked = inputValue;
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.classList.add("toggle");
    inputContainer.appendChild(label);
  } else {
    input.value = inputValue;
  }

  inputContainer.appendChild(text);
  return inputContainer;
}

/**
 * Создает div элемент с классами и текстом.
 * @param {string|string[]} className - Класс или массив классов для div элемента.
 * @param {string} text - Текст внутри div элемента.
 * @return {HTMLElement} Созданный div элемент.
 */
function createStyledDiv(className = "", text = "") {
  const divElem = document.createElement("div");

  divElem.classList.add(
      ...(Array.isArray(className) ? className : [className]),
  );
  divElem.textContent = text;

  return divElem;
}
