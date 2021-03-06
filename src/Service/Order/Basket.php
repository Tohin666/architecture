<?php

declare(strict_types = 1);

namespace Service\Order;

use Framework\Registry;
use Model;
use Service\Billing\Card;
use Service\Billing\IBilling;
use Service\Communication\Email;
use Service\Communication\ICommunication;
use Service\Discount\IDiscount;
use Service\Discount\NullObject;
use Service\User\ISecurity;
use Service\User\Security;
use SplSubject;
use SplObserver;
use SplObjectStorage;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class Basket implements SplSubject
{
    /**
     * @var SplObjectStorage
     */
    private $observers;

    /**
     * Сессионный ключ списка всех продуктов корзины
     */
    private const BASKET_DATA_KEY = 'basket';

    /**
     * @var SessionInterface
     */
    private $session;

    /**
     * @param SessionInterface $session
     */
    public function __construct(SessionInterface $session)
    {
        $this->session = $session;

        $this->observers = new SplObjectStorage();

        // наблюдателей определили в параметрах
        foreach (Registry::getDataConfig('order.listeners') as $observer){
//            $this->attach($observer);
            $this->attach(new $observer());
        }
    }

    /**
     * Добавляем товар в заказ
     *
     * @param int $product
     *
     * @return void
     */
    public function addProduct(int $product): void
    {
        $basket = $this->session->get(static::BASKET_DATA_KEY, []);
        if (!in_array($product, $basket, true)) {
            $basket[] = $product;
            $this->session->set(static::BASKET_DATA_KEY, $basket);
        }
    }

    /**
     * Проверяем, лежит ли продукт в корзине или нет
     *
     * @param int $productId
     *
     * @return bool
     */
    public function isProductInBasket(int $productId): bool
    {
        return in_array($productId, $this->getProductIds(), true);
    }

    /**
     * Получаем информацию по всем продуктам в корзине
     *
     * @return Model\Entity\Product[]
     */
    public function getProductsInfo(): array
    {
        $productIds = $this->getProductIds();
        return $this->getProductRepository()->search($productIds);
    }

    /**
     * Оформление заказа
     *
     * @return void
     */
    public function checkout(): void
    {
        $basketBuilder = new BasketBuilder();

        // Здесь должна быть некоторая логика выбора способа платежа
        $billing = new Card();
        $basketBuilder->setBilling($billing);

        // Здесь должна быть некоторая логика получения информации о скидки пользователя
        $discount = new NullObject();
        $basketBuilder->setDiscount($discount);

        // Здесь должна быть некоторая логика получения способа уведомления пользователя о покупке
        $communication = new Email();
        $basketBuilder->setCommunication($communication);

        $security = new Security($this->session);
        $basketBuilder->setSecurity($security);

        $basketBuilder->setBasket($this);

        $basketBuilder->build()->checkoutProcess();
//        $this->checkoutProcess($discount, $billing, $security, $communication);
    }

    // Выделил в отдельный класс CheckoutProcess.

//    /**
//     * Проведение всех этапов заказа
//     *
//     * @param IDiscount $discount,
//     * @param IBilling $billing,
//     * @param ISecurity $security,
//     * @param ICommunication $communication
//     * @return void
//     */
//    public function checkoutProcess(
//        IDiscount $discount,
//        IBilling $billing,
//        ISecurity $security,
//        ICommunication $communication
//    ): void {
//        $totalPrice = 0;
//        foreach ($this->getProductsInfo() as $product) {
//            $totalPrice += $product->getPrice();
//        }
//
//        $discount = $discount->getDiscount();
//        $totalPrice = $totalPrice - $totalPrice / 100 * $discount;
//
//        $billing->pay($totalPrice);
//
//        $user = $security->getUser();
//        $communication->process($user, 'checkout_template');
//
//        $this->notify();
//    }


    // Данный фабричный метод уже реализован в классе Service/Product/Product, и здесь полностью дублируется. Я думаю
    // здесь пример антипаттерна, и нужно вызывать этот метод из класса Product.

    /**
     * Фабричный метод для репозитория Product
     *
     * @return Model\Repository\Product
     */
    protected function getProductRepository(): Model\Repository\Product
    {
        return new Model\Repository\Product();
    }

    /**
     * Получаем список id товаров корзины
     *
     * @return array
     */
    private function getProductIds(): array
    {
        return $this->session->get(static::BASKET_DATA_KEY, []);
    }


    // Реализуем паттерн Наблюдатель.

    public function attach(SplObserver $observer)
    {
        $this->observers->attach($observer);
    }

    public function detach(SplObserver $observer)
    {
        $this->observers->detach($observer);
    }

    public function notify()
    {
        foreach ($this->observers as $observer) {
            $observer->update($this);
        }
    }

}
