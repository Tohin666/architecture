<?php

namespace Service\Product;

interface ISortable
{
    public function sort(array $productList): array;

}