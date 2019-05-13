<?php


namespace Model\Repository;


interface IStorageAdapter
{
    public function find($parameters);

    public function insert();

    public function update();

    public function delete();

}