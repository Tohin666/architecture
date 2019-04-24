<?php

declare(strict_types = 1);

namespace Service\Communication;

use Model;
use SplObserver;
use SplSubject;

class Email implements ICommunication, SplObserver
{
    /**
     * @inheritdoc
     */
    public function process(Model\Entity\User $user, string $templateName, array $params = []): void
    {
        $email = $user->getEmail();
        // Вызываем метод по формированию тела письма и последующего его отправления
    }


    public function update(SplSubject $subject)
    {
        // "Вы успешно оформили заказ!"
    }

}
