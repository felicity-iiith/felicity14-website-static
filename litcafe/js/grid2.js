var felicityGeneral="Felicity '14 presents LitCafe, the coolest arena for authors, poets, thinkers and playwrights. LitCafe hosts a wide range of fun-filled online and onsite events attracting people like you from all over world in this battle of words. So together with your cup of brimming ideas, join us in this journey. Prepare yourself for a novel experience - and - some handsome prizes along the way!"
var I=0;
var rstGrid;
var rstDt;
var detailsW;
function resetDisplay()
{
  resetGrid();
  changeFontSize();
  resetDetailsW();
}  
  
function resetDetails()
{
    rstGrid = setTimeout(function() {
        $('.details-box-content').stop().fadeOut(400, function() {
        $(this).css('height', '');
        $(this).html(felicityGeneral).fadeIn().removeClass('event-message').addClass('default');
        });
        clearTimeout(rstGrid);
    }, 1000);
}
function resetGrid()
{
    var dw = $(document).width();
    var eg = $('.event-grid');
	if(eg.width() < dw*0.5)
	{
		eg.width(eg.height());
		eg.css('height','');
	}
	else
    {
        eg.height(dw*0.5);
        eg.width(dw*0.5);
    }
}
function changeFontSize()
{
    $('.cell-contents a').fitText(0.65);
}

function resetDetailsW()
{
    //$('.event-details-content').height($('.grid-wrapper').height())
    return;
    var ww = $(document).width();
    var gw = $('.grid-wrapper').width();
    var dw = ww-gw-(ww/5);
    $('.details-box').width(dw);
}
$(document).ready(function() {
    grid = $('.event-grid');
    gridWrapper = $('.grid-wrapper');
    //jQuery(".h1").fitText();
    resetGrid();
    changeFontSize();
    //resetDetailsW();
    $(window).resize(function() {
       resetDisplay(); 
    });
    $('.grid-wrapper').hover(function() {
        clearTimeout(rstGrid);
    },
    function()
    {
        resetDetails();
    }
    );
    $('.cell-contents').hover(
        function() {
        var elem = $(this);
        rstDt = setTimeout(function()
        {
            $('.details-box-content').stop().fadeOut(400, function() {
                $(this).css('height', '');
                $(this).html(elem.find('.details').html()).fadeIn().addClass('event-message').removeClass('default');
            });
        },
        50);
    },
    function() {
       clearTimeout(rstDt);
    });
    
    $('.details-box-content').hover(
    function() {
        clearTimeout(rstGrid);
    },
    function() {
        if($(this).hasClass('event-message'))
            resetDetails();
    }
    );
    $('.event-grid .cell-contents').hover(
          function() {
              var $this = $(this);
              var $overlay = $this.find('.overlay');
              var $text = $this.find('.h1');
              
              $overlay.data('h', $overlay.height());
              if($text.hasClass('duo')) {
                  $text.stop().animate({top: '0.6em'});
              }
              else {
                  $text.stop().animate({top: '1.25em'});
              }
              $overlay.css('height', $overlay.height()).stop().animate({
height: $this.height() - (0.5 * $overlay.css('font-size').replace('px',''))

              });
          },
          function() {
              var $this = $(this);
              var $overlay = $this.find('.overlay');
              //$overlay.parent().stop().animate({fontSize: $overlay.data('fs')});
              var $text = $this.find('.h1');
              if($text.hasClass('duo')) {
                  $text.stop().animate({top: '0'});
                  }
              else
                  $text.stop().animate({top: '0.6em'});
              $overlay.stop().animate({
                  height: $overlay.data('h')
                  },
                  function() {
                    $overlay.css('height','');
                });
          });
})
