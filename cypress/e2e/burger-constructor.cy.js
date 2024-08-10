describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
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
    cy.get('[class^=modal_modalWin]').should('contain', 'Произошла ошибка при получении данных');
    cy.get('[data-type="close_modal"]').click();
  });

  it('Нажатие на ингредиент', function(){
    cy.get('[data-type="ingredient_bun"]').contains('Флюоресцентная булка R2-D3').first().click();
    cy.get('[class^=modal_modalWin]').should('contain', 'Флюоресцентная булка R2-D3');
    cy.get('[class^=modal-overlay_modalOverlay]').click();
  });

  it('Перетягивание ингредиентов в конструктор', function(){
    cy.get('[data-type="ingredient_bun"]').first().trigger("dragstart").trigger("dragleave");
    cy.get('[data-type="burger_constructor_cont"]').trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");
 
    cy.get('[data-type="ingredient_sauce"]').eq(1).trigger("dragstart").trigger("dragleave");
    cy.get('[data-type="burger_constructor_cont"]').trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");
 
    cy.get('[data-type="ingredient_main"]').eq(1).trigger("dragstart").trigger("dragleave");
    cy.get('[data-type="burger_constructor_cont"]').trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");
  
    cy.get('[data-type="ingredient_main"]').eq(2).trigger("dragstart").trigger("dragleave");
    cy.get('[data-type="burger_constructor_cont"]').trigger("dragenter").trigger("dragover").trigger("drop").trigger("dragend");

    let total = 0;
    let expectedTotal = 0;

    cy.get('[class^=constructor-element__price]').each(price => {
        total = total + parseInt(price.text());
    }).then(() => {
       cy.get('[class^=burger-constructor_burgerOrderPrice]').invoke('text').then(text => expectedTotal = +text).then(() => {
          expect(total).equal(expectedTotal);
        });
    });

    cy.get('button').contains('Оформить заказ').click();
    cy.get('[class^=modal_modalWin]', { timeout: 16000 }).should('contain', 'Ваш заказ начали готовить');
  });
})


