<?php

$container->setParameter('environment', 'dev');

$container->setParameter('view.directory', __DIR__ . '/../../src/View/');

// Задаем в параметрах список наблюдателей.
$container->setParameter('order.listeners',
    [
        'Service\Communication\Email',
        'Service\Communication\Sms',
    ]);