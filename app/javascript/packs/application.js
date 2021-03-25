// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
//=require bootstrap
Rails.start()
Turbolinks.start()
ActiveStorage.start()
//= require_tree .
//= require jquery
//= require jquery_ujs
require('jquery')

$(function() {
    $('.sslick').slick({
        dots: false,
        arrows :false,
        //autoplay: true,
        //autoplaySpeed: 1000,
        swipe:true,
        autoplay: true,
    autoplaySpeed: 3000,
    });
});

$("document").ready(function(){
  $('.mypattern').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false,
    centerMode: true,
    centerPadding: '20%'
  });
});
