let Product = function() {
    this.create = function(type) {
        return document.createElement(type);
    }
    this.append = function(to, element, beforeElement) {
        if (!to || !element) return false;
        if (!beforeElement) to.appendChild (element);
        else to.insertBefore(element, beforeElement);
    }
    this.attr = function(element, name, value) {
        return element.setAttribute(name, value);
    }
    this.addClass = function(element, className) {
        return element.classList.add(className);
    }
    this.on = function(element, eventName) {
        if (eventName == 'mouseover') {
          return element.addEventListener(eventName, function() {
            this.style.cursor = 'zoom-in';})   
        } 
    }
}

let product = new Product();

let dwrap = product.create('div');
product.addClass(dwrap, 'wrapper');
product.append(document.body, dwrap);

let dimg = product.create('div');
product.addClass(dimg, 'img');
product.append(dwrap, dimg);

let img = product.create('img');
product.attr(img, 'src', 'img/boots.png');
product.attr(img, 'alt', '#');
product.append(dimg, img);
product.on(img, 'mouseover');

let ddescr = product.create('div');
product.addClass(ddescr, 'description');
product.append(dwrap, ddescr);

let h1 = product.create('h1');
h1.innerHTML = 'Серия Форвард';
product.append(ddescr, h1);

let h3 = product.create('h3');
h3.innerHTML = 'Код 852';
product.append(ddescr, h3);

let p = product.create('p');
p.innerHTML = 'Обувь изготавливается на мужской объемной колодке, увеличенной полноты, оптимальной для утепленной обуви. По теплозащитным свойствам модели этой серии превышают в 1,5 раза самые высокие требования для IV и "особого" пояса. Подошва ПУ/Резина - противоскользящая по EN. Обувь этой серии первая на рынке среди российских производителей получила сертификат соответствия EN 345';
product.append(ddescr, p);

let dsize = product.create('div');
product.addClass(dsize, 'size');
product.append(ddescr, dsize);

let dparamentrsize = product.create('div');
product.addClass(dparamentrsize, 'parametr');
dparamentrsize.innerHTML = 'Размеры:';
product.append(dsize, dparamentrsize);

let dparamentrdescrsize = product.create('div');
product.addClass(dparamentrdescrsize, 'parametr-description');
dparamentrdescrsize.innerHTML = '41, 42, 43, 44, 45';
product.append(dsize, dparamentrdescrsize);

let dcolor = product.create('div');
product.addClass(dcolor, 'color');
product.append(ddescr, dcolor);

let dparamentrcolor = product.create('div');
product.addClass(dparamentrcolor, 'parametr');
dparamentrcolor.innerHTML = 'Цвета:';
product.append(dcolor, dparamentrcolor);

let dparamentrdescrcolor = product.create('div');
product.addClass(dparamentrdescrcolor, 'parametr-description');
dparamentrdescrcolor.innerHTML = 'черный, коричневый, бордовый';
product.append(dcolor, dparamentrdescrcolor);

let dmaterial = product.create('div');
product.addClass(dmaterial, 'color');
product.append(ddescr, dmaterial);

let dparamentrmaterial = product.create('div');
product.addClass(dparamentrmaterial, 'parametr');
dparamentrmaterial.innerHTML = 'Материал:';
product.append(dmaterial, dparamentrmaterial);

let dparamentrdescrmaterial = product.create('div');
product.addClass(dparamentrdescrmaterial, 'parametr-description');
dparamentrdescrmaterial.innerHTML = '100% гладкая кожа';
product.append(dmaterial, dparamentrdescrmaterial);

