<?php

declare(strict_types=1);

namespace Service\Product;

use Model;

class Product
{
    /**
     * Получаем информацию по конкретному продукту
     *
     * @param int $id
     * @return Model\Entity\Product|null
     */
    public function getInfo(int $id): ?Model\Entity\Product
    {
        $product = $this->getProductRepository()->search([$id]);
        return count($product) ? $product[0] : null;
    }

    /**
     * Получаем все продукты
     *
     * @param string $sortType
     *
     * @return Model\Entity\Product[]
     */
    public function getAll(string $sortType): array
    {
        $productList = $this->getProductRepository()->fetchAll();

        // Применить паттерн Стратегия
        // $sortType === 'price'; // Сортировка по цене
        // $sortType === 'name'; // Сортировка по имени

        switch ($sortType) {
            case 'price':
                $sorterStrategy = new SortByPrice();
                break;
            case 'name':
                $sorterStrategy = new SortByName();
                break;
            default:
                $sorterStrategy = new SortByName();
        }

        $productSorter = new ProductSorter($sorterStrategy);

        return $productSorter->sort($productList);
    }


    // Здесь фабричный метод применен для того чтобы клиентский код мог получить информацию о продукте не зная детали
    // реализации, т.е. он не знает как и откуда получить эту информацию, он знает только какой метод нужно вызвать
    // чтобы его получить.

    /**
     * Фабричный метод для репозитория Product
     *
     * @return Model\Repository\Product
     */
    protected function getProductRepository(): Model\Repository\Product
    {
        return new Model\Repository\Product();
    }
}
