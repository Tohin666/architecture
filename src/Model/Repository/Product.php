<?php

declare(strict_types=1);

namespace Model\Repository;

use Framework\Registry;
use Model\Entity;

class Product
{
    private $storageAdapter;
    private $tableName = 'products';

    /**
     * Product constructor.
     * Получаем драйвер подключения к хранилищу при создании объекта продукт.
     */
    public function __construct()
    {
        $this->storageAdapter = $this->getStorageAdapter();
    }

    private function getStorageAdapter(): IStorageAdapter
    {
        $storageAdapter = Registry::getDataConfig('db.adapter');
        return new $storageAdapter;
    }

    /**
     * Поиск продуктов по массиву id
     *
     * @param int[] $ids
     * @return Entity\Product[]
     */
    public function search(array $ids = []): array
    {
        if (!count($ids)) {
            return [];
        }

        $productList = [];
        // Реализуем шаблон прототип, чтобы не создавать каждый раз сущность продукт, а клонировать его.
        /** @var Entity\Product $prototype */
        $prototype = null;

        $productsArray = $this->storageAdapter->find(['table' => $this->tableName]);
        foreach ($productsArray as $item) {
//        foreach ($this->getDataFromSource(['id' => $ids]) as $item) {

            if (in_array($item['id'], $ids)) {
                if ($prototype) {
                    $product = clone $prototype;
                    $product->setId($item['id']);
                    $product->setName($item['name']);
                    $product->setPrice($item['price']);
                } else {
                    $product = new Entity\Product($item['id'], $item['name'], $item['price']);
                }

                $productList[] = $product;
//            $productList[] = new Entity\Product($item['id'], $item['name'], $item['price']);
            }
        }

        return $productList;
    }

    /**
     * Получаем все продукты
     *
     * @return Entity\Product[]
     */
    public function fetchAll(): array
    {
        $productList = [];
        // Реализуем шаблон прототип, чтобы не создавать каждый раз сущность продукт, а клонировать его.
        /** @var Entity\Product $prototype */
        $prototype = null;

        $productsArray = $this->storageAdapter->find(['table' => $this->tableName]);
        foreach ($productsArray as $item) {
//        foreach ($this->getDataFromSource() as $item) {

            if ($prototype) {
                $product = clone $prototype;
                $product->setId($item['id']);
                $product->setName($item['name']);
                $product->setPrice($item['price']);
            } else {
                $product = new Entity\Product($item['id'], $item['name'], $item['price']);
            }

            $productList[] = $product;
//            $productList[] = new Entity\Product($item['id'], $item['name'], $item['price']);
        }

        return $productList;
    }

//    /**
//     * Получаем продукты из источника данных
//     *
//     * @param array $search
//     *
//     * @return array
//     */
//    private function getDataFromSource(array $search = [])
//    {
//        $dataSource = [
//            [
//                'id' => 1,
//                'name' => 'PHP',
//                'price' => 15300,
//            ],
//            [
//                'id' => 2,
//                'name' => 'Python',
//                'price' => 20400,
//            ],
//            [
//                'id' => 3,
//                'name' => 'C#',
//                'price' => 30100,
//            ],
//            [
//                'id' => 4,
//                'name' => 'Java',
//                'price' => 30600,
//            ],
//            [
//                'id' => 5,
//                'name' => 'Ruby',
//                'price' => 18600,
//            ],
//            [
//                'id' => 8,
//                'name' => 'Delphi',
//                'price' => 8400,
//            ],
//            [
//                'id' => 9,
//                'name' => 'C++',
//                'price' => 19300,
//            ],
//            [
//                'id' => 10,
//                'name' => 'C',
//                'price' => 12800,
//            ],
//            [
//                'id' => 11,
//                'name' => 'Lua',
//                'price' => 5000,
//            ],
//        ];
//
//        if (!count($search)) {
//            return $dataSource;
//        }
//
//        $productFilter = function (array $dataSource) use ($search): bool {
//            return in_array($dataSource[key($search)], current($search), true);
//        };
//
//        return array_filter($dataSource, $productFilter);
//    }
}
