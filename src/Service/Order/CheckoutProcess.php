<?php


namespace Service\Order;

use Service\Billing\IBilling;
use Service\Communication\ICommunication;
use Service\Discount\IDiscount;
use Service\User\ISecurity;

/**
 * Проведение всех этапов заказа
 *
 * @param IDiscount $discount,
 * @param IBilling $billing,
 * @param ISecurity $security,
 * @param ICommunication $communication
 * @return void
 */
class CheckoutProcess
{
    /** @var IBilling */
    private $billing;
    /** @var IDiscount */
    private $discount;
    /** @var ICommunication */
    private $communication;
    /** @var ISecurity */
    private $security;
    /** @var Basket */
    private $basket;

    public function __construct(BasketBuilder $basketBuilder)
    {
        $this->billing = $basketBuilder->getBilling();
        $this->discount = $basketBuilder->getDiscount();
        $this->communication = $basketBuilder->getCommunication();
        $this->security = $basketBuilder->getSecurity();
        $this->basket = $basketBuilder->getBasket();
    }


    public function checkoutProcess(): void {
        $totalPrice = 0;
        foreach ($this->basket->getProductsInfo() as $product) {
            $totalPrice += $product->getPrice();
        }

        $discount = $this->discount->getDiscount();
        $totalPrice = $totalPrice - $totalPrice / 100 * $discount;

        $this->billing->pay($totalPrice);

        $user = $this->security->getUser();
        $this->communication->process($user, 'checkout_template');

        $this->basket->notify();
    }

}