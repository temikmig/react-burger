const modalWin = '[class^=modal_modalWin]';
const modalClose = '[data-type="close_modal"]';
const modalOverlay = '[class^=modal-overlay_modalOverlay]';

const ingredientBun = '[data-type="ingredient_bun"]';
const ingredientSauce = '[data-type="ingredient_sauce"]';
const ingredientMain = '[data-type="ingredient_main"]';

const burgerConstructorElementPrice = '[class^=constructor-element__price]';
const burgerConstructorOrderPrice = '[class^=burger-constructor_burgerOrderPrice]';

const burgerConstructorCont = '[data-type="burger_constructor_cont"]';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('login');
    cy.get('input').first().type('t97m@yandex.ru');
    cy.get('input').last().type('hesoyam');
    cy.get('button').click();

    cy.intercept ("POST", "api/orders", { fixture: "order.json" });
  })

  it('Проверка на прогрузку ингредиентов', () => {
    cy.contains('Соберите бургер');
  });

  it('Первое нажатие на "Оформить заказ" при пустом конструкторе', () => {
    cy.get('button').contains('Оформить заказ').click();
    cy.get(modalWin).should('contain', 'Произошла ошибка при получении данных');
    cy.get(modalClose).click();
  });

  it('Нажатие на ингредиент', function(){
    cy.get(ingredientBun).contains('Флюоресцентная булка R2-D3').first().click();
    cy.get(modalWin).should('contain', 'Флюоресцентная булка R2-D3');
    cy.get(modalOverlay).click();
  });

  it('Перетягивание ингредиентов в конструктор', function(){
    cy.get(ingredientBun).first().trigger("dragstart").trigger("dragleave");
    cy.get(burgerConstructorCont).trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");
 
    cy.get(ingredientSauce).eq(1).trigger("dragstart").trigger("dragleave");
    cy.get(burgerConstructorCont).trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");
 
    cy.get(ingredientMain).eq(1).trigger("dragstart").trigger("dragleave");
    cy.get(burgerConstructorCont).trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");
  
    cy.get(ingredientMain).eq(2).trigger("dragstart").trigger("dragleave");
    cy.get(burgerConstructorCont).trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");

    let total = 0;
    let expectedTotal = 0;

    cy.get(burgerConstructorElementPrice).each(price => {
        total = total + parseInt(price.text());
    }).then(() => {
       cy.get(burgerConstructorOrderPrice).invoke('text').then(text => expectedTotal = +text).then(() => {
          expect(total).equal(expectedTotal);
        });
    });

    cy.get('button').contains('Оформить заказ').click();
    cy.get(modalWin, { timeout: 16000 }).should('contain', 'Ваш заказ начали готовить');
  });
})


