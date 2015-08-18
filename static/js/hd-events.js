var rounder = function(elem, sz, allBrowsers) {
  // rounded corners JS, handles IE7, 8 too:
  DD_roundies.addRule(elem, sz.toString()+'px', allBrowsers);
}
$(function() {
  // var rndrs = ['#primary'];
  // for(r in rndrs) {
  //   rounder(rndrs[r], 8, true);
  // }

  // Generic handler for retaining values when form submit errored out
  var formvalues = $.cookie('formvalues');
  if (formvalues) {
    try {
      formvalues = JSON.parse(formvalues);
      if (formvalues != null) {
        for (var key in formvalues) {
          if (key!=rooms) {
            $('[name='+key+']').val(formvalues[key]);
          }
        }      
        $.each($('[name=rooms]'), function(key, value) { 
          if ($(value).val()==formvalues["rooms"]) {
            $(value).attr("checked", "checked");
          }
        });
      }
    } catch (err) {
      // noop
    }
  }
  
  // set body class to current page for nav menu use. Also removes the new
  // button when we go to make a new event.
  var curPage = location.pathname;
  curPage = curPage.split("/").pop();
  if('' == curPage) {curPage = 'approved';}
  $('body').addClass(curPage);
  var old = $('#nav_'+curPage).text();
  $('#nav_'+curPage).addClass('current').replaceWith(old);
});
