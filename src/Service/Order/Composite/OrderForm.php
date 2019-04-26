<?php

namespace Service\Order\Composite;

/**
 * Клиентский код получает удобный интерфейс для построения сложных древовидных
 * структур.
 */
class OrderForm
{
    function getProductForm(): FormElement
    {
        $form = new Form('order', "Реквизиты получателя", "/order/order_checkout");
        $form->add(new Input('name', "Имя", 'text'));
        $form->add(new Input('secondName', "Фамилия", 'text'));

        $address = new Fieldset('address', "Адрес");
        $address->add(new Input('city', "Город", 'text'));
        $address->add(new Input('street', "Улица", 'text'));
        $form->add($address);

        $form->add(new Input('button', "", 'submit'));

        return $form;
    }

    /**
     * Структура формы может быть заполнена данными из разных источников. Клиент не
     * должен проходить через все поля формы, чтобы назначить данные различным
     * полям, так как форма сама может справиться с этим.
     */
    function loadProductData(FormElement $form)
    {
        $data = [
            'name' => 'Иван',
            'secondName' => 'Иванов',
            'address' => [
                'city' => 'Москва',
                'street' => 'Московская',
            ],
            'button' => 'Оформить заказ',
        ];

        $form->setData($data);
    }

    /**
     * Клиентский код может работать с элементами формы, используя абстрактный
     * интерфейс. Таким образом, не имеет значения, работает ли клиент с простым
     * компонентом или сложным составным деревом.
     */
    function renderProduct(FormElement $form)
    {

        return $form->render();

    }

//$form = getProductForm();
//loadProductData($form);
//renderProduct($form);

    /* вывод
    <form action="/product/add">
    <h3>Add product</h3>
    <label for="name">Name</label>
    <input name="name" type="text" value="Apple MacBook">
    <label for="description">Description</label>
    <input name="description" type="text" value="A decent laptop.">
    <fieldset><legend>Product photo</legend>
    <label for="caption">Caption</label>
    <input name="caption" type="text" value="Front photo.">
    <label for="image">Image</label>
    <input name="image" type="file" value="photo1.png">
    </fieldset>
    </form>
    */


}