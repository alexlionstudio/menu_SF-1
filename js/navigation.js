$(document).ready(function() {

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню добовляем ID
	var pullNav = $('#navigation-toggle');
	var pullSearch = $('#search-toggle');
	var pullLang = $('#lang-toggle');

	var menu = $('#navigation-menu');
	var search = $('#search-bar');
	var lang = $('#lang-bar');

	var addToggleClassColor = 'top-header__toggle--color';
	
	// Классы с которыми работаем
	var addClassMenu = 'nav-bar--active';
	var addClassSearch = 'top-header__search--active';
	var addClassLang = 'top-header__lang--active';

	// NAVIGATION
	// Описываем событие при нажатии на кнопку
	$(pullNav).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass(addClassMenu);

	    // Добавляем модификатор --active
	    $(pullNav).toggleClass(addToggleClassColor);
	});

	// SEARCH
	// Описываем событие при нажатии на кнопку
	$(pullSearch).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    search.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass(addClassSearch);

	    $(pullSearch).toggleClass(addToggleClassColor);
	});

	// LANG
	// Описываем событие при нажатии на кнопку
	$(pullLang).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    lang.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass(addClassLang);

	    $(pullLang).toggleClass(addToggleClassColor);
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pullNav)
	// тогда убираем класс модификатор --active у кнопки pullNav
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if (pullNav.hasClass(addClassMenu)  ) {
   			pullNav.toggleClass(addClassMenu);
			menu.slideToggle();
			$(pullNav).toggleClass(addToggleClassColor);
	    }
	};
	function fnstartSearch(){	
		if (pullSearch.hasClass(addClassSearch)  ) {
   			pullSearch.toggleClass(addClassSearch);
			search.slideToggle();
			$(pullSearch).toggleClass(addToggleClassColor);
	    }
	};
	function fnstartLang(){	
		if (pullLang.hasClass(addClassLang)  ) {
   			pullLang.toggleClass(addClassLang);
			lang.slideToggle();
			$(pullLang).toggleClass(addToggleClassColor);
	    }
	}


	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 768) {
	        menu.removeAttr('style');
	        pullNav.removeClass(addClassMenu);
	        pullNav.removeClass(addToggleClassColor);
	        search.removeAttr('style');
	        pullSearch.removeClass(addClassSearch);
	        pullSearch.removeClass(addToggleClassColor);
	        lang.removeAttr('style');
	        pullLang.removeClass(addClassLang);
	        pullLang.removeClass(addToggleClassColor);
	    } else {

	    }
	});

	// Скрываем меню при клике на него на смартфоне и в планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	// MENU CLICK
	$(pullNav).on("click", function(){
		if (pullSearch.hasClass(addClassSearch)  ) {   			
			fnstartSearch();
	    }
	    if (pullLang.hasClass(addClassLang)) {   			
			fnstartLang();
	    }
	});
	$('#navigation-menu a').on("click", function(){
		fnstart();
	});	
	// LOGO CLICK
	$('#top-logo').on("click", function(){
		if (pullNav.hasClass(addClassMenu)  ) {   			
			fnstart();
	    }
	    if (pullSearch.hasClass(addClassSearch)  ) {   			
			fnstartSearch();
	    }
	    if (pullLang.hasClass(addClassLang)) {   			
			fnstartLang();
	    }
	});
	// SEARCH CLICK
	$('#search-toggle').on("click", function(){
		if (pullLang.hasClass(addClassLang)) {   			
			fnstartLang();
	    }
	    if (pullNav.hasClass(addClassMenu)  ) {   			
			fnstart();
	    }
	});
	// LANG CLICK
	$('#lang-toggle').on("click", function(){
		if (pullNav.hasClass(addClassMenu)  ) {   			
			fnstart();
	    }
		if (pullSearch.hasClass(addClassSearch)  ) {   			
			fnstartSearch();
	    }
	});
	// --------------------END------------------------

	//  Lang
	if($('#lang-ru').hasClass('active')){
		pullLang.addClass('top-header__toggle-lang--ru');
		$('#lang-ru').addClass('top-header__lang-item--remove');		
	};
	if($('#lang-en').hasClass('active')){
		pullLang.addClass('top-header__toggle-lang--en');
		$('#lang-en').addClass('top-header__lang-item--remove');
	};

});