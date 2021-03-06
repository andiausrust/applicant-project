describe('Todo list', () => {
  beforeEach(() =>
    cy.visit('/')
  );

  it('creates a todo', () => {

    const todo = 'test-dodo'

    cy.byTestId('todo-list__create-button').click();
    cy.byTestId('create-todo__description').type(todo);

    cy.byTestId('create-todo__date-input').clear().type('12/27/2021');
    cy.byTestId('create-todo__add').click();

    // check if its there - implicit in cypress
    cy.contains(todo);

    // clean up
    cy.byTestId('todo__item')
      .each($item => {
        if ( $item.text().includes(todo) ) {
          cy.wrap($item).find('[data-testId="todo__item-remove"]').click();
        }
      });
  });
});
