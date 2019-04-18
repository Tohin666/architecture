<?php

namespace Service\Product;

use Model\Entity\Product;

class SortByName implements ISortable
{
    public function sort(array $productList): array
    {
        $compareFunction = function (Product $productA, Product $productB) {
            return strcmp($productA->getName(), $productB->getName());
        };

        usort($productList, $compareFunction);

        return $productList;
    }


}