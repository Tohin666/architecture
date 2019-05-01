<?php


namespace Model\Repository;


use Framework\Registry;

class JsonAdapter implements IStorageAdapter
{
    private $path;

    /**
     * JsonAdapter constructor.
     * Получаем путь до джейсон файла.
     */
    public function __construct()
    {
        $this->path = Registry::getDataConfig('db.path');
    }

    public function find($parameters)
    {
        $table = $parameters['table'];
        $json = $this->getJsonFile();
        return $json[$table];
    }

    public function insert()
    {
        // TODO: Implement insert() method.
    }

    public function update()
    {
        // TODO: Implement update() method.
    }

    public function delete()
    {
        // TODO: Implement delete() method.
    }


    protected function getJsonFile(): array
    {
        $json = file_get_contents($this->path);
        return json_decode($json, true);
    }

    protected function writeJsonFile(array $data)
    {
        $jsonString = json_encode($data);
        file_put_contents($this->path, $jsonString);
    }

}