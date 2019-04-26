<?php

use Command\MainCommand;

$container
    ->register(MainCommand::class)
    ->addTag('console.command', array('command' => 'app:main'))
;