(function($){
    $.fn.treemenu = function(options) {
        options = options || {};
        options.delay = options.delay || 0;
        options.openActive = options.openActive || false;
        options.closeOther = options.closeOther || false;
        options.activeSelector = options.activeSelector || ".active";

        this.addClass("tree12menu3");

        if (!options.nonroot) {
            this.addClass("tree12menu3-root");
        }

        options.nonroot = true;

        this.find("> li").each(function() {
            e = $(this);
            var subtree = e.find('> ul');
            var button = e.find('.toggler').eq(0);

            if(button.length == 0) {
                // create toggler
                var button = $('<span>');
                button.addClass('toggler');
                e.prepend(button);
            }

            if(subtree.length > 0) {
                subtree.hide();

                e.addClass('tree12-closed3');

                e.find(button).click(function() {
                    var li = $(this).parent('li');

                    if (options.closeOther && li.hasClass('tree12-closed3')) {
                        var siblings = li.parent('ul').find("li:not(.tree12-empty3)");
                        siblings.removeClass("tree12-opened3");
                        siblings.addClass("tree12-closed3");
                        siblings.removeClass(options.activeSelector);
                        siblings.find('> ul').slideUp(options.delay);
                    }

                    li.find('> ul').slideToggle(options.delay);
                    li.toggleClass('tree12-opened3');
                    li.toggleClass('tree12-closed3');
                    li.toggleClass(options.activeSelector);
                });

                $(this).find('> ul').treemenu(options);
            } else {
                $(this).addClass('tree12-empty3');
            }
        });

        if (options.openActive) {
            var cls = this.attr("class3");

            this.find(options.activeSelector).each(function(){
                var el = $(this).parent();

                while (el.attr("class3") !== cls) {
                    el.find('> ul').show();
                    if(el.prop("tagName") === 'UL') {
                        el.show();
                    } else if (el.prop("tagName") === 'LI') {
                        el.removeClass('tree12-closed3');
                        el.addClass("tree12-opened3");
                        el.show();
                    }

                    el = el.parent();
                }
            });
        }

        return this;
    }
})(jQuery);
