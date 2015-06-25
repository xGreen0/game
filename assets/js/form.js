/**
 * Created by Роман on 15.06.2015.
 */
var inputElements = document.querySelectorAll('#auto-form input');
var tempPlaceHolder;

inputElements.onfocus = function() {
    tempPlaceHolder = this.getAttribute('placeholder');
    this.setAttribute('placeholder', '');
    alert('hui');
};

inputElements.onblur = function() {
    this.setAttribute('placeholder', tempPlaceHolder);
};

