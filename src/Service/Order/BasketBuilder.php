<?php


namespace Service\Order;


use Service\Billing\IBilling;
use Service\Communication\ICommunication;
use Service\Discount\IDiscount;
use Service\User\ISecurity;

class BasketBuilder
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

    /**
     * @return IBilling
     */
    public function getBilling(): IBilling
    {
        return $this->billing;
    }

    /**
     * @param IBilling $billing
     */
    public function setBilling(IBilling $billing): void
    {
        $this->billing = $billing;
    }

    /**
     * @return IDiscount
     */
    public function getDiscount(): IDiscount
    {
        return $this->discount;
    }

    /**
     * @param IDiscount $discount
     */
    public function setDiscount(IDiscount $discount): void
    {
        $this->discount = $discount;
    }

    /**
     * @return ICommunication
     */
    public function getCommunication(): ICommunication
    {
        return $this->communication;
    }

    /**
     * @param ICommunication $communication
     */
    public function setCommunication(ICommunication $communication): void
    {
        $this->communication = $communication;
    }

    /**
     * @return ISecurity
     */
    public function getSecurity(): ISecurity
    {
        return $this->security;
    }

    /**
     * @param ISecurity $security
     */
    public function setSecurity(ISecurity $security): void
    {
        $this->security = $security;
    }

    /**
     * @return Basket
     */
    public function getBasket(): Basket
    {
        return $this->basket;
    }

    /**
     * @param Basket $basket
     */
    public function setBasket(Basket $basket): void
    {
        $this->basket = $basket;
    }




    public function build(): CheckoutProcess
    {
        return new CheckoutProcess($this);

    }

}