define(['exports', 'src/ui/auto-update-textfield'],
    function (incrementerField, autoUpdateTextField) {

  incrementerField.view = autoUpdateTextField.view.extend({

    'increment': 10

    ,'initialize': function (opts) {
      autoUpdateTextField.view.prototype.initialize.call(this, opts);
    }

    ,'tweakVal': function (tweakAmount) {
      this.$el.val(parseInt(this.$el.val(), 10) + tweakAmount);
      this.$el.trigger('keyup');
    }

    ,'onArrowUp': function () {
      this.tweakVal(this.increment);
    }

    ,'onArrowDown': function () {
      this.tweakVal(-this.increment);
    }

  });

});
