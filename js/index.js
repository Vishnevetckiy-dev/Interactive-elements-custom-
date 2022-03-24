const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    duplicateItemsAllowed: false,

    itemSelectText: '',
    renderSelectedChoices: '',
});

/*Form*/
tippy('#myButton', {
    content: "Глава 2, страница 176",
  });

  tippy(button, {
    // default
    placement: 'top',
  });


 