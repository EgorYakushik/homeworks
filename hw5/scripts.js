class User {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.addres = data.addres;
        this.phone = data.phone;
    }
    edit(obj) {
        this.id = obj.id || this.id;
        this.name = obj.name || this.name;
        this.email = obj.email || this.email;
        this.addres = obj.addres || this.addres;
        this.phone = obj.phone || this.phone;
    }
    get() {
        return console.log(this);
    }
}

// let user1 = new User({
//     id: '1234567',
//     name: 'Вася',
//     email: 'vasiliy@gmail.com',
//     addres: 'Минск, ул. Первомайская, 54Б',
//     phone: '+375292272769'
// })
// user1.get();
// user1.edit({
//     id: '5634577',
//     email: 'andrey@gmail.com',
//     phone: '+375296672119'
// })
// user1.get();

let data = [];
class Contacts extends User {
    constructor(data) {
        super(data);
    }
    add(obj) {
        data.push(obj);
    }
    edit(id, obj) {
        super.edit(obj);
        for(let i = 0; i < data.length; i++) {
            for (let g = 0; g < data[i].length; g++) {
                if (g = data[i].indexOf(id)) {
                    data[i] = super.edit(obj)
                }
            }
        }
    }
    remove(id) {
        for(let i = 0; i < data.length; i++) {
            for (let keyName in data[i]) {
                if ([keyName] = id) {
                    data.splice(1, data.indexOf(data[i]))
                }
            }
        }
    }
    get() {
        super.get()
    }
}

let user1 = new Contacts({
        id: '1234567',
        name: 'Вася',
        email: 'vasiliy@gmail.com',
        addres: 'Минск, ул. Первомайская, 54Б',
        phone: '+375292272769'
})
let user2 = new Contacts({
    id: '1548567',
    name: 'Андрей',
    email: 'andrey@gmail.com',
    addres: 'Минск, ул. Бор, 5',
    phone: '+375296662767'
})
user1.add(user1);
user2.add(user2);
console.log(data);

user1.edit('1234567', {
    email: 'vasiliy1234@gmail.com',
    addres: 'Минск, ул. Первомайская, 66Б',
})
console.log(data);

user1.remove('1548567')
console.log(data);

user1.get()

class ContactsApp extends Contacts {
    constructor(data) {
        super(data);
        this.app = document.createElement('div');
        this.app.classList.add('container');
        document.body.appendChild(this.app);
    }
    interface() {
        this.header = document.createElement('div');
        this.header.classList.add('header');
        this.app.appendChild(this.header);

        this.h3 = document.createElement('h3');
        this.h3.innerHTML ='Контакты';
        this.header.appendChild(this.h3);

        this.addContact = document.createElement('div');
        this.addContact.classList.add('add-contact');
        this.app.appendChild(this.addContact);

        this.imgAdd = document.createElement('img');
        this.imgAdd.classList.add('add_icon');
        this.imgAdd.setAttribute('src', 'img/add.png');
        this.imgAdd.setAttribute('alt', '#');
        this.addContact.appendChild(this.imgAdd);

        this.buttonAdd = document.createElement('button');
        this.buttonAdd.classList.add('add');
        this.buttonAdd.innerHTML ='Создать контакт';
        this.addContact.appendChild(this.buttonAdd);

        this.contact = document.createElement('div');
        this.contact.classList.add('contact');
        this.app.appendChild(this.contact);

        this.imgContact = document.createElement('img');
        this.imgContact.classList.add('contact_icon');
        this.imgContact.setAttribute('src', 'img/icon.png');
        this.imgContact.setAttribute('alt', '#');
        this.contact.appendChild(this.imgContact);

        this.inputName = document.createElement('input');
        this.inputName.classList.add('name');
        this.inputName.setAttribute('type', 'text');
        this.inputName.setAttribute('name', 'name');
        this.inputName.setAttribute('placeholder', 'Иван');
        this.contact.appendChild(this.inputName);

        this.imgEdit = document.createElement('img');
        this.imgEdit.classList.add('edit_icon');
        this.imgEdit.setAttribute('src', 'img/edit_icon.png');
        this.imgEdit.setAttribute('alt', '#');
        this.contact.appendChild(this.imgEdit);

        this.imgRemove = document.createElement('img');
        this.imgRemove.classList.add('edit_icon');
        this.imgRemove.setAttribute('src', 'img/remove_icon.png');
        this.imgRemove.setAttribute('alt', '#');
        this.contact.appendChild(this.imgRemove);

    }
    onAdd(){
        // Есть вопросы

    }
    onEdit() {
        // Есть вопросы

    }
    onRemove() {
        this.imgRemove.addEventListener('click', function(event) {
            const app = document.querySelector(".container");
            app.removeChild(event.target.parentNode)
        });

    }
    get() {
        super.get()
    }
}
let g1 = new ContactsApp ({
    id: '1234567',
    name: 'Вася',
    email: 'vasiliy@gmail.com',
    addres: 'Минск, ул. Первомайская, 54Б',
    phone: '+375292272769'
})
g1.interface()
g1.onRemove();
