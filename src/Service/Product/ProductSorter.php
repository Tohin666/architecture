<?php

namespace Service\Product;

class ProductSorter
{
    private $sorterStrategy;

    public function __construct(ISortable $sorterStrategy)
    {
        $this->sorterStrategy = $sorterStrategy;
    }

    public function sort($productList)
    {
        return $this->sorterStrategy->sort($productList);
    }
}