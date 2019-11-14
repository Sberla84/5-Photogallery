
    var $imgs = $('img');
    var $search = $('#myInput');
    var cache = [];
  
// CREATE ARRAY WITH CHAPTION

    $imgs.each(function() {
      cache.push({
        element: this,
        text: this.alt.trim().toLowerCase()
      });
    });
  

// SEARCH AND HIDE


    function filter() {
      var query = this.value.trim().toLowerCase();
      cache.forEach(function(img) {
        var index = 0;
        if (query) {
         index = img.text.indexOf(query);
        }
          img.element.parentElement.style.display = index === -1 ? 'none' : '';
      });
    }
    if ('oninput' in $search[0]) {
      $search.on('input', filter);
    } else {
      $search.on('keyup', filter);
    }





