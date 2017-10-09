$(function() {
  
  var $list, $newItemForm;
  $list = $('ul');
  $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val(); //stocke la valeur entrée
    $list.append('<li>' + text + '</li>'); //insère le nouvel item dans la liste
    $('input:text').val(''); // vide la barre de saisie
  });

  $list.on('click', 'li', function() {
    var $this = $(this);
    $this.remove();
  });

});