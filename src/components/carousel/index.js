
/**
 * items: [{
 *  title: string,
    description: string,
    img: string,
    link: string
 * }]
 */
class Carousel {

  #currentStep = 1;
  #isDisabled = false;
  #container;
  #items;
  #width;

  constructor(target, items) {

    this.#items = items;

    const listItems = this.#createItems();
    const $container = this.#createContainer();
    const $actions = this.#createActions();
    const $steps = this.#createSteps();
    const $screen = $container.find(".c-carousel__screen");

    $screen.append($actions);
    $screen.find(".c-carousel__screen__track").append(listItems);
    $container.append($steps);
    this.#container = $container;

    this.#bindEvents();

    $(target).prepend($container);
    setTimeout(() => this.#width = $container.width() + 20, 50);
  }

  #bindEvents() {

    const $container = this.#container;

    $container.find('[name="next_c_button"]').on('click', this.#handleAction.bind(this));
    $container.find('[name="prev_c_button"]').on('click', this.#handleAction.bind(this));
    $container.find('.c-carousel__item').on({
      mouseenter: this.#onHoverIn,
      mouseleave: this.#onHoverOut
    });

    $container.find('.c-carousel-step__item').on('click', this.#handleStepAction.bind(this));
  }

  #createContainer() {

    return $(`
      <div class="c-carousel">
        <div class="c-carousel__screen card-template">
          <div class="c-carousel__screen__track"></div>
        </div>
      </div>
    `);
  }

  #createActions() {

    return $(`
      <div class="c-carousel__buttons">
          <button name="prev_c_button" class="c-carousel__button c-carousel__button--prev c-carousel__button--disabled">
              <i class="c-carousel__button__icon fa-solid fa-chevron-left"></i>
          </button>
          <button name="next_c_button" class="c-carousel__button c-carousel__button--next">
              <i class="c-carousel__button__icon fa-solid fa-chevron-right"></i>
          </button>
      </div>
    `);
  }

  #createItems() {

    const listItems = [];
    for (const item of this.#items) {
      listItems.push(`
        <div class="c-carousel__item card-3d-effect">
            <img class="c-carousel__item__img" src="${item.img}">
            <div class="c-carousel__item__info">
                <div class="c-carousel__item__info__effect">
                    <h3 class="c-carousel__item__title">${item.title}</h3>
                    <p class="c-carousel__item__description">${item.description}</p>
                    <a target="__blank" href="${item.link}" class="c-carousel__item__actions btn btn--primary glare-effect" rel="nofollow, noreferrer, noopener, external">
                      Visitar
                    </a>
                </div>
            </div>
        </div>`);
    };

    return listItems;
  }

  #createSteps() {

    const $carouselStep = $(`<div class="c-carousel-step"></div>`);
    for (let i = 0; i < this.#items.length; i++) {
      const $step = $(`<div class="c-carousel-step__item" data-c-screen="${i + 1}" />`);
      $carouselStep.append($step);
    }

    $carouselStep.children(':first').addClass('c-carousel-step__item--active');
    return $carouselStep;
  }

  #onHoverIn(e) {
    $(e.currentTarget).addClass('c-carousel__item--hovered');
  }

  #onHoverOut(e) {
    $(e.currentTarget).removeClass('c-carousel__item--hovered');
  }

  #setCurrentItem(step) {

    const newPosition = step ?? this.#currentStep;

    this.#container.find(".c-carousel__screen__track").css('transform', `translateX(-${this.#width * (newPosition - 1)}px)`);
    this.#container.find('.c-carousel-step__item').removeClass('c-carousel-step__item--active');
    this.#container.find(`[data-c-screen="${newPosition}"]`).addClass('c-carousel-step__item--active');

    if (newPosition === 0)
      return;

    this.#currentStep = newPosition;
    this.#toggleActionsDisplay();
  }

  #toggleActionsDisplay() {

    const showPrev = this.#currentStep > 1;
    const showNext = this.#currentStep < this.#items.length;

    this.#container.find(".c-carousel__button").addClass("c-carousel__button--disabled");
    if (showNext)
      this.#container.find('[name="next_c_button"]').removeClass('c-carousel__button--disabled');

    if (showPrev)
      this.#container.find('[name="prev_c_button"]').removeClass('c-carousel__button--disabled');
  }

  #handleAction(e) {

    if (this.#isDisabled)
      return;

    this.#isDisabled = true;

    const isPrev = $(e.currentTarget).is('[name="prev_c_button"]');
    if (isPrev)
      this.#setCurrentItem(this.#currentStep - 1);
    else
      this.#setCurrentItem(this.#currentStep + 1);

    setTimeout(() => this.#isDisabled = false, 200);
  }

  #handleStepAction(e) {

    const step = parseInt($(e.currentTarget).attr('data-c-screen'));
    this.#setCurrentItem(step);
  }

  updateCarouselIitemImage() {

    const isDark = $('body').is('.theme--dark');
    const items = this.#container.find('.c-carousel__item');
    for (let i = 0; i < items.length; i++) {

      let path = $(items[i]).find('.c-carousel__item__img').attr('src');
      if (isDark)
        path = path.replace('_light', '_dark');
      else
        path = path.replace('_dark', '_light');

      $(items[i]).find('.c-carousel__item__img').attr('src', path);
    }
  }

  resetCarousel() {

    this.#width = this.#container.width() + 20;
    setTimeout(() => this.#setCurrentItem(), 50);
  }
}