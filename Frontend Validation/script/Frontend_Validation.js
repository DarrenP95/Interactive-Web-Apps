function handle_form_submission()
{
  alert('Submit button pressed');
  return false; //do not submit the form
}

(function() {
  
    var input              = document.getElementById('newtask');
    var form               = document.getElementById('myform');
    var elem               = document.createElement('div');
        elem.id            = 'notify';
        elem.style.display = 'none';
  
        form.appendChild(elem);
  
    input.addEventListener('invalid', function(event){
      event.preventDefault();
      if ( ! event.target.validity.valid ) {
        input.className    = 'invalid animated shake';
        elem.textContent   = 'Please make sure your task contains no html characters';
        elem.className     = 'error';
        elem.style.display = 'block';
      }
    });
  
    input.addEventListener('input', function(event){
      if ( 'block' === elem.style.display ) {
        input.className = '';
        elem.style.display = 'none';
      }
    });
  
  })();1