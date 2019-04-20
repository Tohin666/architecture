<?php

namespace Service\Product;

use Model\Entity\Product;

class SortByPrice implements ISortable
{
    public function sort(array $productList): array
    {
        $compareFunction = function (Product $productA, Product $productB) {
            $priceA = $productA->getPrice();
            $priceB = $productB->getPrice();

            if ($priceA == $priceB) {
                return 0;
            }

            return $priceA > $priceB ? 1 : -1;
        };

        usort($productList, $compareFunction);

        return $productList;
    }


}